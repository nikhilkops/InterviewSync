import React from "react";
import './Admin.css'
import { Outlet ,NavLink,useLocation} from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { IoIosCreate } from "react-icons/io";
import Logo from '../../images/LightLogo.svg'
import { LuLayoutDashboard } from "react-icons/lu";
const Admin = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/dashboard/allInterview':
        return 'All Interviews';
      case '/dashboard/createInterview':
        return 'Create Interview';
      default:
        return 'Dashboard';
    }
  };
  return <main className="admin-container">
      <div className="leftMenu"> 
         <header >
           <img src={Logo} style={{width:'70%', marginBottom:'1.1rem'}} />
           <div className="divider">&nbsp;</div>
         </header>  
         <div className="navLinks">
         <NavLink to='/dashboard' className={({ isActive }) =>
            isActive ? 'admin-btn active' : 'admin-btn'}>
            <LuLayoutDashboard className="navLink-icon" />
            <span>DashBoard</span>
        </NavLink>

         <NavLink to='allInterview' className={({ isActive }) =>
              isActive ? 'admin-btn active' : 'admin-btn'
            }>
 
              <SlPeople className="navLink-icon"/>
              <span>All Interview</span>
        
         </NavLink>

         <NavLink to='createInterview' className={({ isActive }) =>
              isActive ? 'admin-btn active' : 'admin-btn'
            }> 
       
              <IoIosCreate className="navLink-icon"/>
              <span>Create Interview</span>
             
         </NavLink>

         </div>
      </div>

      <div> 
        <nav className="admin-navbar">
          <div className='admin-navbar-title'>
           {getTitle()} 
          </div>
          </nav>
        <section className="rightMenu">  
         <Outlet/>
        </section>
      </div>

  </main>
};

export default Admin;
