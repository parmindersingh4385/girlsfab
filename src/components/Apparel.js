import React from 'react'

function Apparel() {
    const products = [
        { id: 1, title: 'Product 1', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 2, title: 'Product 2', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 3, title: 'Product 3', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 4, title: 'Product 4', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 5, title: 'Product 5', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 6, title: 'Product 6', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 7, title: 'Product 7', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 8, title: 'Product 8', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 9, title: 'Product 9', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 10, title: 'Product 10', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 11, title: 'Product 11', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' },
        { id: 12, title: 'Product 12', price: 1234, product_url: 'https://amzn.to/2X0vOZy', image_url: 'https://m.media-amazon.com/images/I/51E9ySPmXTL.jpg' }
    ];

    return (
        <>
            <nav className="navbar fixed-top navbar-light customNav">
                <div className="container-fluid ">
                    <div className="paddingNav">
                        <div className="logoArea"><img style={{"width": "60px", "height": "58px"}} src="https://girlsfab.herokuapp.com/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="https://girlsfab.herokuapp.com/m-logo.png" className="img-fluid mobile"/></div>
                        <div className="compNam" routerLink="/home">GirlsFab</div>
                        <div className="topNav">
                            <ul>
                                <li><a routerLink="/home" routerLinkActive="active">HOME</a></li>
                                <li><a routerLink="/apparel" routerLinkActive="active">APPAREL</a></li>
                                <li><a routerLink="/shoes" routerLinkActive="active" routerLinkActive="active">SHOES</a></li>
                                <li><a routerLink="/bags" routerLinkActive="active">BAGS</a></li>
                                <li><a routerLink="/favorites" routerLinkActive="active">FAVORITES</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="mobileContainer">
                <div class="special">
                    <div class="container">                          
                        <div class="specia-top">
                            <ul class="grid_2">
                                { products.map( (product, index) => ( 
                                    <div>
                                        <li>
                                            <a href={product.purchase_url} rel="noopener noreferrer" target="_blank">
                                                <div class="imgOuter"><img style={{"width": "262px", "height": "286px"}}  src={product.image_url} class="img-fluid" alt=""/></div>
                                                <div class="special-info grid_1">
                                                    <h5>{product.title}</h5> 
                                                    <div class="starRating">
                                                        <i class="fa fa-star rate"></i> 
                                                        <i class="fa fa-star"></i>
                                                    </div> 
                                                    <div class="item_add clearfix">
                                                        <span class="item_price">&#x20B9;{product.price}</span>
                                                        <span class="buyNowbtn">BUY NOW</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {((index + 1) % 4) == 0 ? <><div class="clearfix"> </div> <br/></> : ''}
                                    </div>
                                ))}  
                                <div class="clearfix"> </div> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>             	 
        </>
    )
}

export default Apparel
