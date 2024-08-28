const array=[
    {
       name1:{
           fname:"Sinchana",
           lname:"shetti"
           },
       email:{
           personal:"sinchana@gmail.com",
           alternate:"sinchana123@gmail.com"
           },
       phoneno:{
           personal:"990898980",
           alternate:"798798990"
           },

        },];
    const Array2=()=>{
        return(
        <div>
            {array.map((item)=>{
                return(
                    <div>
                               <h1>{item.name1.fname}</h1>
                               <h1>{item.name1.lname}</h1>
                               <h1>{item.email.personal}</h1>
                               <h1>{item.email.alternate}</h1>
                               <h1>{item.phoneno.personal}</h1>
                               <h1>{item.phoneno.alternate}</h1>

                               </div>
                )
            })}
        </div>
        )
        }

    export default Array2;