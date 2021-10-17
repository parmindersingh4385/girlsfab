import React from 'react' 
import { useState, useEffect } from 'react';

function Apparel() {

    const [initState, setInitState] = useState({
        loading: true,
        data: [],
        error: false
    });

    /* const [apparels, setAppreals] = useState([]); */


    useEffect(() => {      
        const getApparels = async () => {
            const retData = await getApparelsFromDb(); 
            //setAppreals(retData);
            setInitState({
                loading: false,
                data: retData,
                error: false
            });
        }
        getApparels(); 
    }, []);

    const getApparelsFromDb = async() => {
        const res = await fetch('https://api-girlsfab.herokuapp.com/products');
        const data = await res.json();
        return data;
    }

    const products = [
        { id: 1, title: 'Product 1', price: 1234, rating: 5, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 2, title: 'Product 2', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 3, title: 'Product 3', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 4, title: 'Product 4', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 5, title: 'Product 5', price: 1234, rating: 1, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 6, title: 'Product 6', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 7, title: 'Product 7', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 8, title: 'Product 8', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 9, title: 'Product 9', price: 1234, rating: 5, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 10, title: 'Product 10', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 11, title: 'Product 11', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 12, title: 'Product 12', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 13, title: 'Product 13', price: 1234, rating: 5, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 14, title: 'Product 14', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 15, title: 'Product 15', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 16, title: 'Product 16', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 17, title: 'Product 17', price: 1234, rating: 1, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 18, title: 'Product 18', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 19, title: 'Product 19', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 20, title: 'Product 20', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 21, title: 'Product 21', price: 1234, rating: 5, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 22, title: 'Product 22', price: 1234, rating: 4, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 23, title: 'Product 23', price: 1234, rating: 3, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' },
        { id: 24, title: 'Product 24', price: 1234, rating: 2, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._AC_UL320_.jpg' }
    ];

    const maxRating = 5;

    const getRating = ratings => {
        let ratingHtml = []; 
        for(var n=1; n<=maxRating; n++){
            if(n <= ratings){
                ratingHtml.push(<i class="fa fa-star rate"></i>)
            }else{
                ratingHtml.push(<i class="fa fa-star"></i>)
            } 
        }
        return ratingHtml;
    };

    const getProductImage = images => {
        return images[0];
    }

    return (
        <>
            <div class="mobileContainer">
                <div class="special">
                    <div class="container"> 

                        { initState.loading && <div className="loaderDiv"><i className="fa fa-spinner fa-spin fa-2x"></i></div> }

                        { initState.error &&
                            <div className="blankMsg">
                                <div className="iconArea"><i className="fa fa-folder-open"></i></div>
                                <div className="text">No item found</div>
                                <div className="textSm">Try to adjusting your search and filter to find what you're looking for</div>
                            </div> 
                        }

                        { 
                            initState.data.length > 0 && <div class="specia-top">
                                <ul class="grid_2">
                                    { initState.data.map( (product, index) => ( 
                                        <div>
                                            <li>
                                                <a href={product.brand_url} rel="noopener noreferrer" target="_blank">
                                                    <div class="imgOuter"><img src={getProductImage(product.images)} class="img-fluid" alt=""/></div>
                                                    <div class="special-info grid_1">
                                                        <h5>{product.title}</h5> 
                                                        <div class="starRating">
                                                            {getRating(product.total_rating)}
                                                        </div> 
                                                        <div class="item_add clearfix">
                                                            <span class="item_price">{product.list_price}</span>
                                                            <span class="buyNowbtn">BUY NOW</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            {((index + 1) % 4) === 0 ? <><div class="clearfix"> </div> <br/></> : ''}
                                        </div>
                                    ))}  
                                    <div class="clearfix"> </div> 
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>             	 
        </>
    )
}

export default Apparel
