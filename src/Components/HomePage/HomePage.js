import React from 'react';
import './HomePage.css';
import Product from '../Product/Product';


//----------------------------------------COMPO FN----------------
export default function HomePage() {

  return (
    <div className='homepage'>

      <img
        className="homepage__heroImg"
        src='https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg' //from amzon website
        // src='https://crazylister.com/wp-content/uploads/2018/07/How-to-Sell-on-Amazon.png' 
        // src='https://www.ecomcrew.com/wp-content/uploads/2019/04/heroselling-on-amazon.png'
        alt="hero" />


        {/* PRODUCTS ROWS id,title,price,stars,img,addbtn -------------- */}
        <div className="product__row">
          <Product
            id="random01"
            title="Nest Bedding Leather Bean Bag with Foot Stool Pouf - Classic Gamer Teardrop Beanbag Lounger for Home , Office , Bedroom & Room - XL - with Beans - Blue"
            price={1900}
            stars={4}
            img="https://m.media-amazon.com/images/I/618LNfCq9NL._SX679_.jpg"
          />

          <Product
            id="random02"
            title="Shri Handicrafts 3' Wooden Showpiece Beautiful Elephant Up Trunk Hand Crafted Artistic Home Office Decor Article (Brown)"
            price="899"
            stars={5}
            img="https://m.media-amazon.com/images/I/71cI71cpB6S._SX522_.jpg" 
          />         
        </div>

        {/* 2nd row */}
        <div className="product__row">
        <Product
            id="random03"
            title="101 Witty Stories Of Akbar and Birbal - Collection Of Humorous Stories For Kids"
            price="299"
            stars={3}
            img="https://images-na.ssl-images-amazon.com/images/I/51MrATr-KeL._SX490_BO1,204,203,200_.jpg"
          />
          
          <Product
            id="random04"
            title="boAt Bassheads 242 in Ear Wired Earphones with Mic(Carbon Black)"
            price="1,199"
            stars={5}
            img="https://m.media-amazon.com/images/I/5107rSB7r-L._SX522_.jpg"
          /> 

          <Product
            id="random05"
            title="JASMEY Homes - Ceramic Coffee Mug Set of 2 | Microwave & Dishwasher Safe (Solid Green)"
            price="580"
            stars={4}
            img="https://m.media-amazon.com/images/I/81oztXbAKaL._SX679_.jpg"
          />          
        </div>

        {/* 3rd row */}
        <div className="product__row">
        <Product
            id="random06"
            title="iQOO Z6 5G (Dynamo Black, 4GB RAM, 128GB Storage) | Snapdragon® 695 5G | 120Hz FHD+ Display | 5000mAh Battery | No Cost EMI Upto 9 Months"
            price="15,499"
            stars={4}
            img="https://m.media-amazon.com/images/I/61JNAS5k4AL._SY879_.jpg"
          />
        </div>  

        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
    </div>
  )
}
