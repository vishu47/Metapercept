import React from 'react'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Link , useHistory} from "react-router-dom";
import {Button ,TableContainer,TableCell,TableBody,TableHead,TableRow} from '@material-ui/core'


export default function Studentlist(props) {
    let userId = props.match.params.id;
    const history = useHistory();

    const deleteStudentHandler = (id) => {
        props.getStudentId(id);
    };

    return (
        <>
            <div className="container pt-5"> 
                <div className="row">
                    <div className="col-md-2">
                        <button style={{"margin":"20px 20px"}} onClick={()=>history.goBack()} className="btn btn-sm mr-3 btn-outline-dark">Back</button>
                    </div>
                    <div className="col-md-8 ">
                        <h1>List of the Student to the respective class</h1>
                    </div>
                    <div className="col-md-2">
                        <Link to={"/add-student/"+props.match.params.id}>
                            <Button variant="contained">Add Student</Button>
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <TableContainer component={Paper} style={{'marginTop':'20px'}}>
                            <Table className="" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">First Name</TableCell>
                                        <TableCell align="center">Last Name</TableCell>
                                        <TableCell align="center">Date of Joining</TableCell>
                                        <TableCell align="center">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    props.student
                                    .filter((data) => {
                                        const student = data.c_id === userId;
                                        return student;
                                    })
                                    .map((student,key) => {
                                        return <TableBody key={key}> 
                                            <TableCell align="center"><h5 style={{"textTransform":"capitalize"}}>{student.firstname}</h5></TableCell>
                                            <TableCell align="center"><h5>{student.lastname}</h5></TableCell>
                                            <TableCell align="center">{student.date}</TableCell>
                                            <TableCell align="center">
                                                <Button  onClick={() => deleteStudentHandler(student.id)} variant="contained" color="secondary">Delete</Button>
                                            </TableCell>
                                            
                                        </TableBody>
                                    })
                                }
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
