import React from 'react';

const Html = props => {
    return (
        <html>
        <head>
            <title>{props.title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        </head>
        <body>
            <div id="app">{props.children}</div>
            <script src="/static/bundle.js"></script>
        </body>
        </html>
    );
};

export default Html;