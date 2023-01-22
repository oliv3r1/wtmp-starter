let data = [
  { name: "Lingonberry jam", price: 4.0 },
  { name: "Mushroom and bean casserole", price: 5.5 },
  { name: "Chili-flavoured wheat", price: 3.0 },
  { name: "Vegetarian soup", price: 4.8 },
  { name: "Pureed root vegetable soup with smoked cheese", price: 8.0 },
];

const validateMealName = (name) =>
  /^[A-Z][A-Za-z0-9\s\-\/\(\),]{3,63}$/.test(name);
console.log(validateMealName("Mushroom and bean casserole"));

data.sort((a, b) => a.price - b.price);
console.log(data);

let filteredData = data.filter((item) => item.price < 5);
console.log(filteredData);

let updatedData = data.map((item) => {
  item.price = item.price + (item.price * 15) / 100;
  return item;
});
console.log(updatedData);

let totalCost = data.reduce((acc, item) => acc + item.price, 0);
console.log("cost for whole menu =" + totalCost);
