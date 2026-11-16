
import { openAsBlob } from 'node:fs'
import path from 'node:path'
import { del, put } from '@vercel/blob'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { buildStoragePathData } from '@payloadcms/plugin-cloud-storage/utilities'

const getBlobStoreId = () => {
  const storeId = process.env.BLOB_STORE_ID

  if (!storeId) {
    throw new Error('BLOB_STORE_ID is not configured')
  }

  return storeId
}

const getBlobBaseUrl = () =>
  `https://${getBlobStoreId()}.public.blob.vercel-storage.com`

const buildBlobUrl = (fileKey: string) => {
  const directory = path.posix.dirname(fileKey)
  const filename = encodeURIComponent(path.posix.basename(fileKey))
  const encodedPath = directory === '.' ? filename : `${directory}/${filename}`

  return `${getBlobBaseUrl()}/${encodedPath}`
}

export const vercelBlobAdapter: Adapter = ({ collection, prefix = '' }) => ({
  name: 'vercel-blob',

  generateURL: ({ filename, prefix: documentPrefix = '' }) => {
    const { storageFilePath } = buildStoragePathData({
      collectionPrefix: prefix,
      docPrefix: documentPrefix,
      filename,
      useCompositePrefixes: true,
    })

    return buildBlobUrl(storageFilePath)
  },

  handleUpload: async ({ data, file, storageFilePath }) => {
    const body = file.tempFilePath
      ? await openAsBlob(file.tempFilePath)
      : file.buffer

    const result = await put(storageFilePath, body, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: file.mimeType,
      storeId: getBlobStoreId(),
    })

    if (file.imageSizeName !== undefined) {
      data.sizes[file.imageSizeName].filename = path.posix.basename(result.pathname)
    } else {
      data.filename = path.posix.basename(result.pathname)
    }

    return data
  },

  handleDelete: async ({ storageFilePath }) => {
    await del(buildBlobUrl(storageFilePath), {
      storeId: getBlobStoreId(),
    })
  },

  staticHandler: async () =>
    new Response('Not found', { status: 404 }),
})
