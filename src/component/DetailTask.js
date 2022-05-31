import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../data/Contexts";
import predict from "../helper/predict";

const DetailTask = () => {
    const {state} = useContext(Context);
    console.log(state);
    const {detailID} = useParams();
    const element = state.find((value) =>  value.id == detailID);
    console.log(element);
    return (
        <div className="detail">
            <div className="detail-task">
                {
                    <ul>
                        <li>
                            <label>ID: </label>
                            <label>{element.id}</label>
                        </li>
                        <li>
                            <label>Text: </label>
                            <label>{element.name}</label>
                        </li>
                        {/* <li>
                            <label>Status: </label>
                            <label>{`${element.status}`}</label>
                        </li> */}
                    </ul>
                }
            </div>
        </div>
    )
}
export default DetailTask;