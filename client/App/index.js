import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Clicker from './Clicker';

const App = props => (
    <BrowserRouter>
        <Route
            path={'/stream/:clicks'}
            render={routeProps => <Clicker {...props} {...routeProps}/>}
        />
    </BrowserRouter>
);

export default App;
