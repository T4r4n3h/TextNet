import React, { useEffect, useState } from "react";

function ListSnippets() {
  const [snippets, setSnippets] = useState([]);

  const deleteSnip = async (id) => {
    try {
      await fetch(`http://localhost:3007/api/snippets/${id}`, {
        method: "DELETE",
      });
      setSnippets(snippets.filter((snip) => snip.id !== id));
    } catch (error) {}
  };

  const getSnippets = async () => {
    try {
      const response = await fetch("http://localhost:3007/api/snippets");
      console.log("Response:", response);
      const jsonData = await response.json();
      setSnippets(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSnippets();
  }, []);

  return (
    <div className="container text-center justify-content">
      <h1>List of the Snippets</h1>
      <table className="container">
        <thead className=" border-bottom">
          <tr>
            <th>Tile</th>
            <th>Description</th>
            <th>Annotate</th>
            <th>Delete</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snip) => (
            <tr key={snip.id}>
              <td>{snip.title}</td>
              <td>{snip.body}</td>
              <td>
                <button>Annotate</button>
              </td>
              <td>
                <button
                  onClick={() => deleteSnip(snip.id)}
                  className="rounded-full  w-6  align-center bg-red-400 text-white mb-4"
                >
                  X
                </button>
              </td>
              <td>maybe list of words</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSnippets;
