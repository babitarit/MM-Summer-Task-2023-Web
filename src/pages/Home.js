import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/bg.jpg'
import '../styles/Homestyle.css';

const Home = () => {
  return (
   <Layout>
   <div className='home' style={{backgroundImage:`url(${Banner})`}}>
    <div className='headerContainer'>
      <h1>NEWS WEBSITE</h1>
      <p>top news</p>
      <Link to ="/Articles" >
<button>
 Top Articles
</button>
      </Link>

    </div>
   </div>
   </Layout>
  )
}

export default Home