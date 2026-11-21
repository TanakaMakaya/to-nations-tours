import 'dotenv/config'

import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Destinations } from './collections/Destinations'
import { Activities } from './collections/Activities'
import { Packages } from './collections/Packages'

import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { SiteSettings } from './globals/SiteSettings'

// ❌ 2. We completely removed the import for the old custom adapter

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },

  collections: [
    Users,
    Media,
    Destinations,
    Activities,
    Packages,
  ],

  globals: [
    HomePage,
    AboutPage,
    SiteSettings,
  ],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
    migrationDir: path.resolve(dirname, 'migrations'),
  }),

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // 👇 3. Replace the old cloudStoragePlugin with the official vercelBlobStorage
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: {
          prefix: 'media',
          disablePayloadAccessControl: true,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true, // Bypasses Vercel's 4.5MB upload limit
    }),
  ],
})