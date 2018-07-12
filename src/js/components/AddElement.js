import React from 'react';
import { connect } from 'react-redux';
import { addElement } from '../actions/list';

class AddElement extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange (e) {
        this.setState({
            value: e.target.value,
        })
    }

    onSubmit (e) {
        e.preventDefault();
        const newElement = {
            name: this.state.value,
            username: '',
            email: '',
        }
        this.setState({
            value: '',
        });
        this.props.addElement(newElement);
        
    }

    render () {
        return (
            <form>
                <div className="form-group">
                    <textarea className="form-control text-justify" maxLength="250" rows="3" value={this.state.value} onChange={this.onChange} ></textarea>
                </div>
                <button type="button" className="btn btn-light" onClick={this.onSubmit}>Добавить</button>
            </form>
        )
    }
}

export default connect(null, { addElement })(AddElement);