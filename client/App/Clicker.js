import React from 'react';

export default class Clicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.clicks
        };
    }

    onClickAction = () => {
        this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
        this.props.history.push({
            pathname: '/stream/',
            clicks: 11
        });
    };

    render () {
        return (
            <div>
                <div>Clicks <span>{this.state.clicks}</span></div>
                <button onClick={this.onClickAction}>Click</button>
            </div>
        );
    }
}
