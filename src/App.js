import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './hw pages/components/ProductList';
import Navbar from './hw pages/components/Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={ProductList} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
