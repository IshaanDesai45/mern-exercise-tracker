import React,{useState,useEffect} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function CreateExercise (){
    const [username,setUsername] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate]               = useState(new Date())
    const [duartion,setDuration]       = useState(0)
    const [users,setUsers]             = useState([])
     const onChangeUsername= (event)=>{
        setUsername(event.target.value)
    }

    const onChangeDescription= (event)=>{
        setDescription(event.target.value)
    }

    const onChangeDate =(newdate)=>{
        setDate(newdate)
    }

    const onChangeDuration =(event)=>{
        setDuration(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault();

        const exercise = {
            username,
            description,
            duartion,
            date
        }

        console.log(exercise)

        axios.post('http://localhost:5000/exercises/add',exercise)
            .then(res=>console.log(res.data))

        // window.location = '/'
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0){
                    setUsers(response.data.map(user=>user.username))
                    setUsername(response.data[0].username)
                }
            })
            .catch((error) => {
                console.log(error);
              })
    },[])

    return(
        <div>
            <h2>Create New Exercise Log</h2>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label>
                        Username: 
                    </label>
                    <select 
                            required
                            className='form-control'
                            value={username}
                            onChange={onChangeUsername}>
                        {
                            users.map(user =>{
                                return <option
                                        key={user}
                                        value={user}>
                                            {user}
                                        </option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Description: </label>
                    <input 
                        type='text'
                        className='form-control'
                        value={description}
                        onChange={onChangeDescription} />
                </div>

                <div className="form-group">
                    <label>Duration: </label>
                    <input 
                        type='text'
                        className='form-control'
                        value={duartion}
                        onChange={onChangeDuration} />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise