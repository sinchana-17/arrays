const array=[
    {
        name1:"sinchana",
        name2:"shetti",
        name3:"sinchu"
        },];

//let array=[4,1,"hello",{name:"sinchu"}]
//{name:"sinchu"} to access this we need to use object
//by using map function-it will map with each element in the array
const Arrays=()=>{
    return(
        <div>
           {/*
               <h1>{array[0]}</h1>
            <h2>{array[1]}</h2>
            <h2>{array[2]}</h2> */}
            {array.map((item)=>{
                return(
                    <div>
                        <h2>{item.name1}</h2>
                        <h2>{item.name2}</h2>
                        <h2>{item.name3}</h2>

                        </div>

                    )
                })}

            </div>
        )
    }
export default Arrays;