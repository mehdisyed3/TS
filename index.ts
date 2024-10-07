
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
let nextPizzaId = 1;
let cashInRegister = 100;
const orderQueue : Order[] = [];

let nextOrderId = 1


const menu : Array<Pizza> = [
  {id: nextPizzaId++, name: 'Hawaiian', price: 10.99 },
  {id:nextPizzaId++, name: 'Pepperoni', price: 8.99 },
  {id:nextPizzaId++, name: 'Vegetarian', price: 7.99 },
  {id:nextPizzaId++, name: 'Meat Feast', price: 11.99 },
  {id:nextPizzaId++, name: 'Vegan', price: 9.99 }
]




const addNewPizza = (obj: Omit<Pizza, 'id'>) : Pizza => {

  let newPizza : Pizza = {id: nextPizzaId++, name: obj.name, price: obj.price}
  menu.push(newPizza);
  return newPizza ;
}

const placeOrder = (pizzaName: string) : Order | undefined => { // Array<Order> 
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

  return newOrder;

}

const completeOrder = (orderId: number) : Order | undefined => {
  const order = orderQueue.find(item => item.id === orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  order.status = 'completed';

  return order
}

let myName = 'John';

const getPizzaDetail = (identifier: string | number) : Pizza | undefined => {

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