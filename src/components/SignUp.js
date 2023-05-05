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
    return (
        <div>   
            <form>
              <h1>SignUp</h1>
                    <div>
                        <label>Name</label>
                        <input type='text' name="Name" value={data.name} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.Name && focuserror.Name && <span>{useerror.Name}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' name="Email" value={data.Email} onChange={changehander}  onFocus={focushandler}/>                    
                        {useerror.Email && focuserror.Email && <span>{useerror.Email}</span>}

                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name="Password" value={data.Password} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.Password && focuserror.Password && <span>{useerror.Password}</span>}

                    </div>
                    <div>
                        <label>ConfrimPassword</label>
                        <input type='Password' name="ConfrimPassword" value={data.ConfrimPassword} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.ConfrimPassword && focuserror.ConfrimPassword && <span>{useerror.ConfrimPassword}</span>}

                
                    </div>
                    <div>
                        <label>I accepred terms privacy policy</label>   
                        <input type='checkbox' name="IsAccepted" value={data.IsAccepted} onChange={changehander} onFocus={focushandler}/>                    
                        {useerror.IsAccepted && focuserror.IsAccepted && <span>{useerror.IsAccepted}</span>}
                        
                    </div>
                    <div>
                        <a href="#">Login</a>
                        <button  type='submit'>SignUp</button>
                    </div>
            </form>
        </div> 
    );
};

export default SignUp;