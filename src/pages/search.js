import React from "react"
import Search from '../components/search'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
  
  	<Search id='search'/>
    
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>   
    </div>
  </Layout>
)

export default SearchPage
