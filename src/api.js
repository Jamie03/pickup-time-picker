function validatePickupTime(pickupTime) {
    const validDate = new Date(getPickupTime().currentDate);
    const hrs = getPickupTime().workingHours.find((hour) => hour.dayOfWeek === validDate.getDay());
    validDate.setHours(Number(hrs.start.split(':')[0]));
    if (pickupTime < validDate){
        return validDate;
    }
    
    return pickupTime;
}

function updatePickupTime(pickupTime) {
    return pickupTime;
}


function getPickupTime() {
    return {
        "currentDate": "2021-09-07T17:00:00+00:00",
        "displayDays": "4",
        "workingHours": [
            {
                "start": "08:00",
                "end": "17:00",
                "dayOfWeek": 1
            },
            {
                "start": "12:00",
                "end": "17:00",
                "dayOfWeek": 2
            },
            {
                "start": "12:00",
                "end": "17:00",
                "dayOfWeek": 3
            },
            {
                "start": "12:00",
                "end": "17:00",
                "dayOfWeek": 4
            },
            {
                "start": "13:00",
                "end": "18:00",
                "dayOfWeek": 5
            }
        ]
    };
}

export {validatePickupTime, updatePickupTime, getPickupTime}