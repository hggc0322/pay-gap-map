import React from "react"
import MapContainer from "../components/google-map"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = () => (
  <Layout>
  	<MapContainer id='map'/>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>   
    </div>
  </Layout>
)

export default MapPage
