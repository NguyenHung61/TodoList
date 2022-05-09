import predict from '../helper/predict';
import '../css/main.css';
const Dialog_Refresh = ({active, setActive , props}) => {
    return (
        <div className= {active ? "dialog" : "dialog active"} onClick = {() => setActive(false)}>
            <div className="dialog-refresh">
                <h1 className="message">Are you refresh?</h1>
                <div className="confirm">
                    <button className="btn btn-yes" onClick={() => {props.setState(predict());  setActive(false);}}>Yes</button>
                    <button className="btn btn-no" onClick={() => setActive(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default Dialog_Refresh;