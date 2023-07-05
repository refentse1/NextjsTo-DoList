const router = require("express").Router();
const ToDoController = require('../Controllers/TodoController');


//Create to-do 
router.post('/',ToDoController.Create_ToDo);

//Retrieve all the To-do(update them later to select only the to-do's that are linked to one user only)
router.get('/',ToDoController.Get_ToDo_List);

//Retrieve based on description
router.get("/:description",ToDoController.Get_ToDo);

//Update status of to-do, to be isDone
router.put('/:id', ToDoController.Update_Completion_Status);

//Delete the to-do
router.delete('/:id',ToDoController.Delete_ToDo);

module.exports = router;