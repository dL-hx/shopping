import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as productActions from "./../store/actions/product.action";

class ProductList extends Component {
  componentDidMount() {
    // 1. 调用获取数据
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    const { product } = this.props;
    return (
      <div>
        <section className="container content-section">
          <h2 className="section-header">商品列表</h2>
          <div className="shop-items">
            {product.map((item) => {
              return (
                <div className="shop-item" key={item.id}>
                  <img className="shop-item-image" src={item.thumbnail} />
                  <span className="shop-item-title">{item.title}</span>
                  <div className="shop-item-details">
                    <span className="shop-item-price">￥{item.price}</span>
                    <button
                      className="btn btn-primary shop-item-button"
                      type="button"
                    >
                      加入购物车
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  // 用于生成函数
  return { ...bindActionCreators(productActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
