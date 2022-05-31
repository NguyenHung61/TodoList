import React, { useContext, useState } from "react";
import { Context } from "../data/Contexts";
import DialogRefresh from "./DialogRefresh";
const Footer = () => {
    const { state, setState } = useContext(Context);
    const [active, setActive] = useState(false);


    const clearAll = () => {
        localStorage.setItem("task", JSON.stringify([]))
        setState([])
    }

    const showDiglog = () => {
        setActive(true)
    }
    return (
        <>
            <div className="footer">
                <span className="status-task">{`You have ${state !== null ? state.length : 0} tasks`}</span>
                <button className="btn btn-clear" onClick={clearAll}>Clear All</button>
                <button className="btn btn-refresh" onClick={() => { showDiglog() }}>Refresh</button>
            </div>
            <DialogRefresh
                active={active}
                setActive={setActive}
            />
        </>

    )
}
export default Footer;
