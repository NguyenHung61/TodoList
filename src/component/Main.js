import Header from './Header';
import ListToDo from './ListToDo';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../App.css';
const Main = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("task"));
        if (data === null || data === []) {
            setState(null);
        }
        else {
            setState(data)
        }
    }, [])
    return (
        <div className="main">
            <div className='wrapper'>
                <Header setState={setState} />
                {
                    state === null ? <ListToDo text="No Item" /> : state.map((value, index) =>
                        <ListToDo
                            setState={setState}
                            data={state}
                            key={index}
                            text={value.text}
                            id={value.id}
                            status={value.status}
                        />
                    )
                }
                <Footer
                    setState={setState}
                />
                
            </div>
        </div>
    )
}
export default Main;