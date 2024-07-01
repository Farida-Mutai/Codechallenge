function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    
    if (speed <= speedLimit) {
        console.log("Ok");
        return; 
    }

    
    let excessSpeed = speed - speedLimit;
    let demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    console.log(`Demerit points: ${demeritPoints}`);
}


let carSpeed = 100;
calculateDemeritPoints(carSpeed);

