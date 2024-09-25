const menu  = [
  {name: 'Hawaiian', price: 10.99},
  {name: 'Pepperoni', price: 8.99},
  {name: 'Vegetarian', price: 7.99},
  {name: 'Meat Feast', price: 11.99},
  {name: 'Vegan', price: 9.99}
]

const cashInRegister = 100;
const orderQueue = [];

const addNewPizza = (obj) => {
  menu.push(obj);
  return menu;
}

const placeOrder =  (pizzaName) => { 
  const order = menu.find(item => item.name === pizzaName);
  const income = order.price;

  cashInRegister += income

  orderQueue.push(order);

  return orderQueue;

}