import React from 'react';
import { connect } from 'react-redux';
import { fetchData, loadFromLocalStore } from '../actions/list';

class List extends React.Component {
   
    componentDidMount() {
        if (!localStorage.getItem('elements')) {
            this.props.fetchData();
            return;
        }
        this.props.loadFromLocalStore();  
    }
    render () {
        return (
            <ul className="list-group">
                {this.props.elements.map((el, index) => (
                    <div className="list-group-item" key={index}><p>{el.name}</p></div>
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
export default connect(mapStateToProps, { loadFromLocalStore, fetchData })(List);