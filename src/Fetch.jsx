import {useState,useEffect} from 'react';
const userDetails="https://jsonplaceholder.typicode.com/posts"

// await -- it waits until the process end

const Fetch=()=>{

    const [user,setUser]=useState([])

    const userHandler=async()=>{
          const response=await fetch(userDetails)
          const newData=await response.json()
          setUser(newData)
        }
    useEffect(()=>{
        console.log(userHandler())
        },[])

    return(
        <div>
            {user.map((item)=>{
                return(
                    <div>
                        <h2>{item.title}</h2>
                         <h2>{item.id}</h2>
                        </div>
                    )
                    })}
            </div>

        )
        }
export default Fetch;