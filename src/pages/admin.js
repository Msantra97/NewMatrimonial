
// import User from "../components/admin/User";

import axios from "axios";
import { BASE } from "../../constant";
import { useEffect , useState } from "react";

export default function admin() {
  const [userData, setUserData] = useState();
  // console.log("data",userData)
  async function user() {
    try {
      const { data } = await axios.get(`${BASE}dashboard/fetchData`);

      if (data) {
        // console.log(data);
        setUserData(data.result)
      }
    } catch (error) {
      console.log("Error", error);
    }
  }
  async function deleteUser(userid) {
    console.log(userid);
    try {
      const { data } = await axios.post(`${BASE}dashboard/delete`, {user_id: userid});

      if (data) {
        console.log(data);
        // setUserData(data.result)

      }
      alert("user deleted")
     location.reload();
    } catch (error) {
      console.log("Error", error);
    }
  }
  console.log(userData);
  useEffect(() => {
    user();
  }, []);

  return (
    <div>
      <div className="flex h-screen">
        <div className="bg-slate-800 text-white p-8 w-64">
          <h2 className="mb-6">DASHBOARD</h2>

          <ul className="list-reset mb-8">
            <li className="text-lg">
              <button>Manage Users</button>
            </li>
            <li className="text-lg">
              <button>Statistics </button>
            </li>
            <li className="text-lg">
              <button>Account Settings</button>
            </li>
            <li className="text-lg">
              <button>Optional Settings</button>
            </li>
          </ul>
          {/* <small>Project</small> */}
          {/* <ul className="list-reset">
            <li>Discovery</li>
            <li>Key Objectives</li>
            <li>Problems</li>
          </ul> */}
        </div>
        <div className="flex-1 p-8 bg-slate-600">
          <div className="flex items-center justify-between mb-12">
            <div>
              <small className="mb-2 block">ADMIN DASHBOARD</small>
            </div>
          </div>

          <div className="flex justify-between items-baseline mb-3 bg-slate-900  p-4 ">
            <h3 className="text-indigo-dark">USERS</h3>
            <small className="text-grey-dark font-bold">Current</small>
          </div>

          
<div className="relative  overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            {userData ? userData.map((e)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {e.name}
              </th>
              <td className="px-6 py-4">
              {e.email}
              </td>
              <td className="px-6 py-4">
              <button  className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>deleteUser(e.user_id)}>Delete</button>
              </td>
             
          </tr>
            )) : null}
      
        </tbody>
    </table>
</div>

          
          <h3 className="text-indigo-dark mb-3">Meeting notes</h3>
          <ul className="bg-indigo-lightest text-indigo-dark p-4 pl-12 rounded">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Ipsam repellendus quam alias necessitatibus tempora maiores culpa
              illum amet accusamus autem?
            </li>
            <li>
              Officiis esse sapiente, enim velit animi ex? Maiores, suscipit
              reprehenderit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
