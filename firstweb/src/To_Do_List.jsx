
import React, { useState } from 'react';
import './To_Do_List.css';

function App1() {
    const [todoList, setTodoList] = useState([]);

    const saveToDoList = (event) => {
        const toname = event.target.toname.value;
        if (!todoList.includes(toname)) {
            const finalTodoList = [...todoList, toname];
            setTodoList(finalTodoList);
        } else {
            alert("ToDo Name Already Exists...");
        }

        event.preventDefault();
        event.target.reset(); // Optional: Reset the form after submission
    };

    const list = todoList.map((value, index) => (
        <ToDoListItems 
            value={value} 
            key={index} 
            indexNumber={index} 
            todoList={todoList} 
            setTodoList={setTodoList} 
        />
    ));

    return (
        <div className="App">
            <h1>ToDo List</h1>
            <form onSubmit={saveToDoList}>
                <input type="text" name="toname" required /> 
                <button type="submit">Save</button>
            </form>
            <div className="outerDiv">
                <ul>
                    {list}            
                </ul>
            </div>
        </div>
    );
}

function ToDoListItems({ value, indexNumber, todoList, setTodoList }) {
    let [status,setStatus]=useState(false)
    const deleteRow = () => {
        const finalData = todoList.filter((v, i) => i !== indexNumber);
        setTodoList(finalData);
    };
    let checkStatus=()=>{
         setStatus(!status)
    }

    return (
        <li className={(status)?'completetodo':''}onClick={checkStatus}>
          {indexNumber+1}  {value} <span onClick={deleteRow}>&times;</span>
        </li>
    );
}

export default App1;
