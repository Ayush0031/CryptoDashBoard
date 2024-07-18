import React from 'react'
import Chart from './Chart'
import Cards from './Cards'
import SideNavBar from './SideNavBar'
import Header from './Header'

const Home = () => {

  return (
   <div className='d-flex'>
    <div className="col-auto">
      <SideNavBar/>
    </div>
      <div className='col-lg-8 col-md-3'>
        <Header className='col-sm-2'/>
        <Chart/>
        <Cards/>
      </div>
   </div>

  )
}

export default Home
