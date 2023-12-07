import React from 'react'

function useState() {
    const data = [
        {name: 'A', age: 19},
        {name: 'B', age: 23},
        {name: 'C', age: 21},
        {name: 'D', age: 34},
    ]
    const [playerName, setPlayerName] = useState([])

    data.map(player => setPlayerName(player.name))



  return (
    <div>{playerName.map(name => (<h1>{name}</h1>))}</div>
  )
}

export default useState