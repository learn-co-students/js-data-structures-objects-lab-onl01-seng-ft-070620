const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj
};

function deleteFromDriverByKey(obj, key) {
  const thing = Object.assign({}, obj)
  delete thing[key]
  return thing
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
};