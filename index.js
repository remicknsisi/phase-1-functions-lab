function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation >= 42){
        return (pickUpLocation - 42)
    }
    else if (pickUpLocation < 42){
        return (42 - pickUpLocation)
    }
}

function distanceFromHqInFeet(pickUpLocation){
    return (distanceFromHqInBlocks(pickUpLocation) * 264)
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation){
    if (pickUpLocation >= dropOffLocation){
        return ((pickUpLocation - dropOffLocation)*264)
    }
    else if (pickUpLocation < dropOffLocation){
        return ((dropOffLocation - pickUpLocation)*264)
    }
}

function calculatesFarePrice(pickUpLocation, dropOffLocation){
    if ((distanceTravelledInFeet(pickUpLocation, dropOffLocation))<=400){
        return 0
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOffLocation)<=2000){
        return ((distanceTravelledInFeet(pickUpLocation, dropOffLocation)-400)*.02)
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOffLocation)<=2500){
        return 25
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOffLocation)>2500){
        return 'cannot travel that far'
    }
}