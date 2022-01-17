// const express = require('express');
// const router = express.Router();
// const snippetsCtrl = require( '../../controllers/snippets')

//GET ALL
// router.get('/api/v1/snippets', async (req, res) => {
//     try {
//         const result= await db.query ('SELECT * FROM snippets')
//         console.log('this is RESULT', result);
//         res.status(200).json({
//             status: 'success',
//             data:{
//                 snippets:result
//             }
//         })
//     } catch (error) {
//         console.error(err.message)
//     }    
//  });

//  //CREATE Snippet
//  router.post('/api/v1/snippets', async (req,res) => {
//     console.log('a post request just came through! ******');
//     console.log(req.body)
//     try {
//        await db.query('INSERT INTO snippets (title, body) values ($1, $2)', [req.body.title, req.body.body]);
        
//         res.send( 'a post just came through! ******')
//     } catch (err) {
//         console.log (err.message)
//     }
// });
