import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a:number, b:number) => {
    return a + b;
}

/*export function sum (a:number, b:number) {
    return a + b;
}*/

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

/*export function addSkill2 (st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}*/

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export function doesStudentLiveIn (s: StudentType, cityName: string) {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff (building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export function toHireStaff (building: GovernmentBuildingType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}
export const createMessage = (props: CityType) => {
    //return "Hello, " + props.title + " citizens! I want you be happy. " + "All of " + props.citizensNumber + " men";
    return `Hello, ${props.title} citizens! I want you be happy. All of ${props.citizensNumber} men`;
}