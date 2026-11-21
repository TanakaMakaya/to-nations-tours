
import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'cardSize', 'status'],
    description: 'Manage travel activities, experiences, images and destination associations.',
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
      required: false,
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
      required: false,
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
      name: 'cardSize',
      type: 'select',
      required: true,
      defaultValue: 'small',
      options: [
        { label: 'Large', value: 'large' },
        { label: 'Small', value: 'small' },
        { label: 'Wide', value: 'wide' },
      ],
      admin: {
        description: 'Controls the activity card size on the existing Activities page.',
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
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
