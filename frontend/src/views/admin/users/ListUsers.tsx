import React, { useEffect, useState } from "react";
import CardTable from "components/Cards/CardTable.js";

// import api from "../../services/api";

interface ListUserProps {
  id: string;
  name: string;
  full_name: string;
}
const ListUser : React.FC = () => {
  const [users, setUsers] = useState<ListUserProps[]>([]);

  // useEffect(() => {
  //   api.get("/schedules")
  //   .then((response) => {
  //     setSchedules(response.data);
  //   }, []);
  // });

  // console.log("Eventos: ", schedules);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title="Usuários cadastrados" linkNovo="/admin/user/create">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                  Nome
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                  Nome Completo
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    {user.name}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.full_name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    
                  </td>
                </tr>
              ))}

            </tbody>
          </CardTable>
        </div>
      </div>
    </>
  );
}

export default ListUser;