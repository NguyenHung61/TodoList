import React, { useState } from "react";
import randomID from "../helper/randomID";
const Header = (props) => {
    const [state, setState] = useState('')
    const getValue = (value) => {
        setState(value)
    }

    const addTask = () => {
        const data = JSON.parse(localStorage.getItem("task"));
        if (data === null) {
            const task = []
            task.push({ text: state, status: false, id: randomID() })
            localStorage.setItem("task", JSON.stringify(task));
            props.setState(task);
        } else {
            data.push({ text: state, status: false, id: randomID()})
            localStorage.setItem("task", JSON.stringify(data))
            props.setState(data);
        }
    }

    return (
        <header>
            <h1 className="heading"> My ToDo Lists</h1>
            <div className="add-task">
                <input type="text" placeholder="Create new task" className="input-task"
                    onChange={e => {
                        getValue(e.target.value);
                        
                    }}
                />
                <button className=" btn btn-add" onClick={() => {addTask(); }}>Add</button>
            </div>
        </header>
    )
}
export default Header;