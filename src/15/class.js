// class DeleteUserAction {
//     constructor(userId) {
//         this.type = 'DELETE_USER'
//         this.payload = {userId}
//     }
// }
//
// const action1 = new DeleteUserAction(121212)
// const action2 = new DeleteUserAction(333)
//
// console.log(action1)
// console.log(action2)

/*
class User {
    _name = ''
    constructor(name, site, dob) {
        this._name = name;
        this.site = site;
        this.dateOfBirth = dob;
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const user1 = new User('Alex', 'imladris', new Date(1900, 1, 1))
const user2 = new User('Stacy', 'imladris', new Date(1990, 9, 9))

console.log(user1.hello === User.prototype.hello)

user1.name = 'Igor'
console.log(user1.name)

class Coder extends User{
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code`)
    }
    hello() {
        super.hello()
        console.log('Go away')
    }
}

const coder = new Coder('Brus', 'imladris', new Date(1970, 3, 3), 'c#')
coder.code()
coder.hello()

class Hacker extends Coder {
    constructor(name, site, dob, tech) {
        super()
        this.tech = 'XXX'
        this.name = 'XXXX'
    }
    code() {
        console.log('I\'ll hack everything')
    }
    // hello() { // не стоит переопределять методы, чтобы не сломать дальнейшее поведение программы
    //     throw new Error ('I am Hacker in the dark')
    // }
}

const hacker = new Hacker('imladris', new Date(1970, 3, 3), 'c#')
hacker.hello()
hacker.code()

let users = [user1, user2, coder, hacker]
users.forEach(u => u.hello())*/

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return 'IMLADRIS'
    }
}

// <ProfilePage/>
// new ProfilePage({age: 1})
// const jsx = comp1.render()
// jsx => html
// comp1.componentDidMount()

// const newJsx = comp1.render()
// jsx => html
// comp1.componentDidUpdate()

// comp1.shouldComponentUpdate() {
//    const newJsx = comp1.render()
//    jsx => html
//    comp1.componentDidUpdate()
//}