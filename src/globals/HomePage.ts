
import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',

  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'accentText',
          type: 'text',
          admin: {
            description: 'The highlighted italic part of the hero heading.',
          },
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
        {
          name: 'secondaryButtonText',
          type: 'text',
        },
        {
          name: 'secondaryButtonLink',
          type: 'text',
        },
      ],
    },
    {
      name: 'introduction',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'featuredDestinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
    },
    {
      name: 'featuredPackages',
      type: 'relationship',
      relationTo: 'packages',
      hasMany: true,
    },    
    {
      name: 'whyChooseUsSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'whyChooseUs',
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
      name: 'callToAction',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
      ],
    },
  ],
}
