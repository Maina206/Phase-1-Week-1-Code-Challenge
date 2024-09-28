//declare speed limit since it does not change
const speedLimit = 70;

//Creates a program that takes in the speed of a car in km/s as input and gives the driver demerits if they are overspeeding
function carSpeed(speed) {
    let demeritPoints;
    //checks if the speed is within or above the speed limit
    if (speed < 70) {
        return "Ok";
    } else if (speed > 70) {
        demeritPoints = (speed - speedLimit)/5;
        //checks if the demerit points exceeds 12 to suspend license
        if (demeritPoints <= 12) {
            return `Points: ${demeritPoints}`;
        } else if (demeritPoints > 12) {
            return "License suspended";
        }
    }

}

console.log(carSpeed(80));