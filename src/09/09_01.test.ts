function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Stacy',
        age: 27,
        address: {
            title: 'Gomel'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(28)

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    let users: Array<UserType> = [
        {
            name: 'Stacy',
            age: 27,
            address: {
                title: 'Gomel'
            }
        },
        {
            name: 'Alex',
            age: 28,
            address: {
                title: 'Gomel'
            }
        }
    ]

    const admins = users

    admins.push({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})
})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1;

    expect(adminsCount).toBe(101)
})

test('reference type test 2', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Stacy',
        age: 27,
        address: address
    }

    let user2: UserType = {
        name: 'Alex',
        age: 28,
        address: address
    }

    address.title = 'Minsk City';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Stacy',
        age: 27,
        address: address
    }

    let user2: UserType = {
        name: 'Alex',
        age: 28,
        address: address
    }

    const users = [user, user2, {name: 'Alice', age: 6, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Anastasiya'

    expect(users[0].name).toBe('Anastasiya')
    expect(user.name).toBe('Anastasiya')
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

})

function passportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}