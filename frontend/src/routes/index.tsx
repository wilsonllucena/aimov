import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateUser from "../pages/Users/CreateUser";
import UserList from "../pages/Users/UserList";
import ImovelListagem from "../pages/Imoveis/ImovelListagem";
import ImovelCreate from "../pages/Imoveis/ImovelCreate";

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Login} />
		<Route path="/admin" exact component={Dashboard} isPrivate />
		<Route path="/admin/users" exact component={UserList} isPrivate />
        <Route path="/admin/imoveis" exact component={ImovelListagem} isPrivate />
        <Route
			path="/admin/imovel/cadastro"
			exact
			component={ImovelCreate}
			isPrivate
		/>
		<Route
			path="/admin/user/create"
			exact
			component={CreateUser}
			isPrivate
		/>
	</Switch>
);

export default Routes;
