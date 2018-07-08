import React from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import addElement from '../actions/list';

class List extends React.Component {
    

    render () {
        const { elements } = this.props;
        return (
            <ul className="list-group">
                {elements.map((el, index) => (
                    <li className="list-group-item" key={index}>{el}</li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => (
    {
        elements: state
    }
)
export default connect(mapStateToProps)(List);