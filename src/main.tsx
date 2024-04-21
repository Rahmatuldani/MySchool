import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/index.tsx';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
);
