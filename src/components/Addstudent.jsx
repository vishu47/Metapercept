// import {React,useState}, { Component } from 'react';
import {React,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button } from '@material-ui/core'
import {useHistory,Link} from "react-router-dom";



export default function Addstudent(props) {

    const history = useHistory();

    const [data , setData] = useState({
        c_id : props.match.params.id,
        lastname : "",
        firstname : "",
        date : "",
    });

    const handle = (e) =>{
        const newdata = {...data}
        newdata[e.target.name] = e.target.value
        setData(newdata);
        console.log(data);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (data.classname === "" && data.lastname === " " && data.lastname === " " && data.date === " ") {
            alert("ALl fields are is mandatory!");
            return;
        }
        props.addStudentHandler(data)
        alert('New Student name '+ data.firstname +' '+ data.lastname +' added Successfully!!');
        setData({firstname:"",lastname:"",date:""});
        history.goBack()
    }


    return (
        <div>
            <div className="container">
                <div className="row " >
                    <div style={{"margin":"20px 20px"}} className=" col-md-12 d-flex justify-content-center">
                        <button style={{"margin":"12px 50px 12px 0"}} onClick={()=>history.goBack()} className="btn btn-sm mr-3 btn-outline-dark">Back</button>
                        <h1>Add New Student to the Class</h1>
                    </div>
                    <div className="col-md-4 m-auto ">
                        <form className="card p-3" onSubmit={ (e) => submitHandler(e)} noValidate autoComplete="off">
                            <TextField id="firstname" label="First Name*" onChange = {(e)=>handle(e)} name="firstname" value={data.firstname} type="text"/><br/>
                            <TextField id="lastname" label="Last Name" name="lastname" onChange = {(e)=>handle(e)}  value={data.lastname} type="text"/><br/>
                            <TextField id="date" label="" name="date" onChange = {(e)=>handle(e)}  value={data.date} type="date"  required /><br/>
                            <button className="btn btn-success mt-3"  variant="contained">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



// class Addstudent extends Component {


//     state = {
//         firstname: "",
//         lastname: "",
//         date: "",
//       };
    
//       add = (e) => {
//         e.preventDefault();
//         if (this.state.firstname === "" || this.state.lastname === "" || this.state.date === "") {
//           alert("All the fields are mandatory!");
//           return;
//         }
//         this.props.addStudentHandler(this.state);
//         alert('New Student name '+ this.state.firstname +' '+ this.state.lastname +' added Successfully!!');
//         this.setState({ firstname: "", lastname: "" ,date:""});
//         this.props.history.push("/");
//       };



//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <h1>Add New Student to the Class</h1>
//                         </div>
//                         <div className="col-md-4 m-auto ">
//                             <form className="card p-3" onSubmit={this.add} noValidate autoComplete="off">
//                                 <TextField 
//                                     id="firstname" 
//                                     label="First Name*" 
//                                     value={this.state.firstname}
//                                     name="firstname" 
//                                     onChange={(e) => this.setState({ firstname: e.target.value })}
//                                     type="text"/><br/>
//                                 <TextField id="lastname" label="Last Name" name="lastname" 
//                                     onChange={(e) => this.setState({ lastname: e.target.value })} 
//                                     value={this.state.lastname}
//                                     type="text"/><br/>
//                                 <TextField id="date" label="" 
//                                     name="date" 
//                                     onChange={(e) => this.setState({ date: e.target.value })} 
//                                     value={this.state.date}
//                                     type="date"/><br/>
//                                 <button className="btn btn-success">Add</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Addstudent;
