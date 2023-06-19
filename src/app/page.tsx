"use client"
import { useState } from "react"
import Header from "./header"

export default function Home() {
  const data = [
    {id: 1,name: 'cleito', age: 13, cnh: false},
    {id: 2,name: 'lisa', age: 19, cnh: true},
    {id: 3,name: 'Fer', age: 32, cnh: false},
  ]

  type PeopleProps = {
    id: number,
    name: string,
    age: number,
    cnh: boolean

  }
  const [userId, setUserId] = useState<number | null>(null)
  const [rowSelected, setRowSelected] = useState<PeopleProps | null>(null)

  const handleSelectedRow = (data: PeopleProps) => {
    setRowSelected(data)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
      <Header></Header>
      <h1>Dados:</h1>
      <h4 className="mt-10">{rowSelected?.name}</h4>
      <ul className="flex flex-col items-center justify-center mt-20">
        {data.map(person => 
        <li onClick={()=> handleSelectedRow(person)} className="text-yellow-500 cursor-pointer" key={person.id}>Name: {person.name} Age: {person.age}</li>)
      }
      </ul>
    </div>
  )
}
