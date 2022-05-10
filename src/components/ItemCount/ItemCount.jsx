import React from 'react'

export default function ItemCount({stock}) {
    const [count, setCount] = React.useState (stock)

    const handleSuma = ()=> {
        setCount (count + 1)
    }
    const handleRest = () => {
      if (count > 0){
        setCount (count - 1)
      }
    }

    return (
        <div className='div-parrafo-main'>
            <p>Contador</p>
            <div className='contador'>
            <input type="button" value="-" onClick ={handleRest}/>
            {count}
            <input type="button" value="+" onClick = {handleSuma}/>         
            </div>    
        </div>
    )
}
