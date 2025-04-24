import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import CadastrarPessoa from "./pages/CadastrarPessoa.jsx";
import ListaPessoas from "./pages/ListaPessoas.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'pessoas',
                element: <ListaPessoas/>,
            },
            {
                path: 'pessoas/cadastro',
                element: <CadastrarPessoa/>,
            },
        ],
    },
]);

function Routes() {
    return <RouterProvider router={router}/>;
}

export default Routes;