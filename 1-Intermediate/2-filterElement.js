function filterElement(array, element) {
  return array.filter((item) => item === element); // Or you can use array.some(item => item === element)
}

module.exports = filterElement;
