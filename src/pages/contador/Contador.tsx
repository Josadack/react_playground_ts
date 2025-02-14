import { useState } from "react"

//usando o huck 

function Contador() {

  const [valor, setValor] = useState(0)

  function handleClicksub(){
    setValor(valor - 1)
  }

//outra firna de escrever a function
  const handleClick = () => setValor(valor + 1)

  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor atual é : {valor}</p>
      <button onClick={handleClick}>
        Adicionar 1
      </button>
      <button onClick={handleClicksub}>
        subtrair 1
      </button>
      </div>
  )
}

export default Contador