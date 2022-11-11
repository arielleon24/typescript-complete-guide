//public modifier allows for the members of the class to be called from wherever
//private modifier allows for the members of the class to be called only within that class
//protected modifier allows for members of the class to be called within class and its child classes

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Beep!");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  //if you redeclare in a class (called child class) that extends another class this overwrites the initial declaration
  private drive(): void {
    console.log("Vroom!");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const carito = new Car(4, "red");
carito.startDrivingProcess();
