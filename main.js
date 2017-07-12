// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it



// 1: Show me how to calculate the average price of all items.
function question1 (array) {
  // Answer:

  sum = 0

  for (var i = 0; i < array.length; i++) {
    sum += array[i].price;
  }
    return "The average price of all items is $" + sum / array.length

}
console.log(question1 (data))








// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
  // Answer:
  function question2 (array) {
    var answer = []
  for (var i = 0; i < array.length; i++) {
    var number = array[i].price;

    if (number >= 14 && number <= 18) {
      answer.push(number)
    }
  }
  return answer
}
console.log(question2(data))




// 3: Which item has a "GBP" currency code? Display it's name and price.
  // Answer:
  function question3 (array) {

    var answer = []

    for (var i = 0; i < array.length; i++) {
      var code = array[i].currency_code;

      if (code === "GBP") {
        return answer.push(array[i].price) && answer.push(array[i].title) && answer;
      }
    }
}
console.log(question3(data))



// 4: Display a list of all items who are made of wood.
  // Answer:
  function question4 (array) {

var answer = []

  for (var i = 0; i < array.length; i++) {
    var mat = array[i].materials;
    if (mat.includes('wood')) {
      answer.push(array[i].title);
    }
  } return answer
}
console.log(question4(data))




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
  // Answer:
  function question5 (array) {

    var name = []

    for (var i = 0; i < array.length; i++) {
      var index = array[i];
      if ((index.materials).length >= 8) {
        name.push(index.title);
        name.push(index.materials);
      }
    } return name;
  }
  console.log(question5(data))


// 6: How many items were made by their sellers?
// Answer:


function question6 (array) {

  var answer = 0

  for (var i = 0; i < array.length; i++) {
    var made = array[i].who_made;
    if (made === "i_did") {
      answer ++
    }
  } return answer
}
console.log(question6(data))
