import React from 'react'
//components
// import ClientInputArea from './components/ClientInputArea'
import ListSnippets from './components/ListSnippets';


const App = () => <div className="container mx-auto border">

        <h1 className="text-purple-500 font-bold text-4xl text-center mt-10">
                TextNet The text Annotation tool
        </h1>


        {/* <ClientInputArea/> */}
        <ListSnippets />
</div>
 
export default App;