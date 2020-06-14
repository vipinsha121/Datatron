import React from "react";
import vector from "../../assets/images/Vector.png";
import PastEventImg from "../../assets/images/pastevent1.png";
import PastEventImg1 from "../../assets/images/pasteventimg5.png";
import PastEventImg2 from "../../assets/images/pastevent2.png";
import PastEventImg3 from "../../assets/images/pastevent3.png";
import PastEventImg4 from "../../assets/images/pasteventimg4.png";
import PastEventImg5 from "../../assets/images/pasteventimg5.png";
import PastEventImg6 from "../../assets/images/pasteventimg6.png";
import PastEventImg7 from "../../assets/images/pasteventimg7.png";
import PastEventImg8 from "../../assets/images/pasteventimg8.png";
import PastEventImg9 from "../../assets/images/pasteventimg9.png";
import CubeConImg from "../../assets/images/cubeconimg.PNG";
import UpcomingEventImg from "../../assets/images/oreillystrata.png";
import "./WebinarEvent.scss";


const Event = ({ isUpCommingEvent }) => {
    return (
        <div className="event_div" id="event">
            {
                !isUpCommingEvent ?
                    (
                        <div>
                            <div className="stay_turned">
                                <p >Stay Tuned For Upcoming Events</p>
                                <p id="notified">Get notified for upcoming webinars</p>
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
                        </div>
                    ) :
                    (<div>
                        <div className="stay_turned">
                            <p >Upcoming Events</p>
                            <div class="container  mt-5">
                                <div class="row">
                                    <div class="col-md-6 ">
                                        <div class="featured-card__component UpcomingEvent">
                                            <img src={UpcomingEventImg} width="100%" />
                                            <p class="subtitle">CONFERENCE</p>
                                            <div class="card-title">Oreilly Strata Data &amp; AI Conference 2020</div>
                                            <div class="card-desc mt-0">
                                                <p class="date">Sep 14-17, 2020</p>
                                                <p class="address">New York, NY</p>
                                                <div className="event_tags_calc">
                                                    <p class="tags_calc">iCal </p>
                                                    <p class="tags_calc">Outlook </p>
                                                    <p class="tags_calc">Google Calendar</p>
                                                </div>
                                            </div>
                                            <a href="" class="btn btn-success">Know More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>)
            }

            <div className="past_event mb-5">Past Events</div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg} width="100%" />
                            <p class="subtitle">CONFERENCE</p>

                            <div class="event_pastdate">Money 20/20 2019</div>

                        </div>
                    </div>

                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg2} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">Strata NY 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={CubeConImg} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">New Japan Summit 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg5} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">Strata SF 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg6} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">Emerging AI Pioneer Showcase 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg3} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">Strata London 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg5} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">Strata SF 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg4} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">ODSC 2019</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg4} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">STRATA NY 2018....</div>

                        </div>
                    </div>

                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg8} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">DataEngConf SF 2018</div>

                        </div>
                    </div>

                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg8} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">STRATA SF 2018....</div>

                        </div>
                    </div>

                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg7} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">RedisConf 2018</div>

                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="featured-card__component">
                            <img src={PastEventImg9} width="100%" />
                            <p class="subtitle">CONFERENCE</p>
                            <div class="event_pastdate">500 Startups Batch 18 Demo Ween Day</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Event
