import {ManType} from "./destructuring";

export type LessonType = {
    title: string
}

let props: ManType;

beforeEach(() => {
    props = {
        name: "Stacy",
        age: 27,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "South Str"
            }
        }
    }
})

test('', () => {

    //const age = props.age;
    //const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(27);
    expect(lessons.length).toBe(3);
    expect(title).toBe("South Str");
})

test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    /*const [ls1, ls2] = props.lessons;*/
    /*const [ls1] = props.lessons; // обращение только к первому элементу
    const [ , ls2] = props.lessons; // обращение только ко второму элементу*/
    const [, ls2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    /*expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')*/
    expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')

    expect(restLessons[0]).toStrictEqual({title: "3", name: 'react'})
    //expect(restLessons[0]).toStrictEqual({name: 'react', title: "3"}) // можно менять местами очередность ключей и значений внутри одного объекта при такой проверке
})