import React from 'react';
import Slider from "react-slick";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , color: 'red' , height: 30 , width: 30 , padding: 6}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , color: 'red' , height: 30 , width: 30 , padding: 6}}
      onClick={onClick}
    />
  );
}

const CustomArrowProduct = () => {

  const [products, setProducts] = useState([])

useEffect(() =>{
    
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then(data => {
        setProducts(data)
    })
    .catch (err=>{
        console.log(err)
    })
}, [])


    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
        {
                    products.map((item) => (
                        <div className="col  border border-dark"  style={{border: '1px solid black' , width: 320 }}>
                            <Link key={item.id} to='/products/${item.id}' style={{textDecoration: 'none'}} >
                            <div classNameName="card h-100 " style={{marginLeft: '5px' , height: 400}} >
                                <img src={item.image} className="card-img-top mt-2 item__img" style={{height: 300}}  alt={item.title}/>
                                <div className="card-body item__body">
                                    <h5 className="card-title item__title fw-bold">
                                        {item.title}
                                    </h5>
                                    <p className="item__data">Вчера 22:55</p>
                                    <h3 className="card-text item__price fw-bold">{item.price}sum</h3>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
        </Slider>
      </div>
    );
}

export default CustomArrowProduct