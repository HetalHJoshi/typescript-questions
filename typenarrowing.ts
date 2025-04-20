type Animal = { name: string; fly?: boolean; swim?: boolean };

function canFly(animal: Animal): boolean {
  // ans
  return animal.fly === true;
}

const bird: Animal = { name: "Sparrow", fly: true };
const fish: Animal = { name: "Salmon", swim: true };

console.log(canFly(bird)); // Output: true
console.log(canFly(fish)); // Output: false

// ans is   return animal.fly === true;
