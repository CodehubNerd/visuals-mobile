// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'Email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },

  ],
})


