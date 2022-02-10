export type UsersType = {
    [key: string]: {id: number, name: string}
}

export let users: UsersType

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Alex'},
        '36457': {id: 36457, name: 'Alice'},
        '1232': {id: 1232, name: 'Tanya'},
        '1': {id: 1, name: 'Stacy'}
    }
})

test('should update corresponding user', () => {
    users['101'].name = 'Alexander'

    expect(users['101']).toEqual({id: 101, name: 'Alexander'})
})

test('should detete corresponding user', () => {
    delete users['101']

    expect(users['101']).toBeUndefined()
})
