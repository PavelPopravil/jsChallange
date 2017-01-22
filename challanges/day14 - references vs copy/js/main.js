'use strict';

function init() {}

window.init = init();

var people = ['Alexis', 'Andrey', 'Olya', 'Dima'];
// this is reference
var friends = people;

console.log(people);
console.log(friends);

// friends[3] = 'Mesut';

// console.log(people);
// console.log(friends);

// making copy
var friends1 = people.slice();
friends1[3] = 'Vlad';

console.log(people);
console.log(friends1);

// ////////////////////////////
var person = {
    name: 'Pavel',
    age: '24',
    socials: {
        vk: "@vk",
        twitter: "@twitter"
    }
};

var me = person;

console.log(person);
console.log(me);

// me.age = "40";

// console.log(person);

var me1 = Object.assign({}, person);

console.log(me1);

me1.age = "40";
console.log(person);
console.log(me1);

var me2 = JSON.parse(JSON.stringify(person));

console.log(me2);

me2.socials.vk = "@facebbok";

console.log(person.socials.vk);
console.log(me2.socials.vk);