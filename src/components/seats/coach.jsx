import classes from "./coach.module.css"

import _ from "lodash"
import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap'


const Coach = ({coach, loading, error, display}) => {
    
    let arrayToRows = (arr) => {
      console.log(arr);
       return _.chunk(arr,7)
    }

    if (loading || !coach) return <div className={classes.spinner}></div>;
    if (error) return "Error!";



      const popover = (status) => {
          if (status === true) {
            return (<Popover id="popover-basic" className={classes.hover}>
            <Popover.Header as="h4">Seat status</Popover.Header>
            <Popover.Body>
              This Seat is still Available
            </Popover.Body>
          </Popover>)
          } else {

              return (
                <Popover id="popover-basic" className={classes.hover}>
                <Popover.Header as="h4">Seat status</Popover.Header>
                <Popover.Body>
                  This Seat is Already Booked
                </Popover.Body>
              </Popover>
              )      
          }
    
      }
   
  return (
    <Container className={display ? classes.container : classes.container_none}>
        {
            arrayToRows(coach).map((row,index) => {
                return <Row className={classes.row} key={index}>
                {row.map(seat => {
                    return <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover(seat.Status)} key={seat.id}><Col className={seat.Status ? classes.row_col__notbooked : classes.row_col__booked}>{seat.Seat}</Col></OverlayTrigger>
                })}
           </Row>
            })
        }
     
    </Container>
  )
}

export default Coach