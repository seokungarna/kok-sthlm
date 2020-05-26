import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery'


// Export Template for use in CMS preview
export const GalleryJkTemplate = ({
  title,
  subtitle,
  featuredImage,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
  
    <section className="section">
      <div className="container">
        <h2>Våra kök</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    
  </main>
)

const GalleryJk = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GalleryJkTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default GalleryJk

export const pageQuery = graphql`
  query GalleryJk($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
       
        
      }
    }
  }
`
