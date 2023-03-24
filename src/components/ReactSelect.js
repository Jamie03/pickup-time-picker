import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


function ReactSelect({ pickupTime, onChangeDate }) {
    const currentDate = new Date(pickupTime.currentDate);
    const displayDays = Number(pickupTime.displayDays);
    const displayDates = [];

    let i = 0;

    while (displayDates.length < displayDays) {
        let nextDay = new Date(currentDate)
        nextDay.setDate(nextDay.getDate() + i)
        if(nextDay.getDay() !== 6 && nextDay.getDay() !== 0){
            const currDate = {
                date: nextDay,
                label: nextDay.toDateString()
            }
            displayDates.push(currDate)
        }
        i++
    }

    return (
        <Row>
            <Col xs={10}>
                <Form.Select aria-label="Default select example" onChange={(event) => {onChangeDate(event.target.value)}}>
                    {displayDates.map((date, key) => {
                        return <option key={key} value={date.date}>{date.label}</option>
                    })}
                </Form.Select>
            </Col>
        </Row>
        
    )
}

export default ReactSelect
