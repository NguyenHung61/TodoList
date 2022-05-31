import React, { useContext, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { createApiClient } from "../api/api";
import { Context } from "../data/Contexts";


const ToDo = (props) => {
    // const { token } = useContext(Context)
    const token = JSON.parse(localStorage.getItem("Token"));
    const navigate = useNavigate();
    const { text, id, statuss } = props;
    const [status] = useState(statuss);
    console.log(token);
    const deleteTask = async () => {
        try {
            const res = await createApiClient().delete("/todo", {
                todoId: id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    // const finishedCheck = (checked) => {
    //     if (checked === true) {
    //         setStatus(true)
    //     }
    //     else {
    //         setStatus(false)
    //     }
    // }

    // const ham = (e) => {
    //     finishedCheck(e.target.checked);
    //     const element = state.find((value) => value.id === id)
    //     element.status = e.target.checked;
    //     localStorage.setItem("task", JSON.stringify(state))
    // }
    const nextPage = () => {
        navigate(`/DetailTask/${id}`)
    }
    return (
        <>
            <div className="list-tasks">
                <ul>
                    <li className="task-item-view">
                        <label htmlFor="" className={status ? "finished" : "task-content"} onClick={nextPage}>{text}</label>
                        <i className="fas fa-trash delete-btn" onClick={deleteTask}></i>
                        <input
                            className="check-task"
                            type="checkbox"
                            value={status}
                            checked={status}
                        // onChange={ham}
                        />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default ToDo;