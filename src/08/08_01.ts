/*
let user = {
    name: "Stacy",
    age: 12,
    address: {
        city: {
            title: "Gomel"
        }
    }
}
*/

export const usersObj = {
    '0': 'Alex',
    '1': 'Alice',
    '2': 'Tanya',
    '3': 'Stacy'
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Alex'},
    '36457': {id: 36457, name: 'Alice'},
    '1232': {id: 1232, name: 'Tanya'},
    '1': {id: 1, name: 'Stacy'}
}

// users[1] // быстрее найдет нужный объект
let user = {id: 100500, name: 'Keysi'}
users[user.id] = user; // добавление объекта с ключом id, преимущественнее
delete users[user.id] // удаление user
users[user.id].name = 'Leeloo' // update имени пользователя

export const usersArray = [
    {id: 101, name: 'Alex'},
    {id: 36457, name: 'Alice'},
    {id: 1232, name: 'Tanya'},
    {id: 1, name: 'Stacy'}
]

// usersArray.find(u => u.id === 1) // итерирование по всему массиву, долго
//usersArray.push(user)
//let usersCopy = [...usersArray.filter(), user] // если уже был такой user, то отфильтровываем, чтобы его убрать
//let users = usersArray.filter(u => u.id !== user.id) // пропускаем все, кроме удаленного














/*let user = {
    name: "Stacy",
    age: 12,
    address: {
        city: {
            title: "Gomel"
        }
    }
}
undefined
user['address']['city']['title']
'Gomel'
user.address.city.title
'Gomel'
let user = {
    'name': "Stacy",
    'age': 12,
    'address': {
        'city': {
            'title': "Gomel"
        }
    }
}
undefined
user['address']['city']['title']
'Gomel'
var city = {}
undefined
city.title = "Gomel"
'Gomel'
city
{title: 'Gomel'}
city['citizensCount'] = 100
100
var users = ['Alex', 'Alice', 'Tanya', 'Stacy']
undefined
users[0]
'Alex'
users['0']
'Alex'
users['map']((e)=>e.toUpperCase())
(4) ['ALEX', 'ALICE', 'TANYA', 'STACY']
var users = ['Alex', 'Alice', 'Tanya', 'Stacy']
undefined
var usersObj = {
    '0': 'Alex',
    '1': 'Alice',
    '2': 'Tanya',
    '3': 'Stacy'
}
undefined
usersObj.0
VM1973:1 Uncaught SyntaxError: Unexpected number
at <anonymous>:1:1
(anonymous) @ VM2032:1
var a = {1: 1}
undefined
a
{1: 1}
usersObj[1]
'Alice'
users['0'] = 'Alexander'
'Alexander'
users
(4) ['Alexander', 'Alice', 'Tanya', 'Stacy']
userObj['table'] = 'brown'
VM2234:1 Uncaught ReferenceError: userObj is not defined
at <anonymous>:1:1
(anonymous) @ VM2234:1
usersObj['table'] = 'brown'
'brown'
usersObj
{0: 'Alex', 1: 'Alice', 2: 'Tanya', 3: 'Stacy', table: 'brown'}
usersObj['привет как дела'] = 'ХОРОШО'
'ХОРОШО'
usersObj
{0: 'Alex', 1: 'Alice', 2: 'Tanya', 3: 'Stacy', table: 'brown', привет как дела: 'ХОРОШО'}
usersObj['привет как дела']
'ХОРОШО'
var users = {
    '0': 'Alex',
    '1': 'Alice',
    '2': 'Tanya',
    '3': 'Stacy'
}
undefined
Object.keys(users)
(4) ['0', '1', '2', '3']
Object.values(users)
(4) ['Alex', 'Alice', 'Tanya', 'Stacy']
users[null] = "Хорошо"
'Хорошо'
users[null] = "lkflrg"
'lkflrg'
users
{0: 'Alex', 1: 'Alice', 2: 'Tanya', 3: 'Stacy', null: 'lkflrg'}
users[{}] = "hello"
'hello'
users
{0: 'Alex', 1: 'Alice', 2: 'Tanya', 3: 'Stacy', null: 'lkflrg', [object Object]: 'hello'}
users[{name: 'Lingua'}]
'hello'
users[{name: 'Lingua'}, toString(){return 'blabla'}}] = 'value of blabla'
VM3043:1 Uncaught SyntaxError: Unexpected token '{'
users[{name: 'Lingua', toString(){return 'blabla'}}] = 'value of blabla'
'value of blabla'
users
{0: 'Alex', 1: 'Alice', 2: 'Tanya', 3: 'Stacy', null: 'lkflrg', [object Object]: 'hello', blabla: 'value of blabla'}*/