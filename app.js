class Vine {
    type;
    alc;
    amount;


    constructor(type, alc, amount){
     this.type = type;
     this.alc = alc;
     this.amount = amount;
    }
// метод
    cook()
    {
        if (this.check()) {
            console.log('Бутылка ' + this.type + ' вина, крепость - ' + this.alc + '; обьемом: ' + this.amount);
        } else {
            console.log('Заполните свойства!!!');
        }

    }

    check()
    {
        if (this.type && this.alc && this.amount) {
            return true;
        } else {
            return false;
        }
    }
}

let a = new Vine('sladkoe', 10, 0.8);
// a.type = "сладкое";
// a.alc = 10;
// a.amount = 0.7;
a.cook();

let b = new Vine();
b.type = "сухое";
b.alc = 12;
b.amount = 0.7;
b.cook();










//создали объект
// const vine = new Vine ({
//     type: 'pretty',
//     alc: 10,
//     amount: 0.7
// })
//
// //наследование
// class Shampan extends Vine{
//     static type = 'SHAMPAN'
// }
// const shampan = new Vine({
//     type: 'smoke',
//     alc: 7,
//     amount: 1.0
// })
