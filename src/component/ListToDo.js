import React, { useState } from "react";

const ListToDo = (props) => {
    const [status, setStatus] = useState(false)
    const deleteTask = () => {
        const data = props.data;
        const eLdelete = data.filter((value, index) => {
            return value.id !== props.id;
        })
        localStorage.setItem("task", JSON.stringify(eLdelete));
        props.setState(eLdelete)
        setStatus(false)
    }
    const finished = (checked) => {
        if (checked === true) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }

    }


    return (
        <>
            <div className="list-tasks">
                <ul>
                    <li className="task-item-view">
                        <label htmlFor="" className={status ? "finished" : "task-content"} >{props.text}</label>
                        <i className="fas fa-trash delete-btn" onClick={() => { deleteTask(); setStatus(false) }}></i>
                        <input type="checkbox" name="" id="" value={status} className="check-task" defaultChecked={props.status}
                            onChange={e => {
                                finished(e.target.checked)
                            }
                            }
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ListToDo;