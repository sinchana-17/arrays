const array=[
    {
       name1:{
           fname:"Sinchana",
           lname:"shetti"
           },
       rollno: "87",
       branch:"Computer science",
       location:"bangalore",
       Gender: "female"

        },];

const Array1=()=>{
    return(
    <div>
        {array.map((item)=>{
            return(
                <div>
                           <h1>{item.name1.fname}</h1>
                           <h1>{item.name1.lname}</h1>
                           <h1>{item.rollno}</h1>
                           <h1>{item.branch}</h1>
                           <h1>{item.location}</h1>
                           <h1>{item.Gender}</h1>

                           </div>
            )
        })}
    </div>
    )
    }

export default Array1;