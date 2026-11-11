
import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',

  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'destinationLabel',
      'price',
      'status',
      'featured',
    ],
    description: 'Manage tour packages and travel itineraries.',
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
    // Basic information
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
      name: 'destinationLabel',
      type: 'text',
      required: true,
      admin: {
        description:
          'Display name from the original journey data, e.g. South Africa or Southern Africa.',
      },
    },
    {
      name: 'destinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select all countries, cities and regions covered by this tour.',
      },
    },
    {
      name: 'location',
      type: 'text',
    },

    // Duration and pricing
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'nights',
      type: 'text',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'Adult price, e.g. From $2,450 / Adult.',
      },
    },
    {
      name: 'childPrice',
      type: 'text',
      admin: {
        description: 'Child price, e.g. From $1,650 / Child.',
      },
    },

    // Travel information
    {
      name: 'transportation',
      type: 'text',
    },
    {
      name: 'tourType',
      type: 'text',
    },
    {
      name: 'language',
      type: 'text',
    },
    {
      name: 'fitnessLevel',
      type: 'text',
    },
    {
      name: 'groupSize',
      type: 'text',
    },
    {
      name: 'minimumAge',
      type: 'text',
    },
    {
      name: 'maximumAge',
      type: 'text',
    },

    // Images
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

    // Main content
    {
      name: 'overview',
      type: 'textarea',
    },
    {
      name: 'itineraryIntro',
      type: 'textarea',
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },

    // Daily itinerary
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },

    // Inclusions and exclusions
    {
      name: 'includes',
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
      name: 'excludes',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },

    // Related activities
    {
      name: 'activities',
      type: 'relationship',
      relationTo: 'activities',
      hasMany: true,
    },

    // Frequently asked questions
    {
      name: 'faqs',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },

    // Publishing
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
