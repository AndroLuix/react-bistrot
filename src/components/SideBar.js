import React from 'react'
import { VscArrowSmallLeft } from 'react-icons/vsc'
import { LinkComponents, SocialComponent } from '../utilis/links'
import { useGlobalContext } from '../context'

const SideBar = () => {

  const { isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar":"sidebar"}`}>
    <div className="sidebar-content">
      <header className="nav-header container">
        <div className="nav-brand">
          <h3>CraftCode</h3> <img src="" alt="" />
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className='nav-icon'/>
          </button>
          
          </header>

          <div className="container">
            <LinkComponents classlink='sidebar-links' />
          </div>

          <SocialComponent classSocial='sidebar-social' />
        </div>

   

   </aside>
  )
}

export default SideBar