import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Main from './Main'
import './navbar.css'
Modal.setAppElement('#root')
const Navbar = () => {
    const [state, setState] = useState(false)
    const [user, setUser] = useState([])
    const [search, setSearch]=useState("")
    useEffect(() => {
        async function fetchUser() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            // setUser(response.data)
            setUser(response.data)
            // user.map(el=>console.log(el.name))
        }
        fetchUser()
    }, [])
    function handleChange(e){
        setSearch(e.target.value)

    }
    return (
        <>
            <h1>Robohash</h1>
            <div>
                <ul className="nav justify-content-center  my-3">
                    <button type="button" className="btn btn-danger mx-3" onClick={() => setState(true)}>Open Popup</button>
                    <input type="text" onChange={handleChange}/>
                </ul>
                <Modal isOpen={state} onRequestClose={() => setState(false)}
                    style={
                        {
                            content: {
                                width: '700px',
                                height: '400px',
                                position: 'absolute',
                                top: '210px',
                                left: '400px'
                            }
                        }
                    }>
                </Modal>
            </div>
            <div className="image__container">
                {user.filter(user=>{
                    if(search === "")
                    return user
                    else if(user.name.toLowerCase().includes(search.toLowerCase()) 
                    ||
                    user.email.toLowerCase().includes(search.toLowerCase( )) )
                    return user
                }).map((el, index) => {
                    return (
                        <Main key={el.id}name={el.name}id={index + 1} email={el.email} />
                    )
                })}
            </div>
        </>
    )
}
export default Navbar
