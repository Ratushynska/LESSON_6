/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. 
    Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = prompt('Enter a number:');
if (x!=0) {
    console.log ('Right');
}   else {
    console.log ('False')
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, 
    до якої четверті години попадає число
    (в першу, другу, третю или четверту частину години).*/

let time = prompt ('Enter a number from 0 till 59:');
    if (time>=0, time<=15) {
        console.log ('It`s the first quarter of an hour.');
    } else if (time>=16, time<=30) {
        console.log ('it`s the second quarter of an hour.');
    } else if (time>=31, time<=45) {
        console.log ('It`s the third quarter of an hour.');
    } else if (time>=46, time<=59) {
        console.log ('It`s the fourth quarter of an hour.');
    } else {
        console.log ('Please follow the conditions.')
    }

/*    - У змінній day дано якесь число від 1 до 31. 
    Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = prompt ('Enter a number of a day from 1 till 31:');
    if (day>=1, day<=10) {
        console.log ('It`s the first decade of a month.');
    } else if (day>=11, day<=20) {
        console.log ('It`s the second decade of a month.');
    } else if (day>=21, day<=31) {
        console.log ('It`s the third decade of a month.');
    } else (
        console.log ('Please follow the conditions.')
    )

/*- Скласти розклад на тиждень за домопоги switch. 
    Користувач вводить порядковий номер дня тижня і на екрані відображається 
    інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

switch (dayOfTheWeek= prompt ('Please enter the serial number of the day of the week:')) {
    case '1':
        console.log ('Monday');
        break;
    case '2':
        console.log ('Tuesday');
        break;
    case '3':
        console.log ('Wednesday');
        break;
    case '4':
        console.log ('Thursday');
        break;
    case '5':
        console.log ('Friday');
        break;
    case '6':
        console.log ('Saturday');
        break;
    case '7':
        console.log ('Sunday');
        break;
    default:
        console.log ('Sorry, there is no data for your number.')
        }

/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let num1 = prompt ('Please enter first number:');
let num2 = prompt ('Please enter second number:');

if (num1>num2) {
    console.log ('The bigest number is '+num1);
} else if (num1<num2) {
    console.log ('The bigest number is '+num2);
} else if (num1===num2) {
    console.log ('Your numbers are equal. '+ 'First number: ' + num1+'. '+'Second number: '+num2+'.');
}