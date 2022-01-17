import React, {useEffect, useState} from 'react';


function ListSnippets() {

    const [snippets, setSnippets] = useState ([
        // {
        //     "id": "1",
        //     "title": "Tulips",
        //     "body": "these Tulips are Beutiful. There are four Tulips in the vase."
        // },
        // { "id": "2",
        // "title": "London ",
        // "body": "London is an old city and I love to move there one day"},
        // {}

    ]);
    const getSnippets = async() => {
        try {
            const response = await fetch('http://localhost:3007/api/v1/snippets',)
            console.log('Response:',response)
            const jsonData = await response.json();
            setSnippets(jsonData);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getSnippets();
    },[]);



    return (
        <div>
            <h1>List of the Snippets</h1> 
            <table>
                <thead>
                    <tr>
                        <th>Tile</th>
                        <th>Description</th>
                        <th>Annotate</th>
                        <th>Delete</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {snippets.map(snip =>(
                        <tr key={snip.id}>
                            <td>{snip.title}</td>
                            <td>{snip.body}</td>
                            <td>
                            <button>Annotate</button>
                            </td>
                            <td>
                                <button>X</button>
                            </td>
                            <td>maybe list of words</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ListSnippets;
