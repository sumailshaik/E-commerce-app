import React, { useEffect, useState } from 'react'
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState(null)
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try{
                axios.get(`/users/`,{
                        headers:{
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQzNTEzZjU1MWE0MWZiNTFiNmFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTIyNjU3MSwiZXhwIjoxNjM5NjU4NTcxfQ.zSTUvKyz_r2ObKYaCVXUAM_jtr52HFvV2DUkqzAtSoc"
                        }
                    }
                    ).then((response)=>{
                        setUsers(response.data);
                        console.log(users)
                    })
            }catch(err){
                console.log(err)
            }
            
        }
        getRandomLists();
    })

    return (
        <div>
            <h1>This is Users page</h1>
        </div>
    )
}

export default Users
