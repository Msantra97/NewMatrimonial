import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import { Link, useNavigate} from 'react-router-dom'

function Admin() {

    
    // let history = useNavigate();

    // const handleDelete = (userid) => {
    //     var index = User.map(function(e){
    //         return e.userid
    //     }).indexOf(userid);

    //     User.splice(index,1);

    //     history('/admin');
    // }
console.log (User)
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User && User.length > 0
                                ?
                                User.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Email}
                                            </td>
                                            <td>
                                                <Button onClick={() => alert(item.userid)}>Edit</Button>
                                                &nbsp;                                 
                                                 {/* <Button onClick={() => handleDelete(item.userid)}>Delete</Button> */}

                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>


            </div>
        </Fragment>
    )
}

export default Admin;