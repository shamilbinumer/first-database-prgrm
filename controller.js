// export function getData(req,res) {
//     res.status(200).send("controller")
// }
import schema from './user.model.js'
export function addTask(req,res){
    const {task}=req.body
    console.log(task);
    res.status(201).send(schema.create({task}));
}