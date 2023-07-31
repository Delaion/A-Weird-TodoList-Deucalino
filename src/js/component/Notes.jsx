import React,{useState} from "react";
import Home from "./home.jsx";
const Notes=(props)=>{
    const [todos, setTodos]= useState (["Verify I´m awake after alarm","Brush my teeth", "Say Hello to the dogs","Forget to say hello to boars when I get out home" ]);
	const [newTodo, setNewTodo]=useState (" ");
	const handleOnchange=(e)=>{
		setNewTodo(e.target.value);
		console.log(newTodo);
	function addNewTodo(){
			setTodos(todos.concat(newTodo));
			console.log(todos);
		}
    function deleteTodo(index){
        setTodos(todos.filter((t,i)=>{
        return i !==index
        }));
    }
    return (
        <div  className="container d-flex flex-column">
            <div className="text-center">
            <h1>Deucalinos weird to Dos</h1>
			</div>
         <form onSubmit={addNewTodo}>
            <input  type="text" value={newTodo}  onChange={handleOnchange}  className="form-control" placeholder="Write here your To Do" aria-label="Recipient's username" aria-describedby="button-addon2" id="task"/>
            <button  onClick={addNewTodo} className="btn btn-outline-success" type="button" id="button-addon2">
	        <i className="fa-solid fa-calendar-plus"></i>
	        </button>
            <ul className="List-group">
            {todos.map((t, index)=>(
                <li  key={index} className="list-group-item d-flex justify-content-between">
                  <div className="alert alert-info" role="alert">
                     {props.text}
                  </div>
                  <button onClick={()=>{props.deleTodo(props.index)}} type="button" className="btn btn-danger">
                   <i className="fa-solid fa-trash-can"></i>
                  </button>
                </li>
		))}
            </ul>
         </form>
        </div>
    );
}
}

export default Notes;