// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red"
// };
// delete options.bool;
// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение' + options[key]);
// }
// console.log(Object.keys(options).length);

const people = [
    {name: 'Филипп', age: 27, bidget: 40000 },
    {name: 'Виктория', age: 23, bidget: 90000 },
    {name: 'Оксана', age: 51, bidget: 40000 },
    {name: 'Марина', age: 70, bidget: 40000 },
    {name: 'Виктор', age: 60, bidget: 40000 },
    {name: 'Светлана', age: 51, bidget: 40000 },
    {name: 'Чида', age: 20, bidget: 40000 }
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (person of people) {
//     console.log(person)
// }

// people.forEach(function(person,index,pArr){
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })

// people.forEach(person => console.log(person))

const newPeople = people.map (person => {
    return 'Hellod'})
    console.log(newPeople)