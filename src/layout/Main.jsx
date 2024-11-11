import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='sticky top-0 z-10'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;