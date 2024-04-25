import ReactDOM from 'react-dom/client';
import './index.css';
import routers from './routes/index.tsx';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={routers}/>
        </PersistGate>
    </Provider>
);
