import React from "react";
import WebinarImg from "../../assets/images/webinarimg.png";
import WebinarImg1 from "../../assets/images/webinarimg1.png";
import WebinarImg0 from "../../assets/images/webinarimg0.png";
import vector from "../../assets/images/Vector.png";
import "./WebinarEvent.scss";

const Webinarpage = () => {
    return (
        <div className="webinar_div">
            <div className="stay_turned">
                <p >Stay Tuned For Upcoming Webinars</p>
                <p id="notified">Sign up for notifications</p>
            </div>
            <div class="row">
                <div class="col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3  offset-lg-4">
                    <div class="input-group mb-3 email_address">
                        <input type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="keep_btn btn btn-success" type="button">Keep Me Updated</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-sm-12 slidingImageDiv">
                        <div class="containerDiv">
                            <img src={vector} width="100%" />
                            <img src={vector} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="past_webinar mb-5">Past Webinars</div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="featured-card__component">
                            <img src={WebinarImg0} width="100%" />
                            <p class="subtitle">WEBINAR</p>
                            <div class="card-title">Long-Term ML Models in Production</div>
                            <div class="card-desc">By Harish Doddi, Co-founder &amp; CPO
                    <p className="webinar_desc">A look at the landscape of tools for building and deploying robust, production-ready machine learning models.</p>
                            </div>
                            <a href="" class="btn btn-success">Watch</a>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="featured-card__component">
                            <img src={WebinarImg} width="100%" />
                            <p class="subtitle">WEBINAR</p>
                            <div class="card-title">Talk at ODSC West 2018</div>
                            <div class="card-desc">By Harish Doddi, Co-founder &amp; CPO
                    <p className="webinar_desc">A look at the landscape of tools for building and deploying robust, production-ready machine learning models.</p>
                            </div>
                            <a href="" class="btn btn-success">Watch</a>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="featured-card__component">
                            <img src={WebinarImg1} width="100%" />
                            <p class="subtitle">WEBINAR</p>
                            <div class="card-title">Talk at Finovate Spring 2018</div>
                            <div class="card-desc">By Harish Doddi, Co-founder &amp; CPO
                    <p className="webinar_desc">A look at the landscape of tools for building and deploying robust, production-ready machine learning models.</p>
                            </div>
                            <a href="" class="btn btn-success">Watch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webinarpage