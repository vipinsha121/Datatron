import React, { useEffect, useState } from "react";
import { IndustryHeader } from "../../components/reusable/Solutions";
import { RequestDemo } from "../../components/reusable/RequestDemo";
import "./WebinarEvent.scss";
import Event from '../WhitePapers/Eventnewpage'
import Webinarpage from '../WhitePapers/Webinarnewpage'

const WebinarEvent = () => {

    const [isWebinarTab, setIsWebinarTab] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="resources-wrapper">

            <IndustryHeader

                type="Webinars & Events"
                description="Join Datatron experts to explore our product, features and more"
            />
            <div className="dt_resources-container">
                <div class="webinar_btn">
                    <button class={isWebinarTab ? "active" : ""}
                        onClick={() => setIsWebinarTab(true)}
                    >Webinars</button>
                    <button class={!isWebinarTab ? "active" : ""}
                        onClick={() => setIsWebinarTab(false)}
                    >Events</button>

                </div>
                {isWebinarTab ? <Webinarpage /> : <Event isUpCommingEvent={true} />}

                <RequestDemo />
            </div>

        </div>
    );
};

export default WebinarEvent;
