import path from 'path';

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import Html from '../shared/Components/Html';
import routes from '../shared/routes';

const appSSR = express();
const appCSR = express();

appSSR.use('/static', express.static('static'));
appCSR.use('/static', express.static('static'));

appCSR.get('*', (req, res) => res.sendFile(path.join(__dirname, '../static', 'index.html')));

appSSR.get('*', (req, res) => {
    ReactDOM.renderToNodeStream(
        <Html>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Html>
    ).pipe(res);
});

appSSR.listen(3000);
appCSR.listen(3001);
