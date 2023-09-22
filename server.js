const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const Mentor=require('./models/Mentor');
const Student=require('./models/Student')

const app=express();

app.use(bodyParser.json());

mongoose.connect(process.env.Db_url,{}).then(()=>{console.log('Connected to MongoDB server');}).catch((err)=>{console.log(err);})

app.post('/mentor', async (req,res)=>{
    try {
        const mentor=new Mentor(req.body);
        await mentor.save();
        res.send(mentor);
        
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/student',async(req,res)=>{
    try {
        const student=new Student(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(400).send(error);        
    }
});

app.post('/mentor/:mentorId/assign', async(req,res)=>{
    try {
        const mentor= await Mentor.findById(req.params.mentorId);
        const students=await Student.find({_id:{$in:req.body.students}});
        students.forEach((student)=>{
            student.cMentor=mentor._id;
            student.save();
        });
        mentor.students=[...mentor.students,...students.map((student)=>student._id)];
        await mentor.save();
        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.put('/student/:studentId/assignMentor/:mentorId', async(req,res)=>{
    try {
        const student= await Student.findById(req.params.studentId);
        const nMentor= await Mentor.findById(req.params.mentorId);
        
        if(student.cMentor){
            student.pMentor.push(student.cMentor);
        }

        student.cMentor = nMentor._id;
        await student.save();
        
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/mentor/:mentorId/students',async(req,res)=>{
    try {
        const mentor= await Mentor.findById(req.params.mentorId).populate("students");
        res.send(mentor.students);
    } catch (error) {
        res.status(400).send(error);
    }

});

app.get('/students/:studentsId/pMentor',async(req,res)=>{
    try {
        const students= await Student.findById(req.params.studentsId).populate("pMentor");
        res.status(200).send(students.pMentor);
       // const mentor= await Mentor.findById()
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(process.env.PORT,()=>{
    console.log('Server is running in port' ,process.env.PORT);
});