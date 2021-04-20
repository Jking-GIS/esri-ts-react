import { Transaction, User } from '@speedingplanet/rest-server';

let x = 10;
let y = new Date();

// thing (variable, function, object): type

let variable: string;
let add = function (x: number, y: number): number {
  return x + y;
};

// number, string, boolean

interface Book {
  author: string;
  title: string;
  pageCount: number;
  getAuthor: () => string;
  setAuthor: (name: string) => void;
}

interface Vehicle {
  vin: number;
}

interface LandBased {
  numberOfWheels: number;
}

interface InheritedCar extends Vehicle, LandBased {
  color: string;
}

type Car = Vehicle & LandBased;

//
// =======================
//

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

type addFunction = (x: number, y: number) => number;

let addImplementation: addFunction = (first, second) => {
  return first + second;
};

//
// =======================
//

// interface FetchResponse {
//   metadata: Response;
//   data: string;
// }

// interface FetchResponseUsers {
//   metadata: Response;
//   data: User[];
// }

// interface FetchResponseTx {
//   metadata: Response;
//   data: Transaction[];
// }

// interface GenericFetchResponse<T> { // late binding types - GENERICS
//   metadata: Response;
//   data: T[];
// }

// // late binding types
// const userResults: GenericFetchResponse<User> = { /* whatever */ };
// const txResults: GenericFetchResponse<Transaction> = { /* whatever */ };

// let brothers: Map<string, User>;

export {};
