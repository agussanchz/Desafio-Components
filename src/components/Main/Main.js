import React from 'react'

export default function Main({greeting}) {

  const [count, setCount] = React.useState (0)

  const handleRest = () => {
    if (count > 0){
      setCount (count - 1)
    }
  }


  return (
    <main className='main'>
      <div className="div-titulo-main">
        <h1 className='titulo-main'>{greeting}</h1>
      </div>

      <div className='div-parrafo-main'>
          <p>Contador</p>
          <div className='contador'>
            <input type="button" value="-" onClick ={handleRest}/>
            {count}
            <input type="button" value="+" onClick = {() => setCount(count + 1)}/>         
          </div>    
      </div>

    </main>

    

  )
}
