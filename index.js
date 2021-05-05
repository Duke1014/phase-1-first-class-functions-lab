// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const driver1 = drivers[0];
    const driver2 = drivers[1];
    return [driver1, driver2];
}

const returnLastTwoDrivers = function (drivers) {
    const driver3 = drivers[2];
    const driver4 = drivers[3];
    return [driver3, driver4];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare){
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, selectingDrivers) {
    return selectingDrivers(arrayOfDrivers);
}