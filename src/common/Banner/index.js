import React from "react";
import { CenterHeading } from "../Text";
import { map } from "./titleurlMap";

function Banner({
    title
}) {
    return (
        <div className="about-banner">
            <div className="about-banner-item">
                <CenterHeading className="banner" heading={map[title]?.title} />
                {map[title]?.url}
            </div>
        </div>
    );
}

export default Banner;
