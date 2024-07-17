import React from 'react'
import Chart from './Chart'
import Cards from './Cards'
import SideNavBar from './SideNavBar'

const Home = () => {

  return (
    <>
    
      <SideNavBar/>
      <Chart />
    <div style={{paddingLeft:"10%",height:"100%",backgroundColor:"black"}}>
        <Cards />
    </div>
    </>
    
  )
}

export default Home
