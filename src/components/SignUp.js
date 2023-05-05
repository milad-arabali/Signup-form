import React ,{useState ,useEffect}from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import Styles from "./SignUp.module.css"

const SignUp = () => {
    const[data,setData]= useState({
        Name:"",
        Email:"",
        Password:"",
        ConfrimPassword:"",
        IsAccepted:false

    })
    const [useerror,setUseerror]= useState({})
    const [focuserror,setFocuserror]= useState({})
    useEffect(()=>{
            setUseerror(validate(data))
            // console.log(useerror);
    },[data,focuserror])
        const changehander= event => {
            if(event.target.name === "IsAccepted"){
                setData({...data,[event.target.name]: event.target.checked})

            }else
            {

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
                notify("success ","success");
            }
            else{
                notify("invalid data ","error");
                setFocuserror({
                    Name:true,
                    Email:true,
                    Password:true,
                    ConfrimPassword:true,
                    IsAccepted:true
                })
                
            }
        }
    return (
        <div>   
            <form onSubmit={submitHandler} className={Styles.formContainer}>
              <h1 className={Styles.header}>SignUp</h1>
                    <div  className={Styles.formField}>
                        <label>Name</label>
                        <input  className={(useerror.Name && focuserror.Name) ? Styles.uncompleted : Styles.formInput} type='text' name="Name" value={data.Name} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.Name && focuserror.Name && <span>{useerror.Name}</span>}
                    </div>
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
                    <div className={Styles.formField}> 
                        <label>ConfrimPassword</label>
                        <input className={(useerror.ConfrimPassword && focuserror.ConfrimPassword) ? Styles.uncompleted : Styles.formInput} type='Password' name="ConfrimPassword" value={data.ConfrimPassword} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.ConfrimPassword && focuserror.ConfrimPassword && <span>{useerror.ConfrimPassword}</span>}

                
                    </div>
                    <div className={Styles.formField}>
                        <div className={Styles.checkBoxContainer}>
                            <label>I accepred terms privacy policy</label>          
                            <input className={(useerror.IsAccepted && focuserror.IsAccepted) ? Styles.uncompleted : Styles.formInput} type='checkbox' name="IsAccepted" value={data.IsAccepted} onChange={changehander} onFocus={focushandler}/>                    
                        </div>
                        {useerror.IsAccepted && focuserror.IsAccepted && <span>{useerror.IsAccepted}</span>}
                        
                    </div>
                    <div className={Styles.formButtons} >
                        <a href="#">Login</a>
                        <button  type='submit'>SignUp</button>
                    </div>
            </form>
            <ToastContainer />
        </div> 
        
    );
};

export default SignUp;