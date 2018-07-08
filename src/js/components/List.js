import React from 'react';
import { connect } from 'react-redux';


class List extends React.Component {
   

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
export default connect(mapStateToProps)(List);