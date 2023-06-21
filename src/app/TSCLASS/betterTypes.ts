// types must start in UPPERCASE
//WRONG:
export type team1 = {
    name: string,
    year: number
}

//RIGHT:
export type Team2 = {
    name: string,
    year: number
}

//Create more descritive GENERTICS
//WRONG:
export type Response1<T, E> = {
    data: T,
    error: E,
}

//RIGHT: (T is short for type)
export type Response2<Tdata, Terror> = {
    data: Tdata,
    error: Terror,
}

//AVOID creating types/interfaces on PLURAL nor using PREFIXES
//WRONG:
export interface IPersons {
  name: string,
  age: number,
}

export type Routes = '/users' | '/products'

//RIGHT:
export interface Person {
  name: string,
  age: number,
}

export type Route = '/users' | '/products'


//All tips came from "Dev Junior Alves" youtube channel
//source: https://www.youtube.com/watch?v=kurhvVX_FKU

//also feel free to correct any mistakes i made :)