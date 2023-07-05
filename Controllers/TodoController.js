const Todo = require("../Models/TodoModel");

//Create_ToDo

const Create_ToDo = (request,response)=>{
    const description= request.body.description;
    const isDone= request.body.isDone;

    const todo = new Todo({
        description,
        isDone
    })

    todo.save()
    .then(()=>{
        response.sendStatus(200);
    })
}

//Get_ToDo_List
const Get_ToDo_List = (request,response)=> {
    //retrieve all todos from database and send it back as a json object
    Todo.find().then((results)=>{
        response.send(results);
    }).catch((err)=>{
        console.log(err);
    })
}

//Get_ToDo
const Get_ToDo = (request,response)=>{
    const description = request.params.description
    Todo.findOne({description}).then((results)=>{
        if (!results )  {
            return response.sendStatus(404).json({"message": "No data found"});
        }else{
            return response.send(results);
        }
    })
}

//Update_Completion_Status
const Update_Completion_Status = async (request,response)=>{
    const id = request.params.id;
    const isDone = request.body.isDone;
    
    await Todo.findById(id).then( async (results)=>{
        if(!results){
            return response.sendStatus(404).json({"message": "No data found"});
        }else{
            await results.updateOne({isDone})
            response.sendStatus(200);
        }
    }).catch((err)=>{
        console.log(err);
    })
}

//Delete_ToDo
const Delete_ToDo = (request,response)=>{
    const id=request.params.id;
    Todo.findByIdAndRemove(id).then((results)=>{
        if(!results ){
            return response.status(501).json({"Message":"Data not deleted"}) ;
        }else{
            return response.status(200).json({"Message" :"Deleted successfully!"});
        }
    })
}

module.exports = {
    Create_ToDo,
    Get_ToDo,
    Get_ToDo_List,
    Update_Completion_Status,
    Delete_ToDo
}