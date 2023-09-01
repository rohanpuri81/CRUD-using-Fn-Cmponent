import React, { useState } from 'react';
import './Crud.css'

const Crud = () => {
    const submit=(e)=>{
        e.preventDefault();
    }

    const [inpId,setInpId]=useState("");
    const [inpFName,setInpFName]=useState("");
    const [inpLName,setInpLName]=useState("");
    const [inpEmail,setInpEmail]=useState("");
    const [srNo,setSrNo]=useState(0);
    let [arr,setArr]=useState([]);

    function submitTo(){
      arr.push({id:inpId,fName:inpFName,lName:inpLName,email:inpEmail})
      setInpId("");
      setInpFName("");
      setInpLName("");
      setInpEmail("");
      console.log(arr);
    }

    function uppa(){
        let kk = [...arr];
        kk.map((val,ind)=>{
            if(ind==(srNo-1)){
                val.id=inpId;
                val.fName=inpFName;
                val.lName=inpLName;
                val.email=inpEmail;
            }
        })

        setArr([...kk]);
        setInpId("");
      setInpFName("");
      setInpLName("");
      setInpEmail("");
    }

    return(<div>
        <form onSubmit={submit}>
        <label htmlFor="id">ID : </label>
        <input type="text" value={inpId} onChange={(e)=>{setInpId(e.target.value)}} id='id' />
        <br></br>
        <label htmlFor="fname">fName : </label>
        <input type="text" value={inpFName} onChange={(e)=>{setInpFName(e.target.value)}}id='fname' />
        <br></br>
        <label htmlFor="lname">lName : </label>
        <input type="text" value={inpLName} onChange={(e)=>{setInpLName(e.target.value)}}id='lname' />
        <br></br>
        <label htmlFor="email">Email : </label>
        <input type="text" value={inpEmail} onChange={(e)=>{setInpEmail(e.target.value)}}id='email' />
        <br></br><br></br>
        <button onClick={submitTo}>SUBMIT</button>
        <button onClick={uppa}>UPDATE</button>
        </form>
        <br></br><br></br>

        <table border={1}>
            <tr>
                <th>sr no</th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                arr.map((val,ind)=>{
                    let {id,fName,lName,email}=val;
                    let sr =ind+1;
                    return(
                        <tr>
                            <td>{sr}</td>
                            <td>{id}</td>
                            <td>{fName}</td>
                            <td>{lName}</td>
                            <td>{email}</td>
                            <td><button onClick={()=>{
                                setInpId(id);
                                setInpFName(fName);
                                setInpLName(lName);
                                setInpEmail(email);
                                setSrNo(sr);
                            }}>UPDATE</button></td>
                            <td><button onClick={()=>{
                                let kk = [...arr];
                                kk.splice(ind,1);
                                setArr([...kk])
                            }}>DELETE</button></td>
                        </tr>
                    );
                })    
            }
        </table>
    </div>);
}

export default Crud;