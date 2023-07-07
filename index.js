function distanceFromHqInBlocks(pickUp) {
    if (pickUp - 42 >= 0){
        return (pickUp - 42)
} else {
    return (42 - pickUp)
}
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(pickUp, dropOff) {
    if (pickUp - dropOff >= 0) {
        return ((pickUp - dropOff) * 264)
    } else {
        return ((dropOff - pickUp) * 264)
    }
}


function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) >= 0 && distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}
