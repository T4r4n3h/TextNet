import React, {useState} from 'react'

function Word({word}, props) {
    const [lables, setLables] = useState([
        
        {id:1, title:'noun', color:'blue', category:'Figure of speech'},
        {id:2, title:'number', color:'green', category:'date'},
        {id:3, title:'verb', color:'yellow', category:'Figure of speech'},
        {id:4, title:'adjective', color:'grey', category:'Figure of speech'}
        
    ])
    const submitWords = async (e) => {
        e.preventDefault();
        alert('this works.')

    };



    return (

        <div className=" flex flex-wrap ">
           <form 
           onSubmit = {props.handleClick}
           action="">
                <input 
                name ={word}
                type="text" 
                value={word}
                />
                <select 
                className=""
                
                >
                <option disable></option>     
                {lables.map(lable =>(
                    <option value={lable.id} name={lable.id}>{lable.title}</option>        
                ))}   
                      


                </select>
             

                




           </form>
          
        </div>
    )
}

export default Word
