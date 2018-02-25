import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import App from '../client/App';
import Html from '../client/Html';

const app = express();

app.use('/static', express.static('static'));

const initialData = {
    clicks: 11
};

app.get('/string', (req, res) => {
    res.write(
        ReactDOM.renderToString(
            <Html title="Click calculation" initialData={JSON.stringify(initialData)}>
                <App {...initialData} />
            </Html>
        )
    );
    res.send();
});

app.get('/stream/:clicks', (req, res) => {
    ReactDOM.renderToNodeStream(
        <Html title="Click calculation" initialData={JSON.stringify({clicks: parseInt(req.params.clicks, 10)})}>
            <App {...initialData} />
        </Html>
    ).pipe(res);
});

app.listen(3000);

