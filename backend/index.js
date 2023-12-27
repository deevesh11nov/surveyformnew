const express = require('express');
const port = 8000;
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel=  require('./models/employee');
const SurveyformModel = require('./models/surveyform');

const app = express();

app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/employee")
mongoose.connect("mongodb+srv://rdevverman:rwYb5yQTDkSQxf4s@cluster0.hkxz0dx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });


app.post('/surveyform',(req,res)=>{
  console.log(req.body)
  SurveyformModel.create(req.body)
  .then(surveyform =>res.json(surveyform))
  .catch(err=>console.log(err))
})
app.get('/surveyform', (req, res) => {
  SurveyformModel.find()
    .then((surveyForms) => res.json(surveyForms))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post('/register',(req,res)=>{
  console.log(req.body)
    EmployeeModel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err =>console.log(err))

})

app.post('/login',(req,res)=>{
    const{email ,password} = req.body;
    
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json('The password was incorrect')
            }
        }else{
            res.json("User not found")
        }
    })

})


app.listen(port,(error)=>{
if(error){
    console.log(error)
}
console.log(`Server is live on port ${port}`)
})