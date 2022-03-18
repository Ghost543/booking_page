import React, { useState } from 'react'

import axios from 'axios'

import { toast } from 'react-toastify';

import classes from "./form.module.css"
import { Conatin } from './seatsDisplay/Container/conatin'


const Form = ({manager, data, displayCoach}) => {
    const [seats, setSeats] = useState("")
    const [booked, setBooked] = useState([])



    const handleChange = (event) => {
        setSeats(event.target.value)
        console.log(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const validP = data.filter(seat => seat.Status === true)
        if (seats <= 0 || seats > 7) {
            alert("Enter a valid number of seats")
            return 
        } else if (validP.length < seats) {
            toast.error(`We donnot have enough seats in this coach`)
        }
        // toast.success(`Number of ${seats} booked`)
        axios.post("https://booking-api543.herokuapp.com/api/v1/book",{number: seats}).then(res => {
            setBooked(res.data)
            manager(data, res.data)
            displayCoach(true)
        })
    }


  return (
    <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form} >
            <input value={seats} className={classes.form_input} type="number" name="number" placeholder='Enter No of Seats' onChange={handleChange}/>
            <input className={classes.form_submit} type="submit" value="Book" />
        </form>
        <Conatin booked={booked}/>
        
    </div>
  )
}

export default Form