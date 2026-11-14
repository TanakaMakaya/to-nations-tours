
import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',

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
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'tagline',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'ourStory',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea',
          admin: {
            description: 'Separate paragraphs with a blank line.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageCaption',
          type: 'text',
        },
        {
          name: 'imageHeading',
          type: 'text',
        },
      ],
    },
    {
      name: 'achievements',
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
      name: 'mission',
      type: 'textarea',
    },
    {
      name: 'missionHeading',
      type: 'text',
    },
    {
      name: 'missionQuote',
      type: 'textarea',
    },
    {
      name: 'vision',
      type: 'textarea',
    },
    {
      name: 'values',
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
          name: 'eyebrow',
          type: 'text',
        },
        {
          name: 'heading',
          type: 'text',
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
