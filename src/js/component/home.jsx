import React,{useState} from "react";
import { TodoForm } from "./todoForm.jsx";
import { TodoList } from "./todoList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list,setList]= useState(["take out the trash", "make the bed"])
	return (
		<div className="text-center">
			<TodoForm setList={setList} list={list}/>
			<TodoList list={list} setList={setList}/>
		</div>
	);
};

export default Home;
