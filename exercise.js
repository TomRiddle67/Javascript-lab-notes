class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    honk = () => {
        return `${this.brand} goes beep!`;
    }

    describe = () => {
        return `That is my ${this.brand}, it is ${this.color}`;
    }

    repaint = (newColor) => {
        this.color = newColor;
        return `${this.brand} is now ${this.color}`;
    }
}

const myCar = new Car("Tesla", "Red");
console.log(`This ${myCar.brand} is ${myCar.color} in color`);
console.log(myCar.honk());
console.log(myCar.describe());
console.log(myCar.repaint("Blue"));