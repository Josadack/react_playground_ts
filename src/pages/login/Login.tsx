import { useState } from "react"
import Home from "../home/Home";
import Contador from "../contador/Contador";
import Tarefa from "../tarefa/Tarefa";

function Login() {
  const [isLogger, setIsLogger ] = useState(false);

  return (
    <div>
     
      
      {isLogger ? (
        <> <Home 
         titulo='componente Home'
         texto='Bem Vindos!'
         />
         <Contador/>
         <Tarefa/>
         </>
        
 
      ) : (
        <div>
           <h2>Login</h2>
          <button onClick={() => setIsLogger(true)}>entrar</button>
        </div>
      )
    }
      </div>

  )
}

export default Login