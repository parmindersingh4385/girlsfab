import React from 'react'

function Favorites() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light customNav">
                <div className="container-fluid ">
                    <div className="paddingNav">
                        <div className="logoArea"><img style={{"width": "60px", "height": "58px"}} src="https://girlsfab.herokuapp.com/assets/images/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="assets/images/m-logo.png" className="img-fluid mobile"/></div>
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
                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 

                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 

                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 

                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 

                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 

                            <div className="col-md-3">
                                <div className="singleGrid">
                                    <div className="favorite active"><i className="fa fa-heart"></i></div>
                                    <a href="https://amzn.to/2X0vOZy" target="_blank" rel="noreferrer">
                                        <div className="imageArea"><img style={{"width": "255px", "height": "255px"}} src="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg" className="img-fluid" alt=""/></div>
                                        <div className="name">Iphone 11 pro max</div>
                                        <div className="bottomSec">
                                            <div className="likeArea"><i className="fa fa-thumbs-up"></i> 200 Likes</div>
                                            <div className="actionBtn"><span className="buyNowbtn">BUY NOW</span></div>
                                        </div>
                                    </a>
                                </div>	 
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>	 
        </>
    )
}

export default Favorites
