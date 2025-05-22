// Task 1: Calculator

// Create a Calculator class

class Calculator {

// Create a method to add two numbers

addition(num1: number, num2: number): number {
    return num1 + num2;
 }

// Create a method to compare two numbers: is the first parameter greater than the second one?

isGreater(num1: number, num2: number): boolean {
    return num1 > num2;
 }
}

// Create an instance

const calculator = new Calculator();

// Outputting the results to the console

console.log(calculator.addition(1, 2));
console.log(calculator.isGreater(1, 2));


// Task 2: Product

// Create a Product class

class Product {
    name: string;
    price: number;
    quantity: number;

// Create a class constructor

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

// Create a method to check the availability of goods in stock

    isInStock(): boolean {
        return this.quantity > 0;
    }
}

// Create an instance with values

const product = new Product('Apple', 1300, 10);

// Outputting the results to the console

console.log('Availability: ', product.isInStock());


