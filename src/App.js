import { useAxios } from 'use-axios-client'

import {ToastContainer} from 'react-toastify'

import Form from "./components/form";
import Navbar from "./components/nav/navbar";
import Coach from "./components/seats/coach";

import classes from "./App.module.css"
import { Fragment, useEffect, useState } from "react";


function App() {
  const [coach, setCoach] = useState()
  const [coachVi, setCoachVi] =useState(false)

  const { data, error, loading } = useAxios({
    url: "https://booking-api543.herokuapp.com/api/v1/seats"
  });

  useEffect(() => {
    setCoach(data)
  }, [data])

  const manager = (data_, seats)=>{
    const data = [...data_]
    for (let index = 0; index < seats.length; index++) {
      const index_ = data.findIndex(seat => seat.id === seats[index].id)
      data.splice(index_, 1, seats[index])     
    }
    setCoach(data)
  }

  const displayCoach = (bool)=>{

    setCoachVi(bool)
  }



  
  return (
    <Fragment>
      <Navbar displayCoach={displayCoach} bool={coachVi}/>
      <div className={classes.App}>
      <ToastContainer />
        <Form manager={manager} data={coach} displayCoach={displayCoach}/>
        
        <Coach coach={coach} loading={loading} error={error} display={coachVi}/>
      </div>
    </Fragment>
  );
}

export default App;
