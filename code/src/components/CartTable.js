
import React from 'react'


function CartTable() {
  return (
    <div>
        <section class="container content-section">
            <h2 class="section-header">购物车</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">商品</span>
                <span class="cart-price cart-header cart-column">价格</span>
                <span class="cart-quantity cart-header cart-column">数量</span>
            </div>
            <div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="images/01.webp" width="100" height="100" />
                        <span class="cart-item-title">小户型简约现代网红双人三人客厅科技布免洗布艺</span>
                    </div>
                    <span class="cart-price cart-column">￥1020</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number"/>
                        <button class="btn btn-danger" type="button">删除</button>
                    </div>
                </div>
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="images/02.webp" width="100" height="100"/>
                        <span class="cart-item-title">11全网通4G手机官方iPhonexr</span>
                    </div>
                    <span class="cart-price cart-column">￥4758</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number"/>
                        <button class="btn btn-danger" type="button">删除</button>
                    </div>
                </div>
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">总价</strong>
                <span class="cart-total-price">￥39.97</span>
            </div>
        </section>
        <br/>
        <br/>
    </div>
  );
}

export default CartTable;
