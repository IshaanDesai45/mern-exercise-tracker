import React,{useState}  from 'react'
import axios from 'axios'


function CreateUser (){

    const [username,setUsername] = useState('')

    const handleChange =(event)=>{
        setUsername(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const user = {
            username
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add',user)
            .then(res=>console.log(res.data))
        
        setUsername('')
    }

    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Usernmae: </label>
                    <input
                        required
                        className='form-control'
                        value={username}
                        onChange={handleChange}
                        type='text' />
                </div>
                <div>
                    <input type='submit' value='Create User' className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}


export default CreateUser