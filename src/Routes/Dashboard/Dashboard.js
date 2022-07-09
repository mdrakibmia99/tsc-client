import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Dashboard = () => {
    return (
       <section>
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li> <CustomLink to=''>Add Student</CustomLink> </li>
      <li> <CustomLink to=''>View Student</CustomLink> </li>
      <li> <CustomLink to=''>Add teacher</CustomLink> </li>
      <li> <CustomLink to=''>View Teacher</CustomLink> </li>
      <li> <CustomLink to=''>Todo</CustomLink> </li>
    </ul>
  
  </div>
</div>
       </section>
    );
};

export default Dashboard;