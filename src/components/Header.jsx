import React from "react";
import ViewMyWorkBtn from "./ViewMyWorkBtn";
import HeaderImg from "../assets/images/avatar.jpg";

function Header(){
    return (
        <header className="pt-5" id="header">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                        <h3 className="text-secondary fw-bold lh-1">Girija.</h3>
                        <h1 className="text-capitalize text-start text-primary lh-1 mb-5">
                            Front End <br /> web devloper
                        </h1>
                        <ViewMyWorkBtn />
                        
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                            <img className="img-fluid w-75 rounded-circle shadow my-5" src={HeaderImg} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;