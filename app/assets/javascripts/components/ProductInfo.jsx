import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct, deleteProduct } from '../actions';

class ProductInfo extends Component {
  //Calling the getProduct method that will fetch the product data from the API.
  //Passing the product id as the argument, which uses React-Router's match method to get from the route parameter.
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <h2>{product.image}</h2>
        <p> {product.name}</p>
        <p>{product.description}</p>
        <div>
          <Link to={{ pathname: `/products/${product.id}/edit`, state: { product: product } }} className='btn btn-info'>
            Edit
          </Link>
          <button onClick={() => this.props.deleteProduct(product.id)}>
            Delete
          </button>
          <Link to="/products" className="btn btn-secondary">Close</Link>
        </div>
        <hr/>
      </div>
    )
  }
}

//Get the store's current state and maps it to the component`s props.
const mapStateToProps = (state) => ({ product: state.product });

//Maps all the action creation functions imported from the actions file to the component's props.
const mapDispatchToProps = { getProduct, deleteProduct };

ProductInfo.propTypes = {
  product: PropTypes.object,
  getProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

//Adds the mapped State and Dispatch functions to the ProductInfo component's props.
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
