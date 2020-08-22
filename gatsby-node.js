const path = require(`path`)

exports.createPages = ({ actions }) => {
  const staticData = [
    { filename: 'placki', id: '1', text: 'Lubie placki' },
    { filename: 'graphql', id: '2', text: 'GraphQL is cool' },
    { filename: 'zaliczanie', id: '3', text: 'Zaliczanie' },
  ]
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  staticData.forEach(({ filename, text }) => {
    createPage({
      path: `/blog/${filename}`,
      component: blogPostTemplate,
      context: {
        text
      }
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type BlogPost implements Node {
      id: ID!
      text: String
    }
  `
  createTypes(typeDefs)
}
