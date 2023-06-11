import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'edit',
        };

        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleModeChange() {
        this.setState((prevState) => ({
            mode: prevState.mode === 'edit' ? 'preview' : 'edit',
        }));
    }

    render() {
        const { mode } = this.state;

        return (
            <div>
                <button onClick={this.handleModeChange}>
                    {mode === 'edit' ? 'Preview' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default App;
