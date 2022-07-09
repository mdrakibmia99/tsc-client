import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Dashboard = () => {
    return (
       <section className=''>
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   <Outlet></Outlet>
  </div> 
  <div class="drawer-side border-r-2 ">
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li> <CustomLink to='/dashboard'>View Student</CustomLink> </li>
      <li> <CustomLink to='/dashboard/addStudent'>Add Student</CustomLink> </li>
      <li> <CustomLink to='/dashboard/addTeacher'>Add teacher</CustomLink> </li>
      <li> <CustomLink to='/dashboard/viewTeacher'>View Teacher</CustomLink> </li>
      <li> <CustomLink to='/dashboard/todo'>Todo</CustomLink> </li>
    </ul>
  
  </div>
</div>
       </section>
    );
};

export default Dashboard;