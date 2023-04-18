import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'userName',
      title: 'UserName',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
