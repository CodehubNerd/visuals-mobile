export default defineType({
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [{ type: 'user' }],
}) 


