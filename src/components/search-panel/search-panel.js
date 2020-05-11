import React from "react";
import './search-panel.css'

export default class SearchPanel extends React.Component{

    state = {
        term: ''
    };

    onSearchChange = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onSearchChange(term)

    };

    render() {
        return (
            <input className={"form-control search-input"}
                   value={this.state.term}
                   placeholder={'type to search'}
                   onChange={this.onSearchChange}
            />
        )
    }

};

