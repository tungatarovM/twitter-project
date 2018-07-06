import React from 'react';
import { bindActionCreators } from 'redux';
import testAction from '../actions/list';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


class Application extends React.Component {
    render () {
        const { dispatch, items } = this.props;
        const test = bindActionCreators(testAction, dispatch);
        return (
            <button className="btn btn-primary" onClick={test}>Test button</button>
        )     
    }
}
const mapStateToProps = state => (
    {
        items: state 
    }
)

export default connect(mapStateToProps)(Application);