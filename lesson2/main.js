// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let shampoo = ['pantine', 'dove', 'nivea', 'babaria', 'elseve', 'heand&shoulders', 'shauma', 'fructis', 'naturelle', 'gliss'];
console.log(shampoo);
console.log(shampoo[0]);
console.log(shampoo[1]);
console.log(shampoo[2]);
console.log(shampoo[3]);
console.log(shampoo[4]);
console.log(shampoo[5]);
console.log(shampoo[6]);
console.log(shampoo[7]);
console.log(shampoo[8]);
console.log(shampoo[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'This is Van Gogh', pageCount:488, genre:'Bibliographic novel'};
console.log(book1);
let book2 = {title: 'Romeo&Juliet', pageCount:289, genre: 'Poem'};
console.log(book2);
let book3 = {title: 'Pride &prejudice', pageCount:250, genre: 'Romance novel'};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {title: 'Gone with the wind', pageCount:480, genre:'Classic', author:['Margaret Mitchell', 63]};
console.log(book4);
let book5 = {title:'HTML&CSS', pageCount:461, genre:'Computer literature', author: ['John Duckett', 31]};
console.log(book5['genre']);
let book6 = {title:'Just listen', pageCount:244, genre:'Psychology', author: ['Mark Goulston', 42]};
console.log(book6['author']);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users= [
    {name:'Oleg', username:'ole', password: 5658},
    {name: 'Vera', username:'vas', password: 2454},
    {name:'Igor', username:'igo', psssword:'jjj5'},
    {name:'Lina', username: 'lin', password: '5lji'},
    {name:'Max', username: 'maj', password: 458975},
    {name:'Tamara', username: 'tamar', password: 'kutOWE'},
    {name:'Rostislav', username: 'rost', password: 'PKhbvgg'},
    {name:'Violetta', username: 'viola', password: 'R4mnim8'},
    {name:'Borys', username: 'bor', password: 'jlnnjITU'},
    {name:'Larisa', username: 'lara', password: '856785'}
    ]

console.log((users[0].name),(users[0].password));
console.log((users[1].name),(users[1].password));
console.log((users[2].name),(users[2].psssword));
console.log((users[3].name), (users[3].password));
console.log((users[4].name), (users[4].password));
console.log((users[5].name), (users[5].password));
console.log((users[6].name), (users[6].password));
console.log((users[7].name), (users[7].password));
console.log((users[8].name), (users[8].password));
console.log((users[9].name), (users[9].password));



