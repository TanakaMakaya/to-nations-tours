
import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'status', 'updatedAt'],
    description: 'Manage travel activities and experiences offered across your destinations.',
  },

  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        status: {
          equals: 'published',
        },
      }
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => Boolean(req.user),

    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },

    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Adventure', value: 'adventure' },
        { label: 'Wildlife & Safari', value: 'wildlife' },
        { label: 'Cultural', value: 'cultural' },
        { label: 'Sightseeing', value: 'sightseeing' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Relaxation', value: 'relaxation' },
      ],
    },

    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },

    {
      name: 'description',
      type: 'richText',
    },

    {
      name: 'destinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
      required: true,
    },

    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },

    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'For example: 3 hours or Full day.',
      },
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
