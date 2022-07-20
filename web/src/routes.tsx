import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes1 = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create-point" element={<CreatePoint/>} />

        </Routes>

        </BrowserRouter>
    );
}

export default Routes1;