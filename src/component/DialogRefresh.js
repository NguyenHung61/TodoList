import predict from '../helper/predict';
import '../css/main.css';
import { useContext } from 'react';
import { Context } from '../data/Contexts';
const DialogRefresh = (props) => {
    const {setState} = useContext(Context)
    const { active, setActive} = props;

    const btnYesClick = () => {
        setState(predict());
        setActive(false);
    }
    const exitDialog = () =>{
        setActive(false);
    }
    
    return (
        <div className={active ? "dialog" : "dialog active"} onClick={exitDialog}>
            <div className="dialog-refresh">
                <h1 className="message">Are you refresh?</h1>
                <div className="confirm">
                    <button className="btn btn-yes" onClick={btnYesClick}>Yes</button>
                    <button className="btn btn-no" onClick={exitDialog}>No</button>
                </div>
            </div>
        </div>
    )
}
export default DialogRefresh;