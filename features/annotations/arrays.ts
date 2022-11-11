const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

//Help with inference when extrating values

const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
// carMakers.push(100);

//helps with Map
carMakers.map((car: string): string => {
  return car;
});

//flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-11-11");
importantDates.push(new Date());
