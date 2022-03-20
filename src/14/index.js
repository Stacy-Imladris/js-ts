//const obj = {} //new Object - class Object
//const arr = [] //new Array - class Array
//function func(){} //new Function - class Function

const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                }
                if (url.indexOf('it-incubator') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) + 1000)
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    },
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Stacy', friend: 4},
        {id: 2, name: 'Sveta', friend: null},
        {id: 3, name: 'Valera', friend: 2}
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user == null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
//pending
/*const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})*/
/*axios.get('https://google.com').then((data) => {
    console.log(data)
})*/

/*const obj1 = {
    name: '',
    say(message) {
        console.log(message + ', ' + this.name)
    }
}
obj1.name = 'Stacy'
obj1.say('Hello')*/
//pending
/*const promise2 = findUserInDB(1)
promise2.then((user) => {
    console.log(user)
})*/
/*findUserInDB(100).then((user) => {console.log(user)})
//...
//...
//...
//resolved если user найдется
findUserInDB(100).catch((error) => {console.warn(error)})
//...
//...
//...
//rejected если user не найдется
console.log('finish')*/

/*const promise2 = findUserInDB(100)
promise2
    .then((user) => console.log(user))
    .catch((error) => console.warn(error))
    .finally(() => console.log('finish'))*/

// class Promise
/*const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})*/
/*const promise2 = findUserInDB(1)
promise2.then((user) => {
    console.log(user)
})*/
//const otherPromise = Promise.all([promise1, promise2])
//const otherPromise2 = Promise.allSettled([promise1, promise2])
/*otherPromise
    .then(() => console.log('finish'))
    .catch(() => console.log('initialization failed. Try later'))*/
/*otherPromise
    .then((results) => {
        const dataFromGoogle = results[0]
        const userFromDB = results[1]
        console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    })
    .catch(() => console.log('initialization failed. Try later'))*/
/*otherPromise2
    .then((results) => {
        const dataFromGoogle = results[0].status === 'fulfilled' ? results[0].value : {data: {vacancies: null}}
        const userFromDB = results[1].status === 'fulfilled' ? results[1].value : {name: results[1].reason}
        console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    })*/

/*const resolvedPromise = Promise.resolve([{}])
resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const rejectedPromise = Promise.reject({message: 'some error'})
rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))*/

/*const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'},])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect login and password'})
        } else {
            return Promise.resolve([{name: 'Stacy', id: 12, avatarUrl: ''}])
        }
    }
}*/
/*usersAPI.getAllUsers().then(users => console.log(users))
usersAPI.login('123', '44142')
    .then((data) => {
        //makeRedirect
    })
    .catch((error) => {
        //showError
    })*/

/*const promise2 = findUserInDB(1)
const promise2_2 = promise2.then((user) => 100)
promise2_2.then(name => console.log(name))*/
//findUserInDB(1).then((user) => 100).then(name => console.log(name))

/*axios.get('https://google.com')
    .then(res => res.data)
    .then(data => console.log(data))*/

/*const makeGoogleRequest = () => {
    const pr = axios.get('https://google.com')
    return pr
}
makeGoogleRequest().then(res => res.data)*/

/*const makeGoogleRequest = () => {
    const pr = axios.get('https://google.com')
    const pr2 = pr.then(res => res.data)
    return pr2
}
makeGoogleRequest().then(data => console.log(data))*/

/*const getVacanciesCountFromGoogle = () => {
    return axios.get('https://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}
getVacanciesCountFromGoogle()
    .then(vacancies => console.log(vacancies))*/
// const pr = getVacanciesCountFromGoogle()
// pr.then(count => console.log(count))

/*const lastPromise = findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name)
        return 100
    })
    .then(number => {
        console.log(number)
        return {value: number + 1}
    })
    .then(obj => {
        console.log(obj.value)
        const pr = Promise.resolve(obj.value + 1)
        return pr
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
console.log('finish')*/

/*const lastPromise = findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name)
        return 100
    })
    .then(number => {
        console.log(number)
        return {value: number + 1}
    })
    .then(obj => {
        console.log(obj.value)
        const pr = findUserInDB(2)
        return pr
    })
    .then(user => {
        console.log(user.name)
    })
console.log('finish')*/

/*const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user)
        findUserInDB(user.friend)
            .then(user => {
                console.log(user)
                findUserInDB(user.friend)
                    .then(user => {
                        console.log(user)
                    })
            })
    })
console.log('finish')*/

/*const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user => findUserInDB(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2))
console.log('finish')*/

/*async function run() {
    let user = await findUserInDB(1)
    console.log(user.name)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1.name)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name)
}
run()*/

// findUserInDB(1).then(user => {
//     console.log(user.name)
// })

/*function getNumber() {
    //const promise = Promise.resolve(Math.random())

    const promise = new Promise((resolve, reject) => {
        reject('some error')
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })
    return promise
}
getNumber().then(n => console.log(n)).catch(error => console.log(error))
getNumber().then(n => console.log(n), error => console.log(error))*/

/*const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    read() {
        const data = localStorage.getItem('some-key')
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    },
}*/

/*const result = repo.save({name: 'Stacy Imladris'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}

const promise = repo.saveAsync({name: 'Stacy Imladris'})
promise
    .then(() => console.log('SAVED'))
    .catch(error => console.log('NOT SAVED: ' + error))*/

/*const result = repo.save({name: 'Stacy Imladris'})
console.log('SAVED')
const data = repo.read()
console.log(data)

const run = async () => {
    await repo.saveAsync({name: 'Stacy Imladris'})
    console.log('SAVED')

    const data = await repo.readAsync()
    console.log(data)
}
run()*/

/*setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000)
    }, 1000)
}, 1000)*/

/*function wait(ms) {
    return new Promise((reso) => {
        setTimeout(() => {
            reso()
        }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
}

run()*/

/*findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .catch(error => ({name: 'Friend Bot', friend: 3}))
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))*/

/*async function run() {
    try {
        let user = await findUserInDB(1)
        console.log(user.name)
        let friend1
        try {
            friend1 = await findUserInDB(user.friend)
        } catch(error) {
            friend1 = {name: 'Friend Bot', friend: 3}
        }
        console.log(friend1.name)
        let friend2 = await findUserInDB(friend1.friend)
        console.log(friend2.name)
    } catch (error){
        alert(error)
    }

}
run()*/

/*const api = {
    save() {

    },
    read() {
        return {name: 'Stacy Imladris'}
    }
}
async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)
}
run()*/

/*const api = {
    async save() {

    },
    async read() {
        //return new Promise((res) => res({name: 'Stacy Imladris'}))
        //return Promise.resolve({name: 'Stacy Imladris'})
        return {name: 'Stacy Imladris'}
    }
}

async function xxx() {

}

async function run() {
    /!*await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)*!/
    let a = xxx()
    console.log(a)
}
run()*/




































