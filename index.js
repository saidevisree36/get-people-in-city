const peopleNames = require("../country/state/city/index");
const peopleGetFirstName = require("../utilities/utils/index");

function getPeopleInCity(peopleNames) {
  return peopleGetFirstName(peopleNames);
}
module.exports = getPeopleInCity;
