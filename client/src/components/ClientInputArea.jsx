import React,{useState}  from 'react'
import Word from './Word'
function ClientInputArea() {
    const [title, setTitle] = useState("")
    const [body,setBody] = useState("")
    const [outWords, setOutWords] = useState([body.split(' ')])
    const [lables, setLables] = useState([
        
        {id:1, title:'noun', color:'blue', category:'Figure of speech'},
        {id:2, title:'number', color:'green', category:'date'},
        {id:3, title:'verb', color:'yellow', category:'Figure of speech'},
        {id:4, title:'adjective', color:'grey', category:'Figure of speech'}
        
    ])

    // const words = body.split(" ");

    const onSubmitForm =  async (e) => {
        e.preventDefault();

        // alert('the form was just submitter')
        // console.log('this is outWords:',outWords)
        //need to fetch a POST request to go to db
        try {
            console.log('got here!')
          const data = { title, body};
          console.log(`i want to see what is in the data ${data}`)
          const response = await fetch (
              'http://localhost:3007/api/v1/snippets',
                {
                  method: 'POST',
                  headers: {'content-Type': 'application/json'},
                  body:JSON.stringify(data)
                }        
            );
            let Response = response.json();
            console.log("DATA",data);
            console.log("RESPONSE",Response)
            console.log("TITLE",title);

        } catch (error) {
            console.log(error.message)
        }



       
    }

    const wordOutput = (e) => {
          setBody(e.target.value)
          setOutWords(body.split(' '))
    }
    const submitWords = async (e) => {
        e.preventDefault();
        // alert('this works.')
        try {
            
          const data = {outWords,};
          console.log(`i want to see what is in the data ${data}`)
          const response = await fetch (
              'http://localhost:3007/api/words',
                {
                  method: 'POST',
                  headers: {'content-Type': 'application/json'},
                  body:JSON.stringify(data)
                }        
            );
            let Response = response.json();
            console.log("DATA",data);
            console.log("RESPONSE",Response)
            console.log("WORD",outWords);

        } catch (error) {
            console.log(error.message)
        }

    };


    return (
        <div className="mx-auto mt-10 border ">
            
            <div className="mx-auto border shadow-2xl w-25">
            
                <form
                action=""
                onSubmit={onSubmitForm}
                >
                        <input
                        type="text"
                        className="w-full border-none divide-y"
                        placeholder="Title:"
                        value = {title}
                        onChange={e => setTitle(e.target.value)}
                        />
            
                        <textarea
                        value = {body}
                        onChange={wordOutput}
                        className="w-full border-none"
                        placeholder="Body:    type or paste your text here"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        >
                        </textarea>
                        <div className="w-full flex justify-between">
                            <button
                            className="border-2   w-20  align-center bg-blue-400 text-white mb-4"
                            >
                                Submit
                            </button>
                            <button
                            className="border-2   w-20  align-center bg-blue-400 text-white mb-4 "
                            >New Text</button>
                        </div>
                </form>
            </div>  


                 <p>this will be the out put</p><br />
             <div className="mx-auto flex flex-wrap ">
                {outWords.map (word =>(<Word word={word} key={word.id} />))}
                 <button
                 onClick = {submitWords}
                 className="ml-auto "
                 >Submit</button>
             </div>   

        </div>
    )
}

export default ClientInputArea
