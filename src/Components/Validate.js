 const validate=(data)=>{
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


    // 
 }