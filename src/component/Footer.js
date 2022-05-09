import React, { useState } from "react";
import DialogRefresh from "./DialogRefresh";
const Footer = (props) => {

    const [active, setActive] = useState(false);


    const clearAll = () => {
        localStorage.setItem("task", JSON.stringify([]))
        props.setState([])
    }

    const showDiglog = () => {
        setActive(true)
    }
    return (
        <>
            <div className="footer">
                <span className="status-task">You have .... tasks</span>
                <button className="btn btn-clear" onClick={clearAll}>Clear All</button>
                <button className="btn btn-refresh" onClick={() => { showDiglog() }}>Refresh</button>
            </div>
            <DialogRefresh
                active={active}
                setActive={setActive}
                props={props}
            />
        </>

    )
}
export default Footer;
