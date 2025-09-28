import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import { PrivateRoute } from './PrivateRoute';

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}
