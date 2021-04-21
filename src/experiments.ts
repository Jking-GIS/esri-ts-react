/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Transaction, User } from '@speedingplanet/rest-server';

let aString = 'foo';
let aString2 = 'foo';
let aString3 = `foo`;

let aNumber = 10;

let whatIsThis = [ 'a', 'b', 'c' ];
let howAboutThis = {
  firstName: 'John',
  lastName: 'Paxton',
};
let mystery = /foo/; // or new RegExp('foo')

type daysOfTheWeek = 'Sunday' | 'Monday' | 'Tuesday'; //...

interface FetchResponse {
  metadata: Response;
  data: string;
}

interface FetchResponseUsers {
  metadata: Response;
  data: User[];
}

interface FetchResponseTx {
  metadata: Response;
  data: Transaction[];
}

interface GenericFetchResponse<T> {
  metadata: Response;
  data: T[];
}

/*
const userResults: GenericFetchResponse<User> = { 
  // whatever 
};
const txResults: GenericFetchResponse<Transaction> = { 
  // whatever 
 };
*/

let brothers: Map<string, User>;

export {};
