import { React, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button } from '@material-ui/core'
import {useHistory,Link} from "react-router-dom";



export default function Addclass(props) {

    const history = useHistory();

    const [data , setData] = useState({
        classname : "",
        text : "",
    });

    const handle = (e) =>{
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(data);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (data.classname === "" ) {
            alert("All field are mandatory!");
            return;
        }
        props.addClassHandler(data)
        setData({classname:"",text:""});
        alert('New Class added Successfully!!');
        props.history.push("/");
    }


    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center"  style={{"margin":"20px 10px"}}>
                        <button className="btn btn-sm btn-dark" style={{"margin":"12px 50px 12px 0"}} onClick={() => history.goBack()}>Back</button>
                        <h1>Add New Class</h1>
                    </div>
                    <div className="col-md-4 m-auto ">
                        <form className="card p-3" onSubmit={ (e) => submitHandler(e)} noValidate autoComplete="off">
                            <TextField id="classname" label="Class Name*" onChange = {(e)=>handle(e)} name="classname" value={data.classname} type="text"/><br/>
                            <TextField id="text" label="Optional Text" name="text" onChange = {(e)=>handle(e)}  value={data.text} type="text"/><br/>
                            <button className="mt-3 btn btn-success" >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
