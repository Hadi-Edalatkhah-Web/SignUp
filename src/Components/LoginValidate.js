export const loginValidate=(data)=>{
   const errors={};

    //  Email +++++++++++++++++++++++++++++
    ///////////////////////////////////////

    const emailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
    if(!data.email.trim())
    {
        errors.email="email required"

    }
    else if(!emailRegex.test(data.email))
    {
        errors.email="email invalid"
    }
    else{
        delete errors.email;
    }


    // Password +++++++++++++++++++++++++++
    ///////////////////////////////////////

    const passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(!passwordRegex.test(data.password))
    {
        errors.password="password invalid"

    }
    else{
        delete errors.password;
    }
    return errors
}