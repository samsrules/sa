let express=require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/uuyy');
//let AdminModel=require('./database/Admin');
let BookModel=require('./database/Book');

let app=express();
app.use(cors());
app.use(bodyParser.json());

/*
app.post('/login',function(req,res)
{ 
    let em=req.body.email;
    let pa=req.body.pass;
    AdminModel.find({email:em,pass:pa},function(err,data)
       {
          if(err)
          {
            res.json({err:1,user:'Error on connection'});
          }
          else if(data.length==0)
          {
            res.json({err:1,user:'Email or pass is not correct'});
          }
          else
          {
              res.json({err:0,user:'Congrats!!! Succesfully Login.'});
          }
       })
})
*/

app.post('/insert', function(req, res){ 
console.log('insertss');
    console.log(req.body);
    let is=req.body.isbn;
    let ti=req.body.title;
	let au=req.body.author;
    let de=req.body.description;
	let pu=req.body.published_year;
    let pur=req.body.publisher;

  new BookModel({
          isbn:is,
		  title:ti,
		  author:au,
		  description:de,
		  published_year:pu,
		  publisher:pur      
  }).save(function(err, doc)
  {
     if(err)
     {
       res.json({err:1,user:'Error while data inserting'});
     } 
     else 
     {
       res.json({err:1,user:'Data inserted'});
     }
     
  });

});

// app.get('/list', function(req, res){ 
//   ListModel.find({}, function(err, docs){ 
//     if(err) res.json(err);
//     else res.render('index', {users: docs})
//        console.log(docs);
//   });
// });


app.listen(7788,function()
{
    console.log('Working');
})
