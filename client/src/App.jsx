import React from 'react'
import ClientInputArea from './components/ClientInputArea'

const App = () => {
    return <div className="container mx-auto border">
            
                <h1 className="text-purple-500 font-bold text-4xl text-center mt-10">
                        TextNet The text Annotation tool
                </h1>
                

                <ClientInputArea/>
        </div>
}
 
export default App;