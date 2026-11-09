
import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'priceFrom', 'status', 'featured'],
  },

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'title',
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
      name: 'activities',
      type: 'relationship',
      relationTo: 'activities',
      hasMany: true,
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
      required: true,
      admin: {
        description: 'For example: 5 days / 4 nights.',
      },
    },
    {
      name: 'priceFrom',
      type: 'number',
      min: 0,
      required: true,
      admin: {
        description: 'Starting price in the selected currency.',
      },
    },
    {
      name: 'currency',
      type: 'select',
      defaultValue: 'ZAR',
      options: [
        { label: 'South African Rand (ZAR)', value: 'ZAR' },
        { label: 'US Dollar (USD)', value: 'USD' },
        { label: 'Botswana Pula (BWP)', value: 'BWP' },
      ],
    },
    {
      name: 'groupSize',
      type: 'text',
      admin: {
        description: 'For example: 2–10 travellers.',
      },
    },
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
    {
      name: 'inclusions',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'exclusions',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
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
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
