import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  auth: true,

  admin: {
    useAsTitle: 'name',
  },

  access: {
    // Allow registration only while the first user is being created.
    // After that, only administrators can create users.
    create: async ({ req }) => {
      if (req.user) {
        return req.user.role === 'admin'
      }

      const { totalDocs } = await req.payload.count({
        collection: 'users',
      })

      return totalDocs === 0
    },

    read: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        {
          label: 'Administrator',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
  ],
}