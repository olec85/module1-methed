'use strict'

const nameProduct = 'audi';//Наименование товара
const amountProduct = 12;//Количество товара
const categoryProduct = 'auto';//Категория товара
const priceProduct = 1500;//Цена товара

console.log(nameProduct);

const sum = priceProduct * amountProduct;

console.log(sum);

const namePhone = prompt('apple');//название товара
const countPhone = prompt("Введите количество товара");//количество товара
/*if (!countPhone === isNaN) {
        alert("Количество товара")
} else {
    alert('Вы ввели некорректные данные') что то не то в этой конструкции я не понимаю что именно
}
*/

const catPhone = prompt('smart');//категория товара
const pricePhone = prompt(85000);//стоимость товара


const summ = pricePhone * countPhone;

 console.log(summ);

 console.log('На складе ${countPhone}  ${namePhone}  на сумму ${pricePhone} * 10');


