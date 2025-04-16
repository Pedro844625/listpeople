import { Outlet, Link } from 'react-router-dom';
import './index.css';

export default function App() {
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/captura">Captura</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet/> {}
            </main>
        </div>
    );
}