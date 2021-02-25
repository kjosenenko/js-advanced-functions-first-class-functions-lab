function returnFirstTwoDrivers(arr) {
    return arr.slice(0,2)
}

function returnLastTwoDrivers(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(value) {
        return multiplier*value
    }
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler(fare) {
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers, funct) {
    return funct(arrayOfDrivers)
}