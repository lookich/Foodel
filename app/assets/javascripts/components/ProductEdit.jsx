import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProduct } from '../actions';

class ProductEdit extends React.Component {
  constructor() {
   super();
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleCancel = this.handleCancel.bind(this);
 }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.product.id;
    const image = this.state.image ? this.state.image : this.props.product.image;
    const name = this.state.name ? this.state.name : this.props.product.name;
    const description = this.state.description ? this.state.description : this.props.product.description;
    const product = {id: id, image: image, name: name, description: description}
    this.props.updateProduct(product);
  };

  handleCancel = () => {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit: {this.props.product.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Image</label>
            <input type="text" name="image" defaultValue={this.props.product.image} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" defaultValue={this.props.product.name} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" rows="5" defaultValue={this.props.product.description} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { updateProduct };

ProductEdit.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
  updateProduct: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
