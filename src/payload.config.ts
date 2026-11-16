
import 'dotenv/config'

import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Destinations } from './collections/Destinations'
import { Activities } from './collections/Activities'
import { Packages } from './collections/Packages'

import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { SiteSettings } from './globals/SiteSettings'

import { vercelBlobAdapter } from './storage/vercelBlobAdapter'

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

  plugins: [
    cloudStoragePlugin({
      enabled: process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'preview',
      alwaysInsertFields: true,
      useCompositePrefixes: true,
      collections: {
        media: {
          adapter: vercelBlobAdapter,
          prefix: 'media',
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
})
