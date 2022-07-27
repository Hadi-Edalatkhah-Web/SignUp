export const Validate=(data)=>{
    const errors={};

    // Name ++++++++++++++++++++++++++++
    ////////////////////////////////////

    if(!data.name.trim())
    {
        errors.name="name required"
    }
    else{
        delete errors.name
    }


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

    // confirmPassword ++++++++++++++++++++
    ///////////////////////////////////////

    if(data.password !== data.confirmPassword)
    {
        errors.confirmPassword="passwords not match"
    }
    else
    {
        delete errors.confirmPassword
    }
    // Privacy Policy +++++++++++++++++++++
    ///////////////////////////////////////

    if(data.isAccepted === false)
    {
        errors.isAccepted="please accept our realations"
    }
    else
    {
        delete errors.isAccepted
    }
return errors
 }

