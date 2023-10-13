// // // // import { apiKey } from './util.js';
// // // // import apiKey from './util.js';
// // // import { apiKey, abc as saehoon } from './util.js';
// // // // import * as util from './util.js'

// // // // console.log (util.apiKey);
// // // console.log(saehoon)

// // // let userMessage = 'Hello World!';
// // // // const userMessage = 'Hello World!';

// // // userMessage = 'wonji'

// // // // console.log(userMessage);
// // // console.log(10 + 5);
// // // console.log('hello'+'world!');

// // // if(10 == 10) {
// // //   console.log('wonji'+'sahoon')
// // // }

// // // function greet(){
// // //   console.log('wonji is react master!')
// // // };
// // // function createGreeitng(userName, message = 'I love you') {
// // //   // console.log(userName)
// // //   // console.log(message)
// // //   return 'Hi, I am ' + userName + ', ' + message;
// // // }

// // // console.log(createGreeitng('wonji'));

// // // const greeting1 = createGreeitng('wonji');
// // // console.log(greeting1)

// // // console.log (createGreeitng('sahoon', ' I love you'));

// // // const greeting2 = createGreeitng('sahoon', ' I love you');
// // // console.log(greeting2)

// // // export default (userName, message) => {
// // //   console.log('hello!')
// // //   return userName + message;
// // // }

// // const user = {
// //   name: 'wonji',
// //   age: '25',
// //   greet(){
// //     console.log('hello world')
// //     console.log(this.age)
// //   }
// // };

// // console.log(user)
// // console.log(user.name)
// // console.log(user.age)
// // user.greet()

// // class User {
// //   constructor(name, age){
// //     this.name = name;
// //     this.age = age;
// //   }

// //   greet(){
// //   console.log('Hello!')}
// // }

// // const user1 = new User('jiya', 25)
// // console.log(user1);
// // user1.greet()

// const hobbies = [
//   'Sports',
//   'Cooking',
//   'Reading'
// ]
// console.log(hobbies[0]);

// hobbies.push('Movie');
// console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //   return item === 'Sports'
// // })
// const index = hobbies.findIndex((item) => item === 'Sports')

// console.log(index)

// const editedHobbies = hobbies.map((item) => ({text: item}))
// console.log(editedHobbies)

// const userNameData = ['wonji', 'Park']
// const [firstName, lastName] = ['wonji', 'Park']

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName,lastName)

// const {name: userName, age} = {
//   name: 'jiya',
//   age: 25
// }

// console.log(userName)
// console.log(age)
// const name = user.name;
// const age = user.age;

// const hobbies = ['Sports', 'Cooking']
// const user = {
//   name: 'jiya',
//   age: 25
// }
// // console.log(user.name)
// // console.log(user.age)

// const newHobbies = ['Reading'];

// const mergeHobbies = [...hobbies, ...newHobbies]

// console.log(mergeHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }

// console.log(extendedUser)

// const password = prompt('Your Password');

// if ( password === 'Hello'){
//   console.log('Welcome Wonji!')
// } else if ( password === 'Hello'){
//   console.log('Love you Wonji!')
// } else {
//   console.log('Access not granted.')
// }

// const Family = ['Dad', 'Mom', 'Sister', 'Me'];

// for (const Mylove of Family ) {
//   console.log('my family' + ' ' + Mylove);
// }

// const list = document.querySelector('li');
// list.remove();

// function handleTimeout(){
//   console.log('Time out!')
// }

// const handleTimeout2 = () => {
//   console.log('Time out agin!')

// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);

// // 함수를 정하지않고 익명함수를 추가해도 상관없다.
// setTimeout( () => {
//   console.log('wonji world!')
// }, 4000)


// function greeter(greetFn){
//   greetFn()
// }

// greeter(()=>{console.log('Ta-da')})

// function init(){
//   function greet(){
//     console.log('wonji')
//   }
//   greet();
// }
// init();

// let userMessage = 'hi';
// userMessage = userMessage.concat('!!!')

// console.log(userMessage)

const hobbies = ['Working', 'Reading'];
hobbies.push('Cooking')