const menu  = [
  {name: 'Hawaiian', price: 10.99},
  {name: 'Pepperoni', price: 8.99},
  {name: 'Vegetarian', price: 7.99},
  {name: 'Meat Feast', price: 11.99},
  {name: 'Vegan', price: 9.99}
]

let cashInRegister = 100;
const orderQueue = [];

let nextOrderId = 1

const addNewPizza = (obj) => {
  menu.push(obj);
  return menu;
}

const placeOrder =  (pizzaName) => { 
  const order = menu.find(item => item.name === pizzaName);
  const income = order.price;

  cashInRegister += income

  const newOrder = {id: nextOrderId, pizza : pizzaName, status: 'ordered'}

  orderQueue.push(newOrder); 

  nextOrderId++;

  return orderQueue;

}

const completeOrder = (orderId: number) => {
  const order = orderQueue.find(item => item.id === orderId);
  order.status = 'completed';

  return order
}

let myName = 'John';


placeOrder('Hawaiian');
placeOrder('Hawaiian');
completeOrder(1);