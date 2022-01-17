require('dotenv').config({path:'../.env'});
const express = require('express');
const db = require('./db/index');
const morgan = require('morgan');
const cors = require('cors');
const app = express();



//middleware 
app.use (cors());
app.use(express.json());

//API ROUTES:

// app.use('/api/v1/snippets', require('./routes/api/snippets.js'))
//SNIPPETS
// get all the snippets:
app.get('/api/v1/snippets', async (req, res) => {
    try {
        const allSnippets = await db.query ('SELECT * FROM snippets')
        console.log('this is RESULT', allSnippets);
        res.status(200).json(allSnippets.rows)
    } catch (error) {
        console.error(err.message)
    }    
 });

//CREATE
//
//add One to the list
app.post('/api/v1/snippets', async (req,res) => {
    console.log('a post request just came through! ******');
    console.log(req.body)
    try{
        const results = await db.query('INSERT INTO snippets (title, body) values ($1, $2) RETURNING *', [req.body.title, req.body.body]);
        res.send( 'a post just came through! ******')
        res.status(200).json({
            status: 'success',
            data:{
                snippet :results.rows[0]
            }
        })
    } catch (err) {
        console.log (err.message)
    }
});
// GET One snippet ( Detail page)
app.get('/api/v1/snippets/:id', async (req,res) => {
    console.log(`this is the id of the specific snippet you chose: ${req.params.id}`);
    try {
        const result = await db.query('SELECT * FROM snippets WHERE id = $1',[req.params.id]);
        res.status(200).json({
            status: 'success',
            data:{
                snippet:result.rows[0]
            }
        })
        
    } catch (error) {
     console.log (error.message)   
    }
});
//DELETE a Snippet ( for a button that we are going to implement later on the front)
app.delete ('api/v1/snippets/:id', async(req, res) =>{
    console.log(`this is the id of the snippet you are looking to delete ${req.params.id}`);
    
    try {
        const results = await db.query('DELETE FROM snippets WHERE id = $1',[req.params.id]);
        res.status(204).json({
            status: 'success',
            });
    } catch (error) {
        console.log(error.message)
    }
});


app.post('api/v1/words', async(req, res) =>{

});















//Server Setup for port 3001

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Hey there! the Server is up and running on port ${port}`);

});