var Grocery = /** @class */ (function () {
    function Grocery(item, category, quantity) {
        this.item = item;
        this.category = category;
        this.quantity = quantity;
    }
    return Grocery;
}());
function createGroceries() {
    var foodArray = ["Apple", "Orange", "Banana", "Toilet Paper", "Hand-Sanitizer"];
    var quantities = [5, 3, 6, 100, 50];
    var categories = ["Fruit", "Fruit", "Fruit", "Pandemic", "Pandemic"];
    var newArray = [];
    for (var i = 0; i < 5; i++) {
        var newObj = new Grocery(foodArray[i], categories[i], quantities[i]);
        newArray.push(newObj);
    }
    console.log(newArray);
    return newArray;
}
function listGrocery(GroceryObj) {
    document.body.innerHTML += "<li>" + "Item: " + GroceryObj.item + " "
        + " // Type: " + GroceryObj.category + " // Quantity: " + GroceryObj.quantity + "</li>";
}
function groceryList(groceryArray) {
    // for each item in a grocery list, show type in paranthes, and quantity
    groceryArray.forEach(function (element) {
        listGrocery(element);
        console.log(element);
    });
}
var myGroceryArray = createGroceries();
groceryList(myGroceryArray);
//document.body.innerText = groceryList(myGroceryArray);
