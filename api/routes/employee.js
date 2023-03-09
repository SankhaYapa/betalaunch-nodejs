const router =require("express").Router();
let Employee = require("../models/employee");

router.route("/add").post(
    (req,res)=>{

        try {
            const fullName = req.body.fullName;
            const nameInitials = req.body.nameInitials;
        const displayName = req.body.displayName;
        const gender = req.body.gender;
        const dob = req.body.dob;
        const email=req.body.email;
        const mobileNumber=req.body.mobileNumber;
        const designation=req.body.designation;
        const employeeType=req.body.employeeType;
        const joinDate=req.body.joinDate;
        const experience=req.body.experience;
        const Salary=req.body.Salary;
        const notes=req.body.notes;

        const newEmployee = new Employee({

            fullName,nameInitials,displayName,gender,dob,email,mobileNumber,
            designation,employeeType,joinDate,experience,Salary,notes
        })
        
        newEmployee.save();
        res.json(newEmployee);
        } catch (error) {
            console.log(error);
        }
    }
) 

router.route("/").get((req,res)=>{

    try {
        Employee.find().then((employee)=>{
            res.json(employee)
       });  
    } catch (error) {
        console.log(error)
    }

})

// router.route("/update/:id").put(async(req,res)=>{
    
//     Employee.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set:req.body
//             },
//             (error,post)=>{
//                 if(error){
//                     return res.status(400).json({error:error});
//                 }
//                 return res.status(200).json({
//                     success:"Update successfully"
//                 })
//             }
//         )

// })
router.put("/update/:id", async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      
        await employee.updateOne({ $set: req.body });
        res.status(200).json("your post has been updated");
     
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.route("/delete/:id").delete(async(req,res)=>{

    let userId =req.params.id;
    
  await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
      
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with delete user",error:err.massage})
    })
})

//get one data set
router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    await Employee.findById(userId)
    .then((employee)=>{
        res.status(200).send({status : "User fetched", employee});
    })
    .catch(()=>{
        res.status(500).send({status : "error with get user"});
    })
})

module.exports = router;

