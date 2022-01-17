import React, {useState} from 'react'

function Word({word}) {
    const [lables, setLables] = useState([
        
        {id:1, title:'noun', color:'blue', category:'Figure of speech'},
        {id:2, title:'number', color:'green', category:'date'},
        {id:3, title:'verb', color:'yellow', category:'Figure of speech'},
        {id:4, title:'adjective', color:'grey', category:'Figure of speech'}
        
    ])



    return (

        <div className=" flex flex-wrap ">
           <form action="">
                <input 
                type="text" 
                value={word}
                />
                <select 
                className=""
                
                >
                <option disable></option>     
                {lables.map(lable =>(
                    <option value={lable.id}>{lable.title}</option>        
                ))}   
                      


                </select>
             

                




           </form>
          
        </div>
    )
}

export default Word
