import React,{useState}  from 'react'
import Word from './Word'
function ClientInputArea() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [outWords, setOutWords] = useState([body.split(' ')])

    // const words = body.split(" ");

    const onSubmitForm = (e) => {
        e.preventDefault();

        alert('the form was just submitter')
        console.log('this is outWords:',outWords)
        //need to fetch a POST request to go to db

       
    }

    const wordOutput = (e) => {
          setBody(e.target.value)
          setOutWords(body.split(' '))
    }



    return (
        <div className="mx-auto mt-10 border  w-90">
            
            <div className="mx-auto border shadow-2xl w-50">
            
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
             <div className="mx-auto flex flex-wrap bg-purple-500">
                {outWords.map (word =>(<Word word={word} key={word.id}/>))}
                 <button
                 className="ml-auto "
                 >Submit</button>
             </div>   

        </div>
    )
}

export default ClientInputArea
