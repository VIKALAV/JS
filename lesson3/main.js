// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3

// let x=+prompt('enter x');
// console.log(x);
//     if (x!==0) {console.log(true)}
//     else if (x===0) {console.log (false)}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число (в першу, другу, третю или четверту частину години).

// let time=+prompt('enter time')
// console.log(time)
//     if (time>=0 && time<=15) {console.log('the first quarter of an hour')}
//     if (time>15 && time<=30) {console.log('second quarter of an hour')}
//     if (time>30 && time<=45) {console.log('third quarters of an hour')}
//     if (time>45 && time<=60) {console.log('a quarter of an hour')}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day=+prompt('enter day')
// console.log(day)
// if (day>=1 && day<=10) {console.log('the first decade of the month')}
// if (day>=11 && day<=20) {console.log('second decade of the month')}
// if (day>=21 && day<=31) {console.log('third decade of the month')}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let data=prompt('enter the data August 2022')
// console.log(data)
// switch (data) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log("There is no schedule")
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let x=+prompt('enter x')
// let y=+prompt('enter y')
// if (x>=y) {console.log(x)}
// else if (x<=y) {console.log(y)}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

// let x=!prompt('enter')||'default'
// console.log(x)
