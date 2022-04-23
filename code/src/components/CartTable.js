import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "./../store/actions/cart.action";


class CartTable extends Component {
  componentDidMount() {
    // 1. 调用获取数据
    const { loadCartList } = this.props;
    
    loadCartList();
  }



  render() {
    const  { cartList , total }= this.props
    console.log(cartList);
    return (
      <div>
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {
            cartList.map((item) => {
              return    <div className="cart-row" key={item.id}>
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src={item.thumbnail}
                  width="100"
                  height="100"
                />
                <span className="cart-item-title">
                  {item.title}
                </span>
              </div>
              <span className="cart-price cart-column">￥{item.price}</span>
              <div className="cart-quantity cart-column">
                <input className="cart-quantity-input" type="number" defaultValue={item.count}/>
                <button className="btn btn-danger" type="button">
                  删除
                </button>
              </div>
            </div>
            })
          }
       
        
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥{total}</span>
        </div>
      </section>
      <br />
      <br />
    </div>
    )
  }
}




const mapStateToProps = (state) => {
  const cartList = state.cart.cartList

  let total = 0 // 总价格
  total = cartList.reduce((prev,curr) => {
    return prev +  Number(curr.price)*Number(curr.count)
  },0)

  return {
    cartList:cartList,
    total: total,
  };
};

const mapDispatchToProps = (dispatch) => {
  // 用于生成函数
  return { ...bindActionCreators(cartActions, dispatch) };
};


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
