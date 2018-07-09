import React from 'react';
import { connect } from 'react-redux';
import { fetchElements, loadFromLocalStore } from '../actions/list';

class List extends React.Component {
   
    componentDidMount() {
        if (!localStorage.getItem('elements')) {
            this.props.fetchElements();
            return;
        }
        this.props.loadFromLocalStore();  
    }
    render () {
        return (
            <ul className="list-group">
                {this.props.elements.map((el, index) => (
                    <li className="list-group-item" key={index}>{el.name}</li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => (
    {
        elements: state,
    }
)
export default connect(mapStateToProps, { loadFromLocalStore, fetchElements })(List);