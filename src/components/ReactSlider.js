import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react';

function ReactSlider({ workingHour, setSelectTime, selectTime }) {
    const minHour = new Date('2020:' + workingHour.start).getHours();
    const maxHour = new Date('2020:' + workingHour.end).getHours();
    
    useEffect(() => {
        if(selectTime === null){
            setSelectTime((maxHour-minHour)/2 + minHour)
        }else if(selectTime < minHour){
            setSelectTime(minHour)
        }else if(selectTime > maxHour){
            setSelectTime(maxHour)
        }
    }, [workingHour])

    return (
        <>
            <Row>
                <Col xs={10}>
                    <Form.Range name="dateSlider" min={minHour} max={maxHour} onChange={(event)=> {setSelectTime(event.target.value)}} step="0.5" />
                </Col>

                <Col>
                    <h3 htmlFor='dateSlider'>{workingHour.end}</h3>
                </Col>
            </Row>
            <Row className='text-center'><h3>{selectTime%1 !== 0 ? Math.floor(selectTime) + ":30" : selectTime + ":00"}</h3></Row>
        </>
        
    )
}

export default ReactSlider
