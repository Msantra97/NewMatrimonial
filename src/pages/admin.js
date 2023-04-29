import Admin from "@/components/admin/Admin";
import { Button, Table } from "react-bootstrap";
import User from "../components/admin/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { BASE } from "../../constant";
import { useEffect , useState } from "react";

export default function admin() {
  const [userData, setUserData] = useState();
  console.log("data",userData)
  async function user() {
    try {
      const { data } = await axios.get(`${BASE}dashboard/fetchData`);

      if (data) {
        console.log(data);
        setUserData(data)
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

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
          {/* <ul className="list-reset mb-8  "> */}
            <div style={{ margin: "10rem" }}>
            <Table striped bordered hover items-start size="sm">
          <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead> 
              <tbody>
              </tbody>
            </Table>
            </div>
          {/* </ul> */}

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
