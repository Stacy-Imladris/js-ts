import React, {useState} from 'react'
import {LessonType} from "./destructuring.test";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useStacyState(m: string) { // деструктуризация через массив, так лучше
    return [m, function (){}]
}

function useStacyState2(m: string) { // деструктуризация через объект
    return {
        message: m,
        setMessage: function (){}
    }
}

/*export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props;
    const restProps2 = {
        food: props.food,
        car: props.car
    }*/

export const ManComponent: React.FC<PropsType> = ( { title, man , ...props} ) => {
    //const { title, man } = props;

    const [message, setMessage] = useState<string>('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}