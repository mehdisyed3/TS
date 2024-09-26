
type Pizza = {
  id : number,
  name: string,
  price: number
}
type Order = {
  id: number,
  pizza: Pizza,
  status: 'ordered' | 'completed'
}

const menu : Array<Pizza> = [
  {id:2, name: 'Hawaiian', price: 10.99 },
  {id:3, name: 'Pepperoni', price: 8.99 },
  {id:4, name: 'Vegetarian', price: 7.99 },
  {id:5, name: 'Meat Feast', price: 11.99 },
  {id:6, name: 'Vegan', price: 9.99 }
]


let cashInRegister = 100;
const orderQueue : Order[] = [];

let nextOrderId = 1

const addNewPizza = (obj: Pizza) => {
  menu.push(obj);
  return menu;
}

const placeOrder = (pizzaName: string) => {
  const order = menu.find(item => item.name === pizzaName);
  console.log('>>>>>> > > > > > >>',order);
  if (!order) {
    throw new Error('Pizza not found');
  }
  const income = order.price;

  cashInRegister += income

  const newOrder : Order  = { id: nextOrderId, pizza: order, status: 'ordered' }

  orderQueue.push(newOrder);

  nextOrderId++;

  return orderQueue;

}

const completeOrder = (orderId: number) : Order => {
  const order = orderQueue.find(item => item.id === orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  order.status = 'completed';

  return order
}

let myName = 'John';

const getPizzaDetail = (identifier: string | number) => {

  if (typeof identifier === 'string') {
    return menu.find(item => item.name.toLowerCase() === identifier.toLowerCase());
  }
  else if( typeof identifier === 'number') {
    return menu.find(item => item.id === identifier);
  }
  else{
    throw new TypeError('Invalid identifier');
  }
  // if (!detail) {
  //   throw new Error('Pizza not found');
  // }

}


placeOrder('Hawaiian');
placeOrder('Hawaiian');
completeOrder(1);