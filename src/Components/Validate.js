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

    const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if(!data.email.trim())
    {
        errors.email="name required"

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
        errors.email="use UpperCase ande LowerCase and $%^& in your password"

    }
    else{
        delete errors.email;
    }

    // confirmPassword ++++++++++++++++++++
    ///////////////////////////////////////

    if(!data.confirmPassword === data.password)
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

 }

