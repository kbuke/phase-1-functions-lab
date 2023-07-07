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
    const destStart = ((destination - start) * 264)
    const startDest = ((start - destination) * 264)
    if (destStart >= 0 && destStart < 400) {
        return 0
    } else if (startDest >= 0 && startDest <400) {
        return 0
    } else if (destStart > 400 && destStart <= 2000) {
        return (destStart - 400) * 0.02
    } else if (startDest > 400 && startDest <= 2000) {
        return (startDest - 400) * 0.02
    } else if (destStart > 2000 && destStart <= 2500) {
        return 25
    } else if (startDest > 2000 && startDest <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}
