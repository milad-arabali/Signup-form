export const validate = (data,type) =>{
    const error={

    }
   
    if(!data.Email){
        error.Email="Email required"


    }else if(!/\S+@\S+\.\S+/.test(data.Email))
    {
        error.Email="Email Invalid"
    }else{
        delete error.Email
    }

    if(!data.Password){
        error.Password="Password required"


    }else if (data.Password.length <6){
        error.Password="Password need to be 6 characher or more"
    }else{
        delete error.Password
    }
    
    if(type === "Signup"){
        
        if(!data.Name.trim()){
            error.Name="username required"
    
    
        }else{
            delete error.Name
        }
        if(!data.ConfrimPassword){
            error.ConfrimPassword="confrim the password"
        }else if(data.ConfrimPassword !== data.Password){
            error.ConfrimPassword="password is not match"
        }else{
            delete error.ConfrimPassword
        }
        if(data.IsAccepted){
            delete error.IsAccepted
        }else{
            error.IsAccepted="Accept our regulation"
        }


    }







    return error;
}