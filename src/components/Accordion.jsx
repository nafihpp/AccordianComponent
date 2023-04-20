import React, { Fragment } from "react";
import { useState } from "react";
import BackgroundImage from "../assets/image.png";

export const Accordion = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [retaincurrent, setRetainCurrent] = useState(false);
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            title: "About the website",
            description:
                "welcome to this website , nice to meet you pls visit again",
        },
        {
            id: 2,
            title: "Refund Policy",
            description:
                "welcome to this website , nice to meet you pls visit again",
        },
        {
            id: 3,
            title: "Will you visit again?",
            description:
                "welcome to this website , nice to meet you pls visit again",
        },
        {
            id: 4,
            title: "Contact us now",
            description:
                "welcome to this website , nice to meet you pls visit again",
        },
    ]);
    return (
        <Fragment>
            <div className="main-AContainer">
                <div
                    className="back-button"
                    onClick={() => window.location.replace("/")}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                    </svg>
                </div>
                <div className="backgroundImageContainer">
                    <img
                        src={BackgroundImage}
                        alt="image-1"
                        className="image"
                    />
                </div>
                <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
                    FAQ
                </h1>
                <div className="accordionContainer">
                    {faqs.map((faq) => (
                        <div className="accordian">
                            <div
                                className="accordion-tab"
                                onClick={(e) => {
                                    setCurrentTab(faq.id);
                                    if (currentTab == faq.id) {
                                        setRetainCurrent(!retaincurrent);
                                    } else {
                                        setRetainCurrent(true);
                                    }
                                }}
                            >
                                <p>{faq.title}</p>
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                    </svg>
                                </div>
                            </div>
                            {currentTab === faq.id && retaincurrent && (
                                <div className="accordion-details">
                                    <p style={{ color: "black" }}>
                                        {faq.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};
