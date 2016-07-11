const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/routes')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev') )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/', router);
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path} from ${req.ip}`);
  next();
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// app.get('/', (req, res) => {
//   res.render('index', { title: 'My Candies'})
// });

app.use('/', router)
app.use('/candies', router)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
