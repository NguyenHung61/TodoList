import { Route, Routes } from "react-router-dom";
import DetailTask from "./component/DetailTask";
import { Main } from "./component/Main";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./data/Contexts";
import { Login } from "./component/Login";
import { SignUp } from "./component/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ContextProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/DetailTask/:detailID" element={<DetailTask />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
