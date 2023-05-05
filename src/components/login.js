import React ,{useState ,useEffect}from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import Styles from "./SignUp.module.css"

const Login = () => {
    const[data,setData]= useState({
       
        Email:"",
        Password:"",
      

    })
    const [useerror,setUseerror]= useState({})
    const [focuserror,setFocuserror]= useState({})
    useEffect(()=>{
            setUseerror(validate(data ,"Login"))
            // console.log(useerror);
    },[data,focuserror])
        const changehander= event => {
            if(event.target.name === "IsAccepted"){
                setData({...data,[event.target.name]: event.target.value})
            }
            console.log(data)
        }

        const focushandler = event =>{
                setFocuserror({...focuserror,[event.target.name]:true})

        }
        const submitHandler = event =>{
            event.preventDefault();
            if(!Object.keys(useerror).length){
                notify("Login success ","success");
            }
            else{
                notify("invalid data ","error");
                setFocuserror({
                
                    Email:true,
                    Password:true,
                   
                })
                
            }
        }
    return (
        <div className={Styles.container}>   
            <form onSubmit={submitHandler} className={Styles.formContainer}>
              <h1 className={Styles.header}>Login</h1>
                    <div className={Styles.formField}>
                        <label>Email</label>
                        <input className={(useerror.Email && focuserror.Email) ? Styles.uncompleted : Styles.formInput} type='text' name="Email" value={data.Email} onChange={changehander}  onFocus={focushandler}/>                    
                        {useerror.Email && focuserror.Email && <span>{useerror.Email}</span>}

                    </div>
                    <div className={Styles.formField}>
                        <label>Password</label>
                        <input className={(useerror.Password && focuserror.Password) ? Styles.uncompleted : Styles.formInput} type='password' name="Password" value={data.Password} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.Password && focuserror.Password && <span>{useerror.Password}</span>}

                    </div>
                    <div className={Styles.formButtons} >
                        <a href="#">SignUp</a>
                        <button  type='submit'>Login</button>
                    </div>
            </form>
            <ToastContainer />
        </div> 
        
    );
};

export default Login;