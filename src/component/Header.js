import React, { useContext, useState } from "react";
import { createApiClient } from "../api/api";
import { Context } from "../data/Contexts";
import randomID from "../helper/randomID";
const Header = ({onClick}) => {
    const { state, setState, info, token, } = useContext(Context);
    const [text, setText] = useState("")
    console.log(typeof token);
    const getValue = (e) => {
        setText(e.target.value);
    }
    // const addTask = () => {
    //     if (state === null) {
    //         const task = []
    //         task.push({ text: text, status: false, id: randomID() })
    //         localStorage.setItem("task", JSON.stringify(task));
    //         setState((state) => [...task]);
    //     } else {
    //         state.push({ text: text, status: false, id: randomID() })
    //         localStorage.setItem("task", JSON.stringify(state))
    //         setState((state) => [...state]);
    //     }
    //     setText('')
    // }
    const handleAdd = async()=>{
        
        try{
            const res = await createApiClient().post("/todo",{
                name: text
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const datas = await createApiClient().get("/todo",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setState(datas.data);
        }
        catch(err){
            console.log(err);
        }
        
    }
    const enterAdd = (e) => {
        if(e.key ==="Enter"){
            handleAdd()
        }
    }
    

    return (
        <header>
            <h1 className="heading"> My ToDo Lists</h1>
            <div className="add-task">
                <input type="text" placeholder="Create new task" className="input-task" value={text}
                    onChange={getValue}
                    onKeyPress = {enterAdd}
                />
                <button className=" btn btn-add" onClick={handleAdd}>Add</button>
            </div>
            
        </header>
    )
}
export default Header;