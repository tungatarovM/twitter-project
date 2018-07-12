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
                {this.props.tweets.map((tweet, index) => (
                    <div className="list-group-item" key={index}><p>{tweet.name}</p></div>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => (
    {
        tweets: state.tweets,
    }
)
export default connect(mapStateToProps, { loadFromLocalStore, fetchData })(List);