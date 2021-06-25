import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views

import Dashboard from 'views/admin/Dashboard.js';
import Maps from 'views/admin/Maps.js';
import Settings from 'views/admin/Settings.js';
// import Tables from "views/admin/Tables.js";
import Schedules from 'views/admin/Schedules';
import Sales from 'views/admin/Sales';
import CreateSchedule from 'views/admin/schedule/CreateSchedule';
import ListUser from 'views/admin/users/ListUsers';
import CreateUser from 'views/admin/users/CreateUser';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/schedules" exact component={Schedules} />
            <Route path="/admin/users" exact component={ListUser} />
            <Route path="/admin/user/create" exact component={CreateUser} />
            <Route path="/admin/schedule/create" exact component={CreateSchedule} />
            <Route path="/admin/sales" exact component={Sales} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
