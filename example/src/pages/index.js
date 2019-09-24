import React from 'react'
import { SpeakingEvents } from 'gatsby-theme-speaking-yaml'
import Layout from '../components/layout'

const HomePage = ({ data }) => {
  return (
    <Layout>
      <SpeakingEvents />
    </Layout>
  )
}
export default HomePage
