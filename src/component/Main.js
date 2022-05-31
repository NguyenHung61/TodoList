import Header from './Header';
import ToDo from './ToDo';
import Footer from './Footer';
import { useContext, useState } from 'react';
import '../App.css';
import { Context } from '../data/Contexts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Main = () => {
    const { state } = useContext(Context);
    
    return (
        <div className="main">
            <div className='wrapper'>
                <Header  />
                {
                    state === null ? <ToDo text="No Item" /> : state.map((value, index) =>
                        <ToDo
                            key={index}
                            text={value.name}
                            id={value.id}
                        />
                    )
                }
                <Footer />
                
            </div>
        </div>


    )
}