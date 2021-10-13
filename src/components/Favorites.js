import React from 'react' 

function Favorites() {

    const products = [
        { id: 1, title: 'Product 1', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 2, title: 'Product 2', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 3, title: 'Product 3', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 4, title: 'Product 4', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 5, title: 'Product 5', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 6, title: 'Product 6', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 7, title: 'Product 7', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 8, title: 'Product 8', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 9, title: 'Product 9', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 10, title: 'Product 10', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 11, title: 'Product 11', product_url: 'https://amzn.to/2X0vOZy' },
        { id: 12, title: 'Product 12', product_url: 'https://amzn.to/2X0vOZy' }
    ];

    return (
        <> 
            <div className="mobileContainer">
                <div className="special">
                    <div className="container">

                        {/* <div className="loaderDiv" [ngStyle]="{'display': displayLoader}"><i className="fa fa-spinner fa-spin fa-2x"></i></div> 

                        <div className="blankMsg"  [ngStyle]="{'display': displayEmptyMessage}">
                            <div className="iconArea"><i className="fa fa-folder-open"></i></div>
                            <div className="text">No results found</div>
                            <div className="textSm">Try to adjusting your serch and filter to find what you're looking for</div>
                        </div> */}

                        <div className="row">    
                            { products.map( (product, index) => ( 
                                <div className="col-md-3">
                                    <div className="singleGrid">
                                        <div className="favorite active"><i className="fa fa-heart"></i></div>
                                        <a href={product.product_url} target="_blank" rel="noreferrer">
                                            <div className="imageArea"><img src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                            <div className="name">{product.title}</div>
                                            <div className="bottomSec">
                                                <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                                <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                            </div>
                                        </a>
                                    </div>

                                    {((index + 1) % 4) === 0 ? <><div class="clearfix"> </div> <br/></> : ''}
                                   	 
                                </div>
                            ))}                               
                        </div> 
                    </div>
                </div>
            </div>	 
        </>
    )
}

export default Favorites