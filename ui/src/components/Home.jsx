import React from 'react'
import Chart from './Chart'
import Cards from './Cards'
import SideNavBar from './SideNavBar'
import Header from './Header'

const Home = () => {

  return (
   <div className='d-flex' >
    <div className="col-auto">
      <SideNavBar/>
    </div>
      <div className='col-lg-8 col-md-3' style={{backgroundColor:"black",width:"auto"}}>
        <Header className='col-sm-2'/>
        <Chart/>
        <Cards/>
      </div>
   </div>

  )
}

export default Home
{/* <div className='d-flex'>
    <div className="col-auto">
      <SideNavBar/>
    </div>
      <div className='col'>
        <Header />
        <Chart/>
        <Cards/>
      </div>
   </div> */}