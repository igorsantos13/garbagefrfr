const title = 'name';

const car = {
  [title] : 'Celta'
}

console.log(car[title])

const newObje = new Object()
newObje.age = 18

console.log(newObje.age)

const objetoFinal = Object.create({
  cnh: true,
  cPF: '000.000.-00',
  passagem: false
})

//detalhes:
//ES6

//Short Sintax
const driverNumber = 44
const driver = {
  driverNumber 
  //aqui ja recebe o valor da constante driverNumber
}

const smartphone = {name: 'iPhone 13'}
const smartphone2 = {name: 'iPhone 13'}
const smartphone3 = smartphone

smartphone == smartphone2 //false
smartphone === smartphone2 //false

//Aqui ambos tem o mesmo endereço de memoria - Reference Types
smartphone == smartphone3 //true
smartphone === smartphone3 //true



