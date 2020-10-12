const driver = {}

// non-destructively updates driver object
// returns new driver object with the old properties and new key-value pair added
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign( {}, driver, { [key]: value } )
  return newDriver
}

// destructively updates driver object
// returns the original, mutated driver object
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

// non-destructively updates driver object
// returns new driver object with old properties and key-value pair removed
function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign( {}, driver )
  delete newDriver[key]
  return newDriver
}

// destructively updates driver object
// returns the original, mutated driver object
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
