import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactSelect from './components/ReactSelect'
import { validatePickupTime, updatePickupTime, getPickupTime } from './api.js'
import ReactSlider from './components/ReactSlider';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  const [selectDate, setSelectDate] = useState(null)
  const [selectTime, setSelectTime] = useState(null)
  const [workingHour, setWorkingHour] = useState(null)


  //In theory, this should be able to validate if the date & time is valid
  validatePickupTime(new Date("1970:00"))
  const pickupTime = getPickupTime()

  if(selectDate == null){
      setSelectDate(new Date(pickupTime.currentDate))
      setWorkingHour(pickupTime.workingHours.find((hour) => hour.dayOfWeek === new Date(pickupTime.currentDate).getDay()))
  }
  
  const onChangeDate = (date) => {
    setSelectDate(date)
    setWorkingHour(pickupTime.workingHours.find((hour) => hour.dayOfWeek === new Date(date).getDay()))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const userPickupTime = new Date(selectDate)
    userPickupTime.setHours(Math.floor(selectTime))
    userPickupTime.setMinutes(selectTime%1 !== 0 && 30)
    console.log(updatePickupTime(userPickupTime));
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className='mb-3' controlId='formGridSelect'>
              <Form.Label><h1>Desired Pickup Time:</h1></Form.Label>
              <ReactSelect pickupTime={getPickupTime()} onChangeDate={onChangeDate}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGridRange'>
              <ReactSlider workingHour = {workingHour} setSelectTime = {setSelectTime} selectTime = {selectTime} />
            </Form.Group>
            <Form.Group className='mb-3'controlId='formGridButton'>
              <Button variant='primary' type='submit' onClick={onSubmit}>Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      
    </Container>
    
  );
}

export default App;
