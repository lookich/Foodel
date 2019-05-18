import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

class ProductAdd extends React.Component {
  state = {image:'', name: '', description: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

//In this function, we can call the addProduct function and pass it the component's state with the form data.
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state);
  };

  render() {
    return (
      <div>
        <h4>Add Product</h4>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input required value={this.state.image} onChange={this.handleChange}
              className="form-control" placeholder="Image" />
          </div>
          <div>
            <input required value={this.state.name} onChange={this.handleChange} placeholder="Name" />
          </div>
          <div>
            <textarea name="description" rows="5" required value={this.state.description} onChange={this.handleChange}
              placeholder="Description" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

//Holds all the action creation functions ('addProduct') that will be called from our component.
const mapDispatchToProps = { addProduct };

ProductAdd.propTypes = {
  addProduct: PropTypes.oneOfType([
      PropTypes.func,
  ]),
};

//Adds the functions from mapDispatchToProps to the ProductAdd component's props.
export default connect(null, mapDispatchToProps)(ProductAdd);
