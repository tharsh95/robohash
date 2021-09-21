import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './main.css'
const Main = ({id, name, email}) => {
    const [image, setImage] = useState()
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(`https://robohash.org/${id}?200x200`)
            setImage(response.config.url)
        }
        fetchData()
    })
    return (
        <div className='image'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    )
}

export default Main
