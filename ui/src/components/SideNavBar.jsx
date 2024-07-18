import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1a1e1c">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        
        <h3 style={{color: "#b7dd4f"}}>Carbon</h3>
        <h5 style={{color: "#b7dd4f"}}>Cell</h5>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon='fa-solid fa-house'>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="fa-regular fa-building">Organisation</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="fa-regular fa-cube">Assests</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="chart-line">
                Trade
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="history">
                History
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='iconClicked' icon="wallet">
                Wallet
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank" className='iconClicked'
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle" className='iconClicked'>
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <div>
              <h6>Brooklyn Simmons</h6>
              <p>brooklyn@simmons.com</p>
            </div>
           
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNavBar;
