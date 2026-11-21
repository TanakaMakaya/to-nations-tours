
import type { CollectionConfig } from 'payload'

export const Destinations: CollectionConfig = {
  slug: 'destinations',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'country', 'destinationType', 'status'],
    description: 'Manage countries, cities, regions and travel destinations.',
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
      name: 'country',
      type: 'select',
      required: true,
      options: [
        { label: 'South Africa', value: 'south-africa' },
        { label: 'Zimbabwe', value: 'zimbabwe' },
        { label: 'Botswana', value: 'botswana' },
        { label: 'Eswatini', value: 'eswatini' },
        { label: 'Lesotho', value: 'lesotho' },
      ],
    },
    {
      name: 'destinationType',
      type: 'select',
      defaultValue: 'country',
      required: true,
      options: [
        { label: 'Country', value: 'country' },
        { label: 'City', value: 'city' },
        { label: 'Region', value: 'region' },
        { label: 'National Park', value: 'national-park' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'region',
      type: 'text',
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
      name: 'highlights',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
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
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
