//INTERSECTION TYPES
type PersonProps = {
    name: string,
    personID: string,
    age: number,
}

type ContactProps = {
    phone: string,
    email: string

}

type AddressProps = {
    city: string,
    // UNION TYPES - give multiple options for one type
    zipCode: string | number
}

//By adding props to one type you're able to use all of them
type CustomerProps = PersonProps | ContactProps | AddressProps;
//Also works for interfaces

//GENERIC TYPES

//Do not use "any" as a type, instead try GENERTICS
//To receive any type as argument add <something> for the function
//then set the actual arguments to accept your GENERIC type
//You can also expect to return your generic type.
function mockFunction<T>(args: T): T{
    console.log(args)
    return args
}

//PICK - one property from a type

//set a new attribute + PICK's the personId from Person props
type IdProps = {CNH: 'string'} & Pick<PersonProps, 'personID'>;

type EmailProp = Pick<ContactProps, 'email'>; //has the email only

//OMIT - choose an property to be removed
type AddressWithoutZipCode = Omit<AddressProps, 'zipCode'>
//AddressWithoutZipCode has only the city as we used the Omit to
//take all properties but the "zipCode".
type PersonWithoutAge = Omit<PersonProps, 'age'>
//same as the prior example, here we take all properties (name, personID)
//but we exclude the 'age' one.

//type guards
function square(a: number | string){
    if(typeof a === 'number'){
        return `Result: ${a * a}`
    }

    throw new Error(
        `Error - it was not possible to calculate due to type: ${typeof a}`
    )
}

//Record
type TeamNameProps = {
    name: 'string',
    nickname: 'string',
    acronym: 'string',
}

//Instead of wasting time setting the same type for all properties 
//you can use Record to set them all at once

type JerseyProps = Record<'color' |'size' | 'model', string>
//Record demands two arguments,
//First add all properties,
//Then, as second argumetn you add the type.

//Also we are able to do the opposite

type Months =
    | 'Janeiro'
    | 'Fevereiro'
    | 'Março'
    | 'Abril'
    | 'Maio'
    | 'Junho'
    | 'Julho'
    | 'Agosto'
    | 'Setembro'
    | 'Outubro'
    | 'Novembro'
    | 'Dezembro'

type AllMonthsVasco = Record<Months, 'vasco'>
//now all properties has been set to the value 'vasco'


//Credits: Dev Junior Alves.
//Source: https://www.youtube.com/watch?v=7DhlW2HvztE