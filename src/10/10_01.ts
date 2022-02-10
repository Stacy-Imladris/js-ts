export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = {
    id: number
    title: string
}
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    //copy.hair = u.hair / power;
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function UpdateBook(u: UserWithLaptopType & UserWithBooksType, book1: string, book2: string) {
    return {
        ...u,
        books: u.books.map(b => b === book1 ? 'ts' : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, company: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, {id: 3, title: 'Google'}]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType>}, userName: string, companyId: number, title: string) {

    /*let companyCopy = {...companies}
    companyCopy[UserName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title} : c)
    return companyCopy*/
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title} : c)
    }
}