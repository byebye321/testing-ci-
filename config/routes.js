const express = require ('express')
const router = express.Router()
var candies = [{"name":"Chewing Gum","color":"Red"},
               {"name":"Pez","color":"Green"},
               {"name":"Marshmallow","color":"Pink"},
               {"name":"Candy Stick","color":"Blue"}]


//ROOT
router.get('/', (req, res) => {
  res.status(200).json(
    {
      api_version: 'v1.0.0',
      posts: '/posts'
  })
//   res.status(200).json({message: 'Hello World'});
});

//INDEX
router.get('/candies', (req, res) => {
  res.status(200).json(candies);
});

//SHOW
router.get('/candies/:id', (req,res) =>{
     res.status(200).json(candies[req.params.id -1])
})

//POST
// router.post('/candies', (req,res) =>{
//      res.status(200).json(candies)
//        {
//          result: `candies${req.params.id -1}`
//        }
// })


module.exports = router
