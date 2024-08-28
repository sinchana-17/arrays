import {useState,useEffect} from 'react';
const questionDetails="https://jsonplaceholder.typicode.com/photos"

const FetchQuestion=()=>{
     const [question, setQuestion]=useState([])

     const questionHandler=async()=>{
         const response=await fetch(questionDetails)
         const newData=await response.json()
         setQuestion(newData)
         }
     useEffect(()=>{
             console.log(questionHandler())
             },[])

     return(
         <div>
             {question.map((item)=>{
                 return(
                     <div>
                         <h2>{item.id}</h2>
                         <h2>{item.url}</h2>
                         </div>
                     )
                 })}
             </div>
         )
    }
export default FetchQuestion;