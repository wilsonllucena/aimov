import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateUser from "../pages/Users/CreateUser";
import UserList from "../pages/Users/UserList";
import ImovelListagem from "../pages/Imoveis/ImovelListagem";
import ImovelCreate from "../pages/Imoveis/ImovelCreate";
import ImovelEdit from "../pages/Imoveis/ImovelEdit";
import ImovelImages from "../pages/Imoveis/ImovelImages";
import ProprietarioListagem from "../pages/Imoveis/Proprietario/ProprietarioListagem";
import ProprietarioEdit from "../pages/Imoveis/Proprietario/ProprietárioEdit";
import ProprietarioCreate from "../pages/Imoveis/Proprietario/ProprietarioCreate";

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Login} />
		<Route path="/admin" exact component={Dashboard} isPrivate />
		<Route path="/admin/users" exact component={UserList} isPrivate />
		<Route
			path="/admin/imoveis"
			exact
			component={ImovelListagem}
			isPrivate
		/>
		<Route
			path="/admin/imovel/cadastro"
			exact
			component={ImovelCreate}
			isPrivate
		/>
        <Route
			path="/admin/imovel/:id"
			exact
			component={ImovelEdit}
			isPrivate
		/>
        <Route
			path="/admin/imovel/:id/proprietarios"
			exact
			component={ProprietarioListagem}
			isPrivate
		/>
          <Route
			path="/admin/imovel/:id/proprietario/create"
			exact
			component={ProprietarioCreate}
			isPrivate
		/>
        <Route
			path="/admin/imovel/proprietario/:id"
			exact
			component={ProprietarioEdit}
			isPrivate
		/>
        <Route
			path="/admin/images/imovel/:id"
			exact
			component={ImovelImages}
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
