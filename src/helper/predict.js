const predict = () => {
    return JSON.parse(localStorage.getItem("task"));
}
export default predict;