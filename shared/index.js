import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

ReactDOM.render(
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
    document.getElementById('app')
);
