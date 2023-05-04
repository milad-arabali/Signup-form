import React ,{useState ,useEffect}from 'react';
import { validate } from './validate';

const SignUp = () => {
    const[data,setData]= useState({
        Name:"",
        Email:"",
        Password:"",
        ConfrimPassword:"",
        IsAccepted:false

    })
    const [useerror,setUseerror]= useState({})
    useEffect(()=>{
            setUseerror(validate(data))
            console.log(useerror);
    },[data])
        const changehander= event => {
            if(event.target.name === "IsAccepted"){
                setData({...data,[event.target.name]: event.target.checked})

            }else
            {

                setData({...data,[event.target.name]: event.target.value})

            }
            console.log(data)
        }
    return (
        <div>
            <h1>SignUp</h1>
                <div>
                    <label>Name</label>
                    <input type='text' name="Name" value={data.name} onChange={changehander}/>                    
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name="Email" value={data.Email} onChange={changehander}/>                    
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name="Password" value={data.Password} onChange={changehander}/>                    
                </div>
                <div>
                    <label>ConfrimPassword</label>
                    <input type='Password' name="ConfrimPassword" value={data.ConfrimPassword} onChange={changehander}/>                    
                </div>
                <div>
                    <label>I accepred terms privacy policy</label>   
                    <input type='checkbox' name="IsAccepted" value={data.IsAccepted} onChange={changehander}/>                    
                    
                </div>
                <div>
                    <a href="#">Login</a>
                    <button  type='submit'>SignUp</button>
                </div>
        </div> 
    );
};

export default SignUp;