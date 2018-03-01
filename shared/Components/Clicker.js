import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class Clicker extends React.PureComponent {
    constructor(props) {
        super(props);
        const { match: { params: { clicks = 0 } = {} } = {} } = props;

        this.state = { clicks: +clicks };
    }

    onClickAction = () => {
        this.setState(({ clicks }) => {
            this.props.history.push({ pathname: `/clicker/${clicks + 1}`});
            return { clicks: clicks + 1 }
        });
    };

    render () {
        return (
            <ButtonToolbar>
                <div>Clicks <span>{this.state.clicks}</span></div>
                <Button bsStyle="info" onClick={this.onClickAction}>Click</Button>
            </ButtonToolbar>
        );
    }
}
