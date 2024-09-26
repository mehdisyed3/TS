let naame: string = 'John';

let nuumberOfWheels : number = 4;

let isStudent: boolean =false

type Address = { 
  street: string
  city: string
  postalCode: string
}

type Person ={
  name: string
  age: number
  isStudent: boolean
  address? : Address
}

let person1: Person = {
  name: 'John',
  age: 25,
  isStudent: false,
  // address:{
  //   street: '123 Main St',
  //   city: 'Toronto',
  //   postalCode: 'M1M 1M1'
  // }
}

let person2: Person = {
  name: 'Jane',
  age: 22,
  isStudent: true,
  address:{
    street: '123 Main St',
    city: 'Toronto',
    postalCode: 'M1M 1M1'
  }
}