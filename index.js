function distanceFromHqInBlocks (block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet (block) {
    return Math.abs(block - 42) * 264;
}

function distanceTravelledInFeet ( start, destination ) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice (start, destination) {
    let distance = Math.abs(start - destination) * 264;
    console.log("Free sample", distance);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    
}