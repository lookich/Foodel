import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    //Use a conditional to make sure there are products.
    if(this.props.products.length) {
      return (
        <div>
          <h4>Products</h4>
          {/*Return each product in the format specified in the function.*/}
          {this.props.products.map(product => {
            return (
              //Add unique key to iterate over an array.
              <div key={product.id}>
                {/*Use Link component to add a hyperlink to each product title
                   that will take the user to its ProductInfo component.*/}
                <h2><Link to={`/products/${product.id}`}>{product.image}
                      <p>{product.name}</p>
                    </Link>
                </h2>
                {product.description}
                <hr/>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (<div>No Products</div>);
    }
  }
}
1
//Get the store's current state and maps it to the component`s props.
const mapStateToProps = (state) => ({ products: state.products });

ProductList.propTypes = {
  products: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
  ]),
};

//Connect function takes the mappings from the mapStateToProps method
// and adds them to the props of the component.
export default connect(mapStateToProps)(ProductList);
