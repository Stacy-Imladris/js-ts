// const deleteUser = (userId) => {
//     const action = {
//         type: 'DELETE-USER',
//         payload: {userId},
//     }
//     return action
// }
//
// const action1 = deleteUser('123132')
// const action2 = deleteUser('444444')
//
// console.log(action1)
// console.log(action2)
//
// function commonHello() {
//     console.log(`I am ${this.name} from ${this.site}`)
// }
//
// const userFabric = (name) => {
//     const user = {
//         name,
//         site: 'imladris',
//         dateOfBirth: new Date(1994, 4, 27),
//         hello: commonHello
//     }
//     return user
// }
//
// const u1 = userFabric('Alex')
// const u2 = userFabric('Stacy')
//
// console.log(u1)
// console.log(u2)
//
// u1.hello()
// u2.hello()