class Grocery {
    constructor(public item: string,public category: string,public quantity: number) {
    }
}

function createGroceries() {
    let foodArray = ["Apple", "Orange", "Banana", "Toilet Paper", "Hand-Sanitizer"]
    let quantities = [5, 3, 6, 100, 50]
    let categories = ["Fruit", "Fruit", "Fruit", "Pandemic", "Pandemic"]
    let newArray = []
    for (let i = 0; i < 5; i++) {
        let newObj = new Grocery(foodArray[i], categories[i], quantities[i]) 
        newArray.push(newObj);
    }
    console.log(newArray)
    return newArray; 

}

function listGrocery(GroceryObj) {
    document.body.innerHTML += "<li>" + "Item: " + GroceryObj.item + " "
    + " // Type: " + GroceryObj.category + " // Quantity: " + GroceryObj.quantity + "</li>";
}

function groceryList(groceryArray) {
    // for each item in a grocery list, show type in paranthes, and quantity
    groceryArray.forEach(element => {
        listGrocery(element);
        console.log(element);
        
    });
}

let myGroceryArray = createGroceries();
groceryList(myGroceryArray);
//document.body.innerText = groceryList(myGroceryArray);