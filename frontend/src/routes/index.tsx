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
		<Route path="/dashboard" exact component={Dashboard} isPrivate />
		<Route path="/users" exact component={UserList} isPrivate />
		<Route
			path="/imoveis"
			exact
			component={ImovelListagem}
			isPrivate
		/>
		<Route
			path="/imoveis/cadastro"
			exact
			component={ImovelCreate}
			isPrivate
		/>
        <Route
			path="/imoveis/:id"
			exact
			component={ImovelEdit}
			isPrivate
		/>
        <Route
			path="/imoveis/:id/proprietarios"
			exact
			component={ProprietarioListagem}
			isPrivate
		/>
          <Route
			path="/imoveis/:id/proprietario/create"
			exact
			component={ProprietarioCreate}
			isPrivate
		/>
        <Route
			path="/imoveis/:id_imovel/proprietario/:id"
			exact
			component={ProprietarioEdit}
			isPrivate
		/>
        <Route
			path="/imoveis/:id/imagens"
			exact
			component={ImovelImages}
			isPrivate
		/>
		<Route
			path="/users/create"
			exact
			component={CreateUser}
			isPrivate
		/>
	</Switch>
);

export default Routes;
