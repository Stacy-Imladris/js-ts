import {
    addCompany,
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse, removeBook, UpdateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01'

function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    //copy.hair = u.hair / power;
    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel'
        }
    }
    //window.alert(user)
    const awesomeUser = makeHairstyle(user, 2);

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const copyUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('change house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(copyUser)
    expect(user.books).toBe(copyUser.books)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).not.toBe(copyUser.address)
    expect(copyUser.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[4]).toBe('ts')
    expect(copyUser.books[5]).toBe('rest api')
    expect(copyUser.books).toEqual(['css', 'html', 'js', 'react', 'ts', 'rest api'])
    expect(copyUser.books.length).toBe(6)
})

test('upgate js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = UpdateBook(user, 'js', 'ts');

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = removeBook(user, 'js');

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('react')
})

test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-Incubator'}]
    }

    const copyUser = addCompany(user, {id: 3, title: 'Google'});

    expect(user).not.toBe(copyUser)
    expect(copyUser.companies[2]).toEqual({id: 3, title: 'Google'})
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Stacy',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]
    }

    const copyUser = updateCompanyTitle(user, 1, 'EPAM');

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies[0].title).toBe('EPAM')
})

test('update company 2', () => {
    let companies = {
        'Stacy': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Alex': [{id: 2, title: 'IT-Incubator'}]
    }

    const copy = updateCompanyTitle2(companies, 'Stacy', 1, 'EPAM')

    expect(copy['Stacy']).not.toBe(companies['Stacy'])
    expect(copy['Alex']).toBe(companies['Alex'])
    expect(copy['Stacy'][0].title).toBe('EPAM')
})