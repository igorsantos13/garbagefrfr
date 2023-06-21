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
type idProps = Pick<PersonProps, 'personID'>; //has only the personID property
type emailProp = Pick<ContactProps, 'email'>; //has the email only

//OMIT - choose an property to be removed
type AddressWithoutZipCode = Omit<AddressProps, 'zipCode'>
//AddressWithoutZipCode has only the city as we used the Omit to
//take all properties but the "zipCode".
type PersonWithoutAge = Omit<PersonProps, 'age'>
//same as the prior example, here we take all properties (name, personID)
//but we exclude the 'age' one.
