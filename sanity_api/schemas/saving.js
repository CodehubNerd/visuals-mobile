import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'saving',
  title: 'saving',
  type: 'document',
  fields: [
    defineField ({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
  ],
})
