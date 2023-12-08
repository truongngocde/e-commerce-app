import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    );
};

export default App;
