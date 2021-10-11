import React from 'react'
import Webtopnav from './Webtopnav';

function Home() {
    return (
        <>
            {/* <Webtopnav></Webtopnav> */}

            <div class="mobileContainer">
                <div class="special">
                    <div class="container landingBanner">
                        <div class="row">
                            <div class="col-md-4"><a href="#"><img src="https://girlsfab.herokuapp.com/women_banner.jpg" class="img-fluid"/></a></div>	
                            <div class="col-md-4"><a href="#"><img src="https://girlsfab.herokuapp.com/man_banner.jpg" class="img-fluid"/></a></div>	
                            <div class="col-md-4"><a href="#"><img src="https://girlsfab.herokuapp.com/kids_banner.jpg" class="img-fluid"/></a></div>	
                        </div>					
                    </div>
                </div>
            </div>	  
        </>
    )
}

export default Home
