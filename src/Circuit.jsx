import {useState} from 'react'

const Circuit=()=>{

    const [game,setGame]=useState(true)

    const MyGame=()=>{
        return(
            <div>
                <h1>Virat Kholi</h1>
                </div>
            )
        }

    return(
        <div>
       {game && <MyGame/>}
       </div>

        )

    }
export default Circuit;