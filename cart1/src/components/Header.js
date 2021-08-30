import React from 'react';

export default function Header(props){
    return(
        <header>
            <div className="container-fluid border-dark bg-dark">
                <div className="row">
                    <div className="col-10 text-left ">
                    <a href="#" className="text-light">
                    <h1>Products</h1>
                    </a>
                    </div>
                    <div className="col-2 mt-3 ">
                    <a href="#/cart" className="ml-3 text-light">Cart</a>
                    <a href="#/signin" className="ml-3 text-light">SignIn</a>
                    </div>
                </div>
                
            </div>
            
        </header>
    );

    }