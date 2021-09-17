import React from 'react'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import {Button ,TableContainer,TableCell,TableBody} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';


export default function Classlist(props) {


    const deleteConactHandler = (id) => {
        props.getClassId(id);
    };

    return (
        <>
            <div className="container pt-5"> 
                <div className="row">
                    <div className="col-md-10">
                        <h1>LIST OF THE CLASS</h1>
                    </div>
                    <div className="col-md-2">
                        <Link to="/add-class">
                            <button className="btn btn-info">Add Class</button>
                        </Link>
                    </div>  
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <TableContainer component={Paper} style={{'marginTop':'20px'}}>
                            <Table className="" aria-label="simple table">
                                    {
                                        props.classes.map((classes,key) => {
                                            return <TableBody key={key}>  
                                                <TableCell align="left">
                                                    <div className="row">
                                                        <div className="col-md-6"><h4 style={{"textTransform":"capitalize"}}>{classes.classname}</h4></div>
                                                        <div className="col-md-6 text-end">
                                                            <Link  style={{"marginRight":"10px"}} to={'/student-list/'+classes.id}>
                                                                <Button variant="contained" color="primary"><VisibilityIcon /></Button>
                                                            </Link>
                                                            <Button onClick={() => deleteConactHandler(classes.id)} variant="contained" color="secondary"><DeleteForeverIcon/></Button>
                                                        </div>
                                                    </div>
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
