import React from "react";
import {toAbsoluteUrl} from "../helpers/helpers";

const Content = () => {

    return (
        <>
            <div id="bodyconstraint" className="   ">
                <div id="bodyconstraint-inner">
                    <div className="lp_flexible_layout_content_wrapper">
                        <div data-block-id="header_survey">
                        </div>
                        <svg className="bk-icon -genius-new_identity-genius_badge" style=
                            {{
                                display:"none",
                                height:"74px"
                        }}
                             width="434" viewBox="0 0 434 174" role="presentation" aria-hidden="true" focusable="false">
                            <g>
                                <path
                                    d="M418.964 0H14.6335C6.65829 0 0.193115 6.46518 0.193115 14.4404V158.844C0.193115 166.819 6.65829 173.285 14.6335 173.285H418.964C426.939 173.285 433.404 166.819 433.404 158.844V14.4404C433.404 6.46518 426.939 0 418.964 0Z"
                                    fill="#004CB8"></path>
                                <path
                                    d="M375.643 112.057C375.651 112.911 375.418 113.75 374.971 114.478C374.524 115.206 373.881 115.793 373.116 116.173C371.061 117.213 368.774 117.71 366.473 117.617C363.367 117.862 360.262 117.13 357.592 115.523C355.323 114.154 353.571 112.072 352.611 109.602C352.551 109.35 352.431 109.116 352.26 108.921C352.09 108.726 351.874 108.575 351.632 108.483C351.39 108.39 351.129 108.358 350.871 108.39C350.614 108.421 350.368 108.515 350.156 108.664L341.13 112.635C340.869 112.706 340.627 112.837 340.425 113.019C340.223 113.2 340.067 113.426 339.969 113.679C339.87 113.932 339.833 114.205 339.859 114.475C339.885 114.745 339.975 115.005 340.12 115.234C342.038 119.7 345.325 123.441 349.506 125.92C354.638 128.933 360.527 130.412 366.473 130.18C372.448 130.368 378.324 128.621 383.224 125.198C385.473 123.727 387.315 121.711 388.577 119.338C389.839 116.965 390.481 114.312 390.444 111.624C390.444 101.997 383.657 96.1488 370.083 94.079C366.842 93.6288 363.696 92.6533 360.769 91.1909C358.603 90.1801 356.148 88.8082 356.148 87.2198C356.194 86.4783 356.458 85.7669 356.908 85.1757C357.358 84.5845 357.973 84.14 358.676 83.8985C360.848 83.0046 363.187 82.5861 365.535 82.6711C367.779 82.6622 370.001 83.1271 372.054 84.0353C374.107 84.9435 375.945 86.2747 377.448 87.9418C377.63 88.1318 377.849 88.283 378.09 88.3863C378.332 88.4896 378.593 88.5429 378.856 88.5429C379.119 88.5429 379.379 88.4896 379.621 88.3863C379.863 88.283 380.082 88.1318 380.264 87.9418L386.69 82.1657C386.936 82.0362 387.148 81.8492 387.307 81.6204C387.466 81.3917 387.568 81.128 387.603 80.8517C387.639 80.5754 387.607 80.2946 387.511 80.0331C387.415 79.7717 387.257 79.5373 387.051 79.3498C382.053 74.4653 375.569 71.3872 368.625 70.6026C361.681 69.8179 354.673 71.3716 348.712 75.0177C346.74 76.4007 345.146 78.2548 344.074 80.4112C343.002 82.5675 342.487 84.9577 342.574 87.3642C342.567 89.4267 343.001 91.4669 343.848 93.3475C344.695 95.2281 345.935 96.9054 347.484 98.2667C351.292 101.398 355.888 103.422 360.769 104.115C364.771 104.676 368.681 105.769 372.394 107.364C373.334 107.744 374.143 108.391 374.72 109.225C375.297 110.059 375.618 111.043 375.643 112.057Z"
                                    fill="white"></path>
                                <path
                                    d="M282.575 107.509C282.412 110.486 282.839 113.467 283.83 116.279C284.821 119.092 286.358 121.681 288.351 123.899C290.419 125.929 292.885 127.51 295.594 128.541C298.303 129.573 301.196 130.032 304.091 129.891C306.536 129.936 308.973 129.595 311.311 128.881C313.006 128.39 314.631 127.686 316.149 126.787C317.577 125.778 318.951 124.693 320.264 123.538L321.636 126.859C321.861 127.389 322.248 127.834 322.74 128.132C323.232 128.43 323.806 128.566 324.38 128.52H333.766C334.021 128.556 334.281 128.532 334.525 128.451C334.769 128.369 334.991 128.232 335.173 128.05C335.355 127.868 335.493 127.646 335.574 127.401C335.656 127.157 335.679 126.897 335.643 126.642V73.7906C335.635 73.5591 335.579 73.3319 335.478 73.1236C335.377 72.9152 335.233 72.7303 335.056 72.5807C334.879 72.4312 334.673 72.3202 334.451 72.255C334.229 72.1898 333.996 72.1718 333.766 72.2021H321.853C321.598 72.166 321.338 72.1897 321.094 72.2712C320.849 72.3528 320.627 72.49 320.445 72.6721C320.263 72.8542 320.126 73.0761 320.044 73.3203C319.963 73.5646 319.939 73.8244 319.975 74.0794V110.18C318.697 112.152 316.942 113.768 314.871 114.879C312.801 115.99 310.484 116.559 308.134 116.534C306.791 116.632 305.442 116.423 304.191 115.922C302.94 115.422 301.82 114.644 300.914 113.646C299.138 111.504 298.235 108.771 298.387 105.993V73.7906C298.387 72.5631 297.665 71.9133 296.365 71.9133H284.596C283.297 71.9133 282.575 72.5631 282.575 73.7906V107.509Z"
                                    fill="white"></path>
                                <path
                                    d="M253.983 54.1515C253.968 55.5821 254.25 57.0002 254.809 58.3172C255.368 59.6341 256.193 60.8214 257.232 61.8049C259.299 63.8464 262.088 64.9912 264.993 64.9912C267.899 64.9912 270.688 63.8464 272.755 61.8049C273.786 60.8145 274.606 59.6261 275.166 58.3109C275.726 56.9958 276.015 55.581 276.015 54.1515C276.015 52.722 275.726 51.3073 275.166 49.9921C274.606 48.677 273.786 47.4885 272.755 46.4981C270.688 44.4566 267.899 43.3119 264.993 43.3119C262.088 43.3119 259.299 44.4566 257.232 46.4981C256.193 47.4816 255.368 48.669 254.809 49.9859C254.25 51.3028 253.968 52.7209 253.983 54.1515Z"
                                    fill="#FEBB02"></path>
                                <path
                                    d="M247.413 90.7576C247.576 88.0348 247.187 85.307 246.269 82.7384C245.351 80.1699 243.922 77.8137 242.07 75.8118C239.996 73.9613 237.574 72.5422 234.946 71.6373C232.318 70.7324 229.536 70.3597 226.763 70.5411C220.636 70.5809 214.743 72.897 210.229 77.0393L208.64 73.7902C208.475 73.2445 208.126 72.7731 207.652 72.4569C207.177 72.1408 206.608 71.9995 206.041 72.0573H196.366C195.066 72.0573 194.344 72.6349 194.344 73.8624V126.714C194.344 127.942 195.066 128.591 196.366 128.591H208.207C209.507 128.591 210.229 127.942 210.229 126.714V90.6132C211.612 88.8509 213.33 87.3788 215.283 86.2811C217.277 85.0359 219.574 84.3617 221.925 84.3316C228.423 84.3316 231.745 87.7973 231.745 94.8009V126.714C231.745 127.212 231.942 127.69 232.295 128.042C232.647 128.394 233.124 128.591 233.622 128.591H245.68C246.178 128.591 246.655 128.394 247.007 128.042C247.359 127.69 247.557 127.212 247.557 126.714L247.413 90.7576Z"
                                    fill="white"></path>
                                <path
                                    d="M187.268 102.527C187.268 103.826 186.691 104.404 185.391 104.404H144.597C145.345 107.742 147.142 110.752 149.723 112.996C152.483 115.254 155.981 116.412 159.543 116.245C161.98 116.337 164.397 115.785 166.552 114.644C168.707 113.503 170.523 111.814 171.817 109.747C172.25 109.025 173.045 108.953 174.055 109.747L184.236 113.935C185.391 114.368 185.68 115.018 185.03 116.029C182.534 120.559 178.83 124.307 174.33 126.857C169.831 129.406 164.711 130.657 159.543 130.469C151.507 130.607 143.735 127.602 137.882 122.094C134.918 119.341 132.584 115.98 131.038 112.242C129.493 108.503 128.774 104.475 128.929 100.433C128.765 96.3962 129.473 92.3715 131.005 88.6333C132.538 84.8952 134.859 81.5317 137.81 78.7724C140.626 76.0576 143.952 73.9264 147.595 72.5015C151.238 71.0765 155.127 70.3858 159.037 70.4692C162.9 70.2694 166.761 70.8864 170.369 72.2798C173.977 73.6732 177.25 75.8117 179.976 78.5558C184.948 84.1113 187.541 91.3968 187.196 98.8446L187.268 102.527ZM167.702 86.6424C165.206 84.7434 162.173 83.682 159.037 83.61C155.941 83.4943 152.894 84.4084 150.373 86.2092C148.049 87.9161 146.288 90.2799 145.319 92.9962H172.539C171.782 90.3459 170.055 88.0777 167.702 86.6424Z"
                                    fill="white"></path>
                                <path
                                    d="M122.936 116.823C122.929 117.364 122.802 117.897 122.565 118.384C122.328 118.87 121.986 119.299 121.565 119.638C112.67 126.472 101.733 130.109 90.5177 129.963C78.5996 130.454 66.9709 126.213 58.1662 118.166C49.3615 110.119 44.0949 98.9172 43.5143 87.0032C44.1137 75.0649 49.3736 63.8383 58.1632 55.7373C66.9528 47.6363 78.5702 43.3077 90.5177 43.6821C101.588 43.6164 112.362 47.2503 121.131 54.0069C121.497 54.318 121.729 54.7572 121.781 55.2344C121.822 55.481 121.804 55.7338 121.729 55.9722C121.653 56.2105 121.523 56.4278 121.348 56.6062L112.756 66.4979C112.394 66.838 111.917 67.0274 111.42 67.0274C110.924 67.0274 110.446 66.838 110.084 66.4979C104.621 61.8534 97.6885 59.2953 90.5177 59.2777C83.1063 59.1579 75.9408 61.9357 70.5467 67.0197C65.1526 72.1037 61.9558 79.0923 61.637 86.4978C61.9931 93.8334 65.223 100.734 70.6278 105.706C76.0327 110.679 83.1779 113.323 90.5177 113.068C96.4716 113.09 102.308 111.412 107.341 108.231V96.8227H93.5502C93.3104 96.833 93.071 96.7935 92.8473 96.7065C92.6236 96.6195 92.4204 96.4869 92.2506 96.3173C92.0713 96.151 91.9277 95.9501 91.8284 95.7267C91.7291 95.5033 91.6762 95.2621 91.6729 95.0176V83.4653C91.6949 82.9748 91.9012 82.5107 92.2506 82.1657C92.6133 81.8537 93.072 81.6753 93.5502 81.6603H120.698C121.184 81.6599 121.651 81.8478 122.001 82.1843C122.351 82.5209 122.557 82.9801 122.575 83.4653L122.936 116.823Z"
                                    fill="white"></path>
                                <path
                                    d="M264.597 72.2018H258.604C258.106 72.2018 257.629 72.3995 257.276 72.7516C256.924 73.1037 256.727 73.5811 256.727 74.079V127.075C256.727 127.573 256.924 128.051 257.276 128.403C257.629 128.755 258.106 128.952 258.604 128.952H271.384C271.882 128.952 272.359 128.755 272.711 128.403C273.063 128.051 273.261 127.573 273.261 127.075V80.866C273.446 79.686 273.35 78.4789 272.98 77.3432C272.61 76.2075 271.977 75.1753 271.132 74.3307C270.287 73.4861 269.255 72.853 268.119 72.4831C266.984 72.1131 265.777 72.0167 264.597 72.2018Z"
                                    fill="white"></path>
                            </g>
                        </svg>
                        <svg className="bk-icon -streamline-square_rating" style=  {{
                            display:"none",
                            height:"128px"
                        }}
                             width="112" viewBox="0 0 112 128" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8zM56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path>
                        </svg>
                        <svg className="bk-icon -streamline-circle" height="24" style=  {{
                            display:"none"
                        }} width="24"
                             viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                            <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                        </svg>
                        <svg className="bk-icon -streamline-circle_half" height="128" style={{display:"none"}} width="128"
                             viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M64 0C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64zm0 120V8c30.928 0 56 25.072 56 56s-25.072 56-56 56z"></path>
                        </svg>
                        <svg className="bk-icon -streamline-star" height="24" style={{display:"none"}} width="24"
                             viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
                        </svg>
                        <svg className="bk-icon -streamline-star_half" height="128" style={{display:"none"}} width="128"
                             viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M126.76 45.92a11.75 11.75 0 0 0-10.93-7.6H85.77L74.93 7.58A11.67 11.67 0 0 0 64 0h-.82c-.23 0-.45 0-.68.07-.23.07-.28 0-.42.06l-.72.15L61 .4c-.36.1-.71.21-1.07.34a11.65 11.65 0 0 0-6.83 6.84L42.25 38.31H12.18a11.67 11.67 0 0 0-11.13 8.18A11.39 11.39 0 0 0 .52 50a11.65 11.65 0 0 0 4.19 9l25.71 21.24-10.81 32.41c-2.024 6.113 1.282 12.711 7.39 14.75.4.13.81.23 1.21.32l.31.06c.39.082.783.139 1.18.17h1.59c.388-.017.776-.054 1.16-.11h.06a9.704 9.704 0 0 0 1.18-.26l.31-.08c.383-.114.76-.247 1.13-.4q.55-.24 1.11-.54l.26-.15c.365-.208.719-.435 1.06-.68L64 106.35l26.43 19.38a11.563 11.563 0 0 0 6.88 2.27c.596.001 1.19-.042 1.78-.13 6.367-.967 10.744-6.911 9.778-13.278-.1-.659-.257-1.309-.468-1.942L97.59 80.22l25.8-21.39a11.7 11.7 0 0 0 3.37-12.91zm-8.52 6.79l-26.52 22a6.59 6.59 0 0 0-2 7.11l11.12 33.37a3.66 3.66 0 0 1-2.95 4.81 3.578 3.578 0 0 1-2.72-.68l-27.29-20-.14-.08a6.781 6.781 0 0 0-.76-.47c-.16-.08-.33-.14-.49-.21-.16-.07-.3-.13-.46-.18-.16-.05-.39-.1-.58-.15L64.06 8a3.61 3.61 0 0 1 3.35 2.3l11.15 31.63a6.58 6.58 0 0 0 6.19 4.38h31.07a3.7 3.7 0 0 1 3.44 2.39 3.66 3.66 0 0 1-1.02 4.01z"></path>
                        </svg>
                        <div data-capla-component="b-index-lp-web-mfe/GeniusSignInSheet"
                             data-capla-namespace="b-index-lp-web-mfeNAcFEQNe"></div>
                        <div data-capla-component="b-index-lp-web-mfe/GlobalAlerts"
                             data-capla-namespace="b-index-lp-web-mfeNAcFEQNe"></div>
                        <div data-capla-component="b-index-lp-web-mfe/empty"
                             data-capla-namespace="b-index-lp-web-mfeNAcFEQNe"></div>
                        <div
                            data-et-view=" customGoal:cCHObXKeNJAbINFPIWBccCcCcCC:1 cCHObXKeNJAbINFPIWBccCcCcCC:1  cCHObXKeNJAbINFPIWBccCcCcCC:3   cCHObXKeNJAbINFPIWBccCcCcCC:5   "></div>
                        <div id="basiclayout" role="main" className="basiclayout_pe">
                            <div data-component="genius-vip/tracking" data-capla-project-name="index-lp"
                                 data-service-name="web-mfe" data-tracking-enabled="1">
                                <div data-capla-component="b-index-lp-web-mfe/GeniusVipCampaignsIndexBanner"
                                     data-capla-namespace="b-index-lp-web-mfeNAcFEQNe"></div>
                            </div>
                            <div className="promo-section"
                                 data-et-view="BHDTJdReQLOLOLOVZMYCVCMILRVVPKLZZOJNET:2 BHDTJdReQLOLOLOVZMYCVCMILRVVPKLZZOJNET:4 BHDTJdReQLOLOLOVZMYCVCMILRVVPKLZZOJNET:7 dLYdCeYBFVedKNKNKPMPSXPUEKdDXFZMIbdYeNYT:2 dLYdCeYBFVedKNKNKPMPSXPUEKdDXFZMIbdYeNYT:4 dLYdCeYBFVedKNKNKPMPSXPUEKdDXFZMIbdYeNYT:5 dLYdCeYBFVedKNKNKPMPSXPUEKdDXFZMIbdYeNYT:8 ">
                                <div data-capla-component="b-index-lp-web-mfe/SecondaryBannerDesktop"
                                     data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                    <div>
                                        <div className="b3d1cacd40 b5ea5312ab a2cb913cd1">
                                            <div className="e1f827110f f0d4d6a2f5 fda3b74d0d">Offers</div>
                                            <div className="a0c113411d c90c0a70d3 a34d1a4138">Promotions, deals and
                                                special offers for you
                                            </div>
                                        </div>
                                        <div className="eed77b0fbd"
                                             data-testid="secondary-banner-banners-carousel-test-id">
                                            <div role="region" className="d4f3be4ddb c20066415a dba326cf56" style={{
                                                padding: "20px"
                                            }}>
                                                <ul className="fff8c74b55 cb9e386163" id=":R16:"
                                                    aria-atomic="false">
                                                    <li className="d5fc932504 ebb6d69bfc">
                                                        <div>
                                                            <div
                                                                style={{
                                                                    padding: "20px"
                                                                }}
                                                                data-testid="secondary-banner-container"
                                                                 className="a826ba81c4 fd3e860f04 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 a30d591987 e61f37fbcf"
                                                                 >
                                                                <div className="a826ba81c4 c41f5609d3"
                                                                     >
                                                                    <div className="bc13fe32ea c12dca8175">
                                                                        <div
                                                                            data-testid="secondary-banner-content-area-title"
                                                                            className="ac78a73c96 b72e8b2535">Take your
                                                                            longest holiday yet
                                                                        </div>
                                                                        <div
                                                                            data-testid="secondary-banner-content-area-subtitile"
                                                                            className="a0c113411d abdaa1198b">Browse
                                                                            properties offering long-term stays, many at
                                                                            reduced monthly rates.
                                                                        </div>
                                                                        <div className="ac5f0733f6"><a
                                                                            aria-label="Find a stay"
                                                                            data-testid="secondary-banner-call-to-action"
                                                                            className="fc63351294 a822bdf511 d4b6b7a9e7 f7db01295e c334e6f658 f4605622ad b80809d745"><span
                                                                            className="e57ffa4eb5">Find a stay</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b57a31be63">
                                                                    <picture
                                                                        data-testid="secondary-banner-partial-image"
                                                                        className="e4e8d3238b">
                                                                        <img
                                                                            className="c3194e6c89 e5eb7fb6cb c1874b9d0e cbd86e1136"
                                                                            src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&amp;o="
                                                                            alt="Take your longest holiday yet"
                                                                            loading="lazy"/></picture>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d5fc932504 ebb6d69bfc">
                                                        <div>
                                                            <div data-testid="secondary-banner-container"
                                                                 className="a826ba81c4 fd3e860f04 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 a30d591987 e61f37fbcf"
                                                                 >
                                                                <div className="eaac94b990"
                                                                     data-testid="secondary-banner-full-bleed-image">
                                                                    <picture className="e4e8d3238b"
                                                                    >
                                                                        <img
                                                                            className="c3194e6c89 e5eb7fb6cb c1874b9d0e cbd86e1136"
                                                                            src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&amp;o="
                                                                            alt="A family of three, sitting on the beach and laughing"
                                                                            loading="lazy"/></picture>
                                                                </div>
                                                                <div className="a826ba81c4 a8e78d0355"
                                                                     >
                                                                    <div className="bc13fe32ea e8c7f1111d">
                                                                        <div
                                                                            data-testid="secondary-banner-content-area-title"
                                                                            className="ac78a73c96 b72e8b2535">The great
                                                                            getaway, your way
                                                                        </div>
                                                                        <div
                                                                            data-testid="secondary-banner-content-area-subtitile"
                                                                            className="a0c113411d abdaa1198b">Save at
                                                                            least 15% on stays worldwide, from relaxing
                                                                            retreats to off-grid adventures
                                                                        </div>
                                                                        <div className="ac5f0733f6"><a
                                                                            aria-label="Find Getaway Deals"
                                                                            data-testid="secondary-banner-call-to-action"
                                                                            className="fc63351294 a822bdf511 d4b6b7a9e7 f7db01295e c334e6f658 f4605622ad b80809d745"><span
                                                                            className="e57ffa4eb5">Find Getaway Deals</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="ec293799a8">
                                                    <button aria-label="Previous" aria-controls=":R16:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                    </button>
                                                    <button aria-label="Next" aria-controls=":R16:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="df1462f7a4" data-testid="indicator-container-test-id">
                                                <div className="af56e0bebb e8bea002d3">
                                                    <div className="dc724f4c8f" role="progressbar">
                                                        <div className="fd61d703c9 cb41d4a61a"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-et-view=" cCGaYSdMbYSfcdReLbFZVGAZbaTaTaET:1  cCGaYSdMbYSfcdReLbFZVGAZbaTaTaET:2    cCGaYSdMbYSfcdReLbFZVGAZbaTaTaET:6   "></div>
                            <div
                                data-et-view=" cCHObARLOBADEGaadHKKAGMcCcCcCC:1 cCHObTULHfAFFQZcVIZdRJcCcCcCC:2 cCHObTULHfAFFQZccWRBcCcCcCC:1 cCHObONdPbIZFbYSfDcfFdHMbNXGDJdLOLOLMO:1  cCHObTULHfAFFQZcVIZdRJcCcCcCC:3   cCHObIULDcFUHZESEETWBZEWaSddKNKNKWe:2  cCHObIULDcFUHZESEETWBZEWaSddKNKNKWe:4   cCHObIULDcFUHZESEETWBZEWaSddKNKNKWe:6     aXbSbcfFdHMTcZJFOHHAAHdZGaZaTaTaET:1 aXbSbcfFdHMTcZJFOHHAAHdZGaZaTaTaET:2      cCcCcCJXCSbcfFdHMTcZJFOHHAVKSYJdUDEYIKe:1  cCcCcCJXCSbcfFdHMTcZJFOHHAVKSYJdUDEYIKe:3     "></div>
                            <div
                                data-et-view=" cCGaYSddOEGcHNAdUDUCRPQFAeJQFRURURNcHe:1     cCGaYSddOEGcHNAdUDUCRPQFAeJQFRURURNcHe:5   "></div>
                            <div data-et-view="cCHObOOYKYYaDcOdJeaILYDdKNKNKWe:2"></div>
                            <div data-et-view="cCHObOFfdJMYEEFRURURHe:1"></div>
                            <div data-capla-component="b-index-lp-web-mfe/MerchCarousel/DomesticDestinationsWww"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div>
                                    <div data-qmab-component-id="27" data-testid="merch-carousel" role="none">
                                        <div className="b22f788b4e">
                                            <div>
                                                <div className="f05428a2f1">
                                                    <div
                                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 e187349485 d19ba76520">
                                                        <div className="b1e6dd8416 aacd9d0b0a">
                                                            <div className="b3d1cacd40 a2cb913cd1">
                                                                <div data-testid="webcore-carousel-heading"
                                                                     className="e1f827110f f0d4d6a2f5 fda3b74d0d">Explore
                                                                    Nigeria
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-heading"
                                                                     className="a0c113411d c90c0a70d3 a34d1a4138">These
                                                                    popular destinations have a lot to offer
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="webcore-carousel" role="region"
                                                     className="d4f3be4ddb cbe6ba4fde cb7e63f7dd">
                                                    <ul className="fff8c74b55 cb9e386163" id=":r4:"
                                                        aria-atomic="false">
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >   <img className="c3194e6c89 e5eb7fb6cb"
                                                                              src={toAbsoluteUrl(`/assets/img/abuja.jpg`)}
                                                                              role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Abuja
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">222
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/lagos.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">

                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Ikeja
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">100
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/lagos-2.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Lagos
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">573
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/ibadan.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Ibadan
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">45
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/lekki.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Lekki
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">68
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/kano.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Kano
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">8
                                                                        properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                    </ul>
                                                    <div className="ec293799a8" style={{top:" 78.0667px"}}>
                                                        <button aria-label="Previous" aria-controls=":r4:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                        </button>
                                                        <button aria-label="Next" aria-controls=":r4:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-qmab-component-id="1">
                                <div data-capla-component="b-index-lp-web-mfe/DestinationPostcardsDesktop"
                                     data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                    <div>
                                        <div className="fb0e8491f2" data-testid="destination-postcards-title">
                                            <div className="b3d1cacd40 a2cb913cd1">
                                                <div className="e1f827110f f0d4d6a2f5 fda3b74d0d">Trending
                                                    destinations
                                                </div>
                                                <div className="a0c113411d c90c0a70d3 a34d1a4138">Most popular choices
                                                    for travellers from Nigeria
                                                </div>
                                            </div>
                                        </div>
                                        <div className="f395e522bd" data-testid="destination-postcards-firstrow"
                                             role="none"><a
                                            href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaKcBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKG2pekBsACAdICJGU2MjlhOWY1LTE4ZTAtNDgxZS1iN2QyLWZjODVjYWRhNGVmY9gCBeACAQ&amp;sid=634bd0a5312f162966862137b218ae8e&amp;aid=304142&amp;dest_id=-2017355&amp;dest_type=city&amp;group_adults=2&amp;req_adults=2&amp;no_rooms=1&amp;group_children=0&amp;req_children=0"
                                            className="fc63351294 d412802652">
                                            <div

                                                className="d57f52f47d">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <div className="d65598d5f9"
                                                             data-testid="destination-postcard--2017355">
                                                            <div
                                                                className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                <div className="e1f827110f">Lagos</div>
                                                                <picture className="e4e8d3238b fb913c0ee7"
                                                                         >
                                                                    <img
                                                                    className="c3194e6c89 e5eb7fb6cb c1874b9d0e"
                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAY1BMVEX///8AAAAAAAAAAAAAAAD////t7e2NwqSGvp58uZV2tpFws41ssYljrIFTo3VMnnBInGxFnGlAl2Y8k2E3k14xjVkpjFQjiU4ohlAfhksZhEcXg0Udf0cSgEEYfUMQfz8SeD0YtJW+AAAABXRSTlMAESIzRJTdRHwAAACJSURBVBgZdcFBbgJBEATBrBxrj/j/74NHICEzqJu+eTdCLsgFuSA5hfm9tZ9x+4rZz8Z4NiLJKoxVApJYGJYEiSmMFIPEFEaKQZJVGKskSFyFsYpBOBrjaEFWGiNfyCmR2Bi2IAsLw8JCDP9ERF6F8SqIcLSMo4H7/mjv8Wj37X7/nXhv2aeQCx+IvV0x54NiPAAAAABJRU5ErkJggg=="
                                                                    role="presentation" loading="lazy"/></picture>
                                                            </div>
                                                        </div>
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&amp;o="
                                                            role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </a><a
                                            href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaKcBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKG2pekBsACAdICJGU2MjlhOWY1LTE4ZTAtNDgxZS1iN2QyLWZjODVjYWRhNGVmY9gCBeACAQ&amp;sid=634bd0a5312f162966862137b218ae8e&amp;aid=304142&amp;dest_id=-1997013&amp;dest_type=city&amp;group_adults=2&amp;req_adults=2&amp;no_rooms=1&amp;group_children=0&amp;req_children=0"
                                            className="fc63351294 d412802652">
                                            <div

                                                className="d57f52f47d">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <div className="d65598d5f9"
                                                             data-testid="destination-postcard--1997013">
                                                            <div
                                                                className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                <div className="e1f827110f">Abuja</div>
                                                                <picture className="e4e8d3238b fb913c0ee7"
                                                                         >  <img className="c3194e6c89 e5eb7fb6cb"
                                                                                 src={toAbsoluteUrl(`../../public/assets/img/abuja.jpg`)}
                                                                                 role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"/></picture>
                                                            </div>
                                                        </div>
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://cf.bstatic.com/xdata/images/city/600x600/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&amp;o="
                                                            role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                        <div className="f395e522bd af0c2122fa"
                                             data-testid="destination-postcards-secondrow"><a
                                            href="#"
                                            className="fc63351294 d412802652">
                                            <div
                                                className="d57f52f47d">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <div className="d65598d5f9"
                                                             data-testid="destination-postcard--2011499">
                                                            <div
                                                                className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                <div className="e1f827110f">Ikeja</div>
                                                                <picture className="e4e8d3238b fb913c0ee7"
                                                                         ><img
                                                                    className="c3194e6c89 e5eb7fb6cb c1874b9d0e"
                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAY1BMVEX///8AAAAAAAAAAAAAAAD////t7e2NwqSGvp58uZV2tpFws41ssYljrIFTo3VMnnBInGxFnGlAl2Y8k2E3k14xjVkpjFQjiU4ohlAfhksZhEcXg0Udf0cSgEEYfUMQfz8SeD0YtJW+AAAABXRSTlMAESIzRJTdRHwAAACJSURBVBgZdcFBbgJBEATBrBxrj/j/74NHICEzqJu+eTdCLsgFuSA5hfm9tZ9x+4rZz8Z4NiLJKoxVApJYGJYEiSmMFIPEFEaKQZJVGKskSFyFsYpBOBrjaEFWGiNfyCmR2Bi2IAsLw8JCDP9ERF6F8SqIcLSMo4H7/mjv8Wj37X7/nXhv2aeQCx+IvV0x54NiPAAAAABJRU5ErkJggg=="
                                                                    role="presentation" loading="lazy"/></picture>
                                                            </div>
                                                        </div>
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://cf.bstatic.com/xdata/images/city/600x600/815261.jpg?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&amp;o="
                                                            role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </a><a
                                            href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaKcBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKG2pekBsACAdICJGU2MjlhOWY1LTE4ZTAtNDgxZS1iN2QyLWZjODVjYWRhNGVmY9gCBeACAQ&amp;sid=634bd0a5312f162966862137b218ae8e&amp;aid=304142&amp;dest_id=-2601889&amp;dest_type=city&amp;group_adults=2&amp;req_adults=2&amp;no_rooms=1&amp;group_children=0&amp;req_children=0"
                                            className="fc63351294 d412802652">
                                            <div

                                                className="d57f52f47d">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <div className="d65598d5f9"
                                                             data-testid="destination-postcard--2601889">
                                                            <div
                                                                className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                <div className="e1f827110f">London</div>
                                                                <picture className="e4e8d3238b fb913c0ee7"
                                                                         ><img
                                                                    className="c3194e6c89 e5eb7fb6cb c1874b9d0e"
                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABd1BMVEX///8AAAAAAAAAAAAAAAD////4////+fj2+Pz/9fLx9fnv9vzt8PXt7u776evo7PXo6+//5eX65ebj5fDg4+f73N7b4e741NfU1+j2zND3x8rN0OT2xMjmws30vsP0uL2/wtzstb25vdjyrrPZs8PwqrDJs8mzttTvpayvrs7wnKO7qMPVn7DfnaSjqM2vosOgpcvrkJDvjJObnr/piJOamsPwhIqYmMDngYyPlMLne3vpeYO4hKHueIHQfpPZeouJibSGirrnc3yrgJvYdn+EiLjmcHDob3qae6TLbILkZnLkZWWGeqrjXWpyd615c6JycqXlVmJrc63hV1dtbabgUVFra5/lSVbfSkpgZaNjY51ZYKNbW5boOUTVPkvdPEzjO0ncPDxZWZpRWp7WOTnlMT/aMDDOMD9NTY1CQo7XICBCQoXWGRk6OoM6On/HFxgpNIEeKYIZJH8hIWwYGWsOGHUXF2UREWYREXAPD2wNDGgHBmUGBlziP6OmAAAABXRSTlMAESIzRJTdRHwAAAFFSURBVHjardHbNwJBAMfx3c1oWkUqFaWIlJBa93K/5BJZ0lpsbiVbW0LLZuwfb5ZTL+XBOb4v8zvzeZiHIf4zsm34Pghc90WcBDMZKGkrN7E7SxJUfERPh9dxMBqF2hkeDPUDiqB2hpk+EGBZFsZikGVT40HGAuYwSEuj817gPONgIgG50zEmpDcuSBgq3MX0ImOwCjCZhMLkigcMXXLfIIiib8ADrDCdhg6PpccnisITBiNsxPPNacSQ5+9a4vMaFEotFTQw041KpeY0Y6jJCEVAt99Nl8u0HfjdEYTkGgZZRhvAm91HGiCn4ehm71WWMbxXXCCeXX5RNVA/AiD0sJrTQOjqPT85fFN/QP1MdTpuD44xmLzZtat6XVG0xxWlrhTtYPMaw/bj1vMnQqpqq1ZtqoqXPGOaoghS19EmHfnrD/69L7m1WfG1LUaEAAAAAElFTkSuQmCC"
                                                                    role="presentation" loading="lazy"/></picture>
                                                            </div>
                                                        </div>
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&amp;o="
                                                            role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </a><a
                                            href="#"
                                            className="fc63351294 d412802652">
                                            <div

                                                className="d57f52f47d">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <div className="d65598d5f9"
                                                             data-testid="destination-postcard--1456928">
                                                            <div
                                                                className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                <div className="e1f827110f">Paris</div>
                                                                <picture className="e4e8d3238b fb913c0ee7"
                                                                         ><img
                                                                    className="c3194e6c89 e5eb7fb6cb c1874b9d0e"
                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAq1BMVEX///8AAAAAAAAAAAAAAAD////t7e3qjZboho/nfIfmdoGJibnlcH3kbHmCgrTiY3DiYG5ycqrfVGNra6feT13eTFzdRlXcRVXYQFBbW53WPEvaN0fRMUNQUJVNTZTXKTzOKULWJTjNKDlCQo3KIzTVHjHVHDDJHjHUFys6OojHGSzTEibTECTFEiQwMIMuLn4pKXsiInsfH3MYGHQXF20SEmoREXEKCmQICGsvokYkAAAABXRSTlMAESIzRJTdRHwAAACVSURBVBgZrcExTsNQEEXR+2bed4OCsgb2vyqqFFRpkBD4Z2w3IzlNJM6BfyPEM1P6YPfJ4cruy+JGd2dzkSGT8sMhKaswZNAkZQqzxEKTlCkMy6AJSgozPGgGm8BoeaMxZQqj90FzoXz/YSROQgQSZ4ERQZMUT4wmnSgKjIKTCAysNL9sEhPsxGFwkEKczVWIZyYvewBukRO4DA23HQAAAABJRU5ErkJggg=="
                                                                    role="presentation" loading="lazy"/></picture>
                                                            </div>
                                                        </div>
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&amp;o="
                                                            role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-et-view=" cCHObIPPQFFNcUWBZEWaSddDC:1  cCHObIPPQFFNcUWBZEWaSddDC:3   cCHObIPPQFFNcUWBZEWaSddDC:4     cCGaYSdVZMYCIPPQFFNcFGdcFRURURNLRe:1  cCGaYSdVZMYCIPPQFFNcFGdcFRURURNLRe:3   "></div>
                            <div data-capla-component="b-index-lp-web-mfe/MerchCarousel/PropertyTypesWww"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div>
                                    <div data-qmab-component-id="5" data-testid="merch-carousel" role="none">
                                        <div className="b22f788b4e">
                                            <div>
                                                <div className="f05428a2f1">
                                                    <div
                                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 e187349485 d19ba76520">
                                                        <div className="b1e6dd8416 aacd9d0b0a">
                                                            <div className="b3d1cacd40 a2cb913cd1">
                                                                <div data-testid="webcore-carousel-heading"
                                                                     className="e1f827110f f0d4d6a2f5 fda3b74d0d">Browse
                                                                    by property type
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="webcore-carousel" role="region"
                                                     className="d4f3be4ddb cbe6ba4fde a201aee5ff">
                                                    <ul className="fff8c74b55 cb9e386163" id=":r6:"
                                                        aria-atomic="false">
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/hotels.jpeg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" style={{
                                                                             display:"block",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit:"cover"
                                                                    }}/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">

                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Hotels
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">975,254
                                                                        hotels
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/hotels.jpeg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" style={{
                                                                        display:"block",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit:"cover"
                                                                    }}/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Apartments
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">1,151,562
                                                                        apartments
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/resorts.jpeg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" style={{
                                                                        display:"block",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit:"cover"
                                                                    }}/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Resorts
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">19,430
                                                                        resorts
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/villas.jpeg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" style={{
                                                                        display:"block",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit:"cover"
                                                                    }}/>
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">

                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Villas
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">612,682
                                                                        villas
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Cabins
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">43,616
                                                                        cabins
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Cottages
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">667,160
                                                                        cottages
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Glamping
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">17,029
                                                                        glamping sites
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Serviced
                                                                        apartments
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">39,742
                                                                        serviced apartments
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Holiday
                                                                        homes
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">612,682
                                                                        holiday homes
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Guest
                                                                        houses
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">113,453
                                                                        guest houses
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Hostels
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">18,264
                                                                        hostels
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Motels
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">13,434
                                                                        motels
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">B&amp;Bs
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">215,912
                                                                        B&amp;Bs
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Ryokans
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">2,342
                                                                        ryokans
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Riads
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">1,397
                                                                        riads
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Holiday
                                                                        parks
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">6,250
                                                                        holiday parks
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Homestays
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">157,775
                                                                        homestays
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450283.jpeg?k=44ef0e355cff36883935e4c99b5c01b035eabebad278d22363210b2fe40b2791&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Campsites
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">12,894
                                                                        campsites
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450103.jpeg?k=a1fa72362160b1df6e288050afa7ce1aade80871acd368ddd4a4ebf6ad87764e&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Country
                                                                        houses
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">13,317
                                                                        country houses
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450080.jpeg?k=15d9709efa513f2b23b5fa8d5234d87bdee2bf97b3e7552244592da11413db9a&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Farm
                                                                        stays
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">12,514
                                                                        farm stays
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450095.jpeg?k=cd5e46e632dab722d22217813485efde31fbe82f5f26a624166edccdbe8187bc&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Boats
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">2,238
                                                                        boats
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Luxury
                                                                        tents
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">5,661
                                                                        luxury tents
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450075.jpeg?k=d23cf8443780ac09f46f59e40393d75dbe64b06029b4959c60b81b7fdefc9be0&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Self
                                                                        catering accommodation
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">976,014
                                                                        self catering properties
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target=""
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">
                                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57175023.jpeg?k=dc0319d4d64ded9ee4b0ddb162a2e80db7899300b7bf21b34506888895d74c79&amp;o="
                                                                                     role="presentation" loading="lazy"/>
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Tiny
                                                                        houses
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">960
                                                                        tiny houses
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                    </ul>
                                                    <div className="ec293799a8" style={{top:"115.8px"}}>
                                                        <button aria-label="Previous" aria-controls=":r6:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                        </button>
                                                        <button aria-label="Next" aria-controls=":r6:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5 ba25770582 a97e19d8b2">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-capla-component="b-index-lp-web-mfe/TripTypesCarousel"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div>
                                    <div data-qmab-component-id="44">
                                        <div className="ed233f6bad">
                                            <div className="b3d1cacd40 a2cb913cd1">
                                                <div data-testid="webcore-carousel-heading"
                                                     className="e1f827110f f0d4d6a2f5 fda3b74d0d">Quick and easy trip
                                                    planner
                                                </div>
                                                <div data-testid="webcore-carousel-sub-heading"
                                                     className="a0c113411d c90c0a70d3 a34d1a4138">Pick a vibe and
                                                    explore the top destinations in Nigeria
                                                </div>
                                            </div>
                                            <div className="c9f1d14f1d">
                                                <nav data-testid="webcore-filter-carousel-tabs" className="fb995cecb1">
                                                    <div className="bc13adc8ab b2c0e7d253">
                                                        <ul className="e20caabacb" role="tablist">
                                                            <li className="d7ba686b8a e69171d050" role="presentation">
                                                                <button
                                                                    data-testid="webcore-filter-carousel-tab-trigger"
                                                                    role="tab" aria-selected="true" aria-controls="CITY"
                                                                     type="button"
                                                                    className="fc63351294 fa030f4cc2 f44d43bbc4 d4e373d880">
                                                                    <span className="b6dc9a9e69 ff00c05ba0 e6c50852bd"
                                                                          aria-hidden="true"><span
                                                                        data-testid="webcore-filter-carousel-tab-icon"
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path></svg></span></span>
                                                                    <div
                                                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                        <span className="db29ecfbe2">City</span></div>
                                                                </button>
                                                            </li>
                                                            <li className="d7ba686b8a" role="presentation">
                                                                <button
                                                                    data-testid="webcore-filter-carousel-tab-trigger"
                                                                    role="tab" aria-selected="false"
                                                                    aria-controls="ROMANCE"  type="button"
                                                                    className="fc63351294 fa030f4cc2 d4e373d880"><span
                                                                    className="b6dc9a9e69 ff00c05ba0 e6c50852bd"
                                                                    aria-hidden="true"><span
                                                                    data-testid="webcore-filter-carousel-tab-icon"
                                                                    className="b6dc9a9e69 e25355d3ee"
                                                                    aria-hidden="true"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"><path
                                                                    d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path></svg></span></span>
                                                                    <div
                                                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                        <span className="db29ecfbe2">Romance</span>
                                                                    </div>
                                                                </button>
                                                            </li>
                                                            <li className="d7ba686b8a e5305db18a" role="presentation">
                                                                <span className="cb5ebe3ffb c3de4d2761"><button
                                                                    aria-expanded="false" className="fa030f4cc2"
                                                                    type="button" role="tab">More<span
                                                                    className="b6dc9a9e69 eb54845d00 e25355d3ee"
                                                                    aria-hidden="true"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"><path
                                                                    d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg></span></button></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </nav>
                                            </div>
                                            <div>
                                                <div data-testid="webcore-carousel" role="region"
                                                     className="d4f3be4ddb cbe6ba4fde cb7e63f7dd">
                                                    <ul className="fff8c74b55 cb9e386163" id=":rc:"
                                                        aria-atomic="false">
                                                        <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/lagos.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" />
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">
                                                                            <picture className="e4e8d3238b bc5368ea83">

                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Ikeja
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">531
                                                                        km away
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                        <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                                 data-testid="web-core-stacked-card"
                                                                                                 href="#"
                                                                                                 className="fc63351294 b878730b30">
                                                            <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                                <div data-testid="webcore-carousel-image"
                                                                     className="d57f52f47d"
                                                                     >
                                                                    <img className="c3194e6c89 e5eb7fb6cb"
                                                                         src={toAbsoluteUrl(`/assets/img/lekki.jpg`)}
                                                                         role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb" />
                                                                    <div className="da627785d6">
                                                                        <div className="bcc2c1529b">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="b3d1cacd40 ff12947055">
                                                                    <div data-testid="webcore-carousel-title"
                                                                         className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Lagos
                                                                    </div>
                                                                    <div data-testid="webcore-carousel-sub-title"
                                                                         className="db29ecfbe2 c90c0a70d3 a34d1a4138">532
                                                                        km away
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                    </ul>
                                                    <div className="ec293799a8" style={{top:"78.0667px"}}>
                                                        <button aria-label="Previous" aria-controls=":rc:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                        </button>
                                                        <button aria-label="Next" aria-controls=":rc:" type="button"
                                                                className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                            <span className="b9def0936d"><span
                                                                className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                data-rtl-flip="true"><path
                                                                d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-et-view="customGoal:cCGaYSdMbYSfcdReLbFZVGAZbaTaTaET:1"></div>
                            <div data-capla-component="b-index-lp-web-mfe/UniqueStaysProperties"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div data-qmab-component-id="40">
                                    <div className="ec45347134">
                                        <div>
                                            <div className="f05428a2f1">
                                                <div className="a1b3f50dcd be36d14cea b2fe1a41c3 e187349485 d19ba76520">
                                                    <div className="b1e6dd8416 aacd9d0b0a">
                                                        <div className="b3d1cacd40 a2cb913cd1">
                                                            <div data-testid="webcore-carousel-heading"
                                                                 className="e1f827110f f0d4d6a2f5 fda3b74d0d">Stay at
                                                                our top unique properties
                                                            </div>
                                                            <div data-testid="webcore-carousel-sub-heading"
                                                                 className="a0c113411d c90c0a70d3 a34d1a4138">From
                                                                castles and villas to boats and igloos, we've got it all
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-testid="webcore-carousel" role="region"
                                                 className="d4f3be4ddb cbe6ba4fde a201aee5ff">
                                                <ul className="fff8c74b55 cb9e386163" id=":r9:"
                                                    aria-atomic="false">
                                                    <li className="d5fc932504 ebb6d69bfc" style={{
                                                        height: "100%"
                                                    }}><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/laroullet.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">La
                                                                    Roulotte de Ciney
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Belgium,
                                                                    Ciney
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.4
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;91 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/domki.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Domki
                                                                    Wierszyki Shelters
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Poland,
                                                                    Zakopane
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated exceptional"
                                                                     className="d8eab2cf7f d10a6220b4">9.7
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Exceptional"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Exceptional</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;86 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/ranczo.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Ranczo
                                                                    w Dolinie
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Poland,
                                                                    Kiszkowo
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated exceptional"
                                                                     className="d8eab2cf7f d10a6220b4">9.5
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Exceptional"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Exceptional</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;231 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/tinyhouse.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Tiny
                                                                    House Dreischwesternherz
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Germany,
                                                                    Trier
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated exceptional"
                                                                     className="d8eab2cf7f d10a6220b4">9.6
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Exceptional"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Exceptional</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;142 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Das
                                                                    rote Haus hinterm Deich
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Germany,
                                                                    Simonsberg
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;51 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Agriturismo
                                                                    Cabrele
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Italy,
                                                                    Santorso
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;228 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/356249609.webp?k=faba3b81c4ff82b74bc9cb2b8a42215e5551442e577539e1bc7de25edf6039fd&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Mini
                                                                    Hotel Übernachten Im Gurkenfass
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Germany,
                                                                    Lübbenau
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.0
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;124 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Carinya
                                                                    Park
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Australia,
                                                                    Gembrook
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;32 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Gyttja
                                                                    Västergårds
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Finland,
                                                                    Lillandet
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;305 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/349564463.webp?k=8d37c0a0667cb1dc873ffa6defbe07c5cbb421bbb1ed9645dc4c1f44f00affe8&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Au
                                                                    Cœur des Lacs - Chambres d'hôtes
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">France,
                                                                    Gérardmer
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.4
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;306 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/105762573.webp?k=2d60f1bc92863378df6d230f19d726197363e101ca22090bf88810eb89dea86b&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">La
                                                                    Sapinette
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Canada,
                                                                    Val-David
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated fabulous"
                                                                     className="d8eab2cf7f d10a6220b4">8.6
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Fabulous"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Fabulous</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;55 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/101174831.webp?k=35631b861f880bd876d85402d34b43f272c9032780bcc9008b3f0f70b6c2a56d&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">MFC
                                                                    Erfurter Seen
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Germany,
                                                                    Erfurt
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.2
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;154 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/74720084.webp?k=9dd023ce21d918f11ebc2a8c36fa18ebdd56fc4afe9554bf316cfdee6644af06&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Finca
                                                                    Esperanza
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Spain,
                                                                    Yaiza
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.0
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;131 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/106548982.webp?k=6464bb1807bbc9f4f9c408328c8df98bdfb5a885f7fc51712fcefc417b8472f7&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Auberge
                                                                    La Seigneurie Valcartier
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Canada,
                                                                    Saint-Gabriel-de-Valcartier
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.2
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;160 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/90168125.webp?k=f290bb1bc7b7b41c199a7c01912c825b9df85d39db91d1461958e2cd5980f956&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Lofthus
                                                                    Camping
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Norway,
                                                                    Lofthus
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.4
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;317 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                </ul>
                                                <div className="ec293799a8" style={{top:"115.8px"}}>
                                                    <button aria-label="Previous" aria-controls=":r9:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                    </button>
                                                    <button aria-label="Next" aria-controls=":r9:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5 ba25770582 a97e19d8b2">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-et-view=" cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC:1  cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC:3     "></div>
                            <div data-capla-component="b-index-lp-web-mfe/HomesGuestsLoveCarousel"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div data-qmab-component-id="4">
                                    <div className="bf5eb398a1">
                                        <div>
                                            <div className="f05428a2f1">
                                                <div className="a1b3f50dcd be36d14cea b2fe1a41c3 e187349485 d19ba76520">
                                                    <div className="b1e6dd8416 aacd9d0b0a">
                                                        <div className="b3d1cacd40 a2cb913cd1">
                                                            <div data-testid="webcore-carousel-heading"
                                                                 className="e1f827110f f0d4d6a2f5 fda3b74d0d">Homes
                                                                guests love
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="bb0b3e18ca f6364fc8e1 d9b0185ac2"><a
                                                            target="_blank"
                                                            href="#"
                                                            className="fc63351294 a822bdf511 e3c025e003 f7db01295e c334e6f658 e1b7cfea84"><span
                                                            className="e57ffa4eb5">Discover homes</span></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-testid="webcore-carousel" role="region"
                                                 className="d4f3be4ddb cbe6ba4fde a201aee5ff">
                                                <ul className="fff8c74b55 cb9e386163" id=":rd:"
                                                    aria-atomic="false">
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/aparthotel.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Aparthotel
                                                                    Stare Miasto
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Old
                                                                    Town, Poland, Kraków
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;60,648</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated fabulous"
                                                                     className="d8eab2cf7f d10a6220b4">8.7
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Fabulous"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Fabulous</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;2,315 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/7seasons.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">7Seasons
                                                                    Apartments Budapest
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">06.
                                                                    Terézváros, Hungary, Budapest
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;48,499</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated fabulous"
                                                                     className="d8eab2cf7f d10a6220b4">8.8
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Fabulous"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Fabulous</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;8,110 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/oriente.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Cheval
                                                                    Three Quays at The Tower of London
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">City
                                                                    of London, United Kingdom, London
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;310,046</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated exceptional"
                                                                     className="d8eab2cf7f d10a6220b4">9.5
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Exceptional"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Exceptional</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;593 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <img className="c3194e6c89 e5eb7fb6cb"
                                                                     src={toAbsoluteUrl(`/assets/img/numa.webp`)}
                                                                     role="presentation" loading="lazy" alt="c3194e6c89 e5eb7fb6cb"style={{
                                                                    display:"block",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:"cover",
                                                                    maxWidth: "100%",
                                                                    maxHeight: "100%",
                                                                }} />
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">numa I
                                                                    Vita Apartments
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Fortezza
                                                                    da Basso, Italy, Florence
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;216,086</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;1,075 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Downtown
                                                                    Synagogue
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">07.
                                                                    Erzsébetváros, Hungary, Budapest
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;42,517</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.2
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;53 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=b4f13731abc220a62dc44e8d52f2b5a843257fabeca40035d8b76d80ee523cf0&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">3
                                                                    Epoques Apartments by Prague Residences
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Prague
                                                                    1, Czech Republic, Praha 1
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;97,789</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated fabulous"
                                                                     className="d8eab2cf7f d10a6220b4">8.7
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Fabulous"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Fabulous</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;442 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">The
                                                                    Apartments by The Sloane Club
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Kensington
                                                                    and Chelsea, United Kingdom, London
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;408,471</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated superb"
                                                                     className="d8eab2cf7f d10a6220b4">9.0
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Superb"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Superb</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;148 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=43e79c5ea521b6bca76fa480afbd942fde50debd0d3a755c4ef26cc24f0c434b&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">6
                                                                    Continents Apartments by Prague Residences
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Prague
                                                                    1, Czech Republic, Prague
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;61,650</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated very good"
                                                                     className="d8eab2cf7f d10a6220b4">8.3
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Very good"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Very good</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;294 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83"><img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Flora
                                                                    Chiado Apartments
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Santa
                                                                    Maria Maior, Portugal, Lisboa
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;293,192</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated exceptional"
                                                                     className="d8eab2cf7f d10a6220b4">9.7
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Exceptional"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Exceptional</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;174 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                    <li className="d5fc932504 ebb6d69bfc"><a target="_blank"
                                                                                             data-testid="web-core-stacked-card"
                                                                                             href="#"
                                                                                             className="fc63351294 b878730b30">
                                                        <div className="a1b3f50dcd da949bc143 f7c6687c3d">
                                                            <div data-testid="webcore-carousel-image"
                                                                 className="d57f52f47d"
                                                                 >
                                                                <div className="da627785d6">
                                                                    <div className="bcc2c1529b">
                                                                        <picture className="e4e8d3238b bc5368ea83">
                                                                            <img
                                                                            className="c3194e6c89 e5eb7fb6cb"
                                                                            src="https://cf.bstatic.com/xdata/images/hotel/square600/117127036.webp?k=7f59e52c89ee2a4b3910118542f585c4cce52fc46627413eb08b760076b9f72d&amp;o="
                                                                            role="presentation" loading="lazy"/>
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b3d1cacd40 ff12947055">
                                                                <div data-testid="webcore-carousel-title"
                                                                     className="ac78a73c96 f0d4d6a2f5 fda3b74d0d">Michalská
                                                                    2 - Old Town Apartment
                                                                </div>
                                                                <div data-testid="webcore-carousel-sub-title"
                                                                     className="db29ecfbe2 c90c0a70d3 a34d1a4138">Prague
                                                                    1, Czech Republic, Prague
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div data-testid="webcore-carousel-price-container"
                                                                     className="a1b3f50dcd da949bc143 b2fe1a41c3 db7f07f643">
                                                                    <span className="db29ecfbe2 c90c0a70d3">Starting from</span><span
                                                                    data-testid="webcore-carousel-price"
                                                                    className="ac78a73c96 f0d4d6a2f5">NGN&nbsp;30,012</span>
                                                                </div>
                                                            </div>
                                                            <div data-testid="webcore-carousel-review"
                                                                 className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643 d19ba76520 beeede3d5b">
                                                                <div aria-label="Rated fabulous"
                                                                     className="d8eab2cf7f d10a6220b4">8.6
                                                                </div>
                                                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df"><span
                                                                    aria-label="Fabulous"
                                                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"> Fabulous</span><span
                                                                    className="d8eab2cf7f c90c0a70d3 db63693c62">&nbsp;·&nbsp;78 reviews</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                                </ul>
                                                <div className="ec293799a8" style={{top:"115.8px"}}>
                                                    <button aria-label="Previous" aria-controls=":rd:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                    </button>
                                                    <button aria-label="Next" aria-controls=":rd:" type="button"
                                                            className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5 ba25770582 a97e19d8b2">
                                                        <span className="b9def0936d"><span
                                                            className="b6dc9a9e69 e25355d3ee" aria-hidden="true"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            data-rtl-flip="true"><path
                                                            d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-et-view=" cCHObONdPbABJRXTcXCEFRURURHe:1 customGoal:cCHObONdPbABJRXTcXCEFRURURHe:2  cCHObONdPbABJRXTcXCEFRURURHe:3    cCHObONdPbABJRXTcXCEFRURURHe:4   "></div>
                            <div className="bui-spacer--largest" data-qmab-component-id="3">
                                <h2 className="bui-f-font-display_two bui-spacer--large d-index__header-section travel_articles_header__section">
                                    Get inspiration for your next trip
                                    <a className="bui-link bui-link--primary travel_articles__link"
                                       href="#">More</a>
                                </h2>
                                <div role="region" className="bui-carousel bui-carousel--large bui-u-bleed@small"
                                     data-bui-component="Carousel">
                                    <ul className="bui-carousel__inner" data-bui-ref="carousel-container">
                                        <li className="travel_articles_item bui-carousel__item"
                                            data-bui-ref="carousel-item"
                                            data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:1" data-index="0">
                                            <a aria-labelledby="travel_articles_title_1"
                                               aria-describedby="travel_articles_desc_1"
                                               href="#"
                                               className="travel_articles  ">
                                                <div className="js-lazy-image travel_articles_img"
                                                     style={{
                                                         backgroundImage:"url(https://cf.bstatic.com/xdata/images/xphoto/540x405/227647914.webp?k=d811b9653362db869b365ab07a94c450374a0dad62066989ef31941470d15134)"
                                                }}
                                                ></div>
                                                <div className="travel_articles__overlay"></div>
                                                <div className="travel_articles__content">
                                                    <h3 className="travel_articles__header travel_articles__two_line"
                                                        id="travel_articles_title_1">The best Pride parades across
                                                        America</h3>
                                                    <p id="travel_articles_desc_1"
                                                       className="travel_articles__description travel_articles__two_line">Join
                                                        in the celebrations of love, inclusivity and diversity.</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="travel_articles_item bui-carousel__item"
                                            data-bui-ref="carousel-item"
                                            data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:1" data-index="1">
                                            <a className="bui-card bui-card--media bui-card--transparent"
                                               href="#">
                                                <div className="bui-card__image-container travel_articles_img_small">
                                                    <img className="bui-card__image"
                                                         src="https://cf.bstatic.com/xdata/images/xphoto/540x405/225084278.webp?k=ffc3291f7c36f8f0c8d245e83a22350ca05b8a7f94bf1f51447a02787b42d699&amp;o="
                                                         alt="Europe’s finest and most scenic train journeys"/>
                                                </div>
                                                <div className="bui-card__content">
                                                    <div className="bui-title bui-title--strong_1 bui-card__title">
                                                        <span className="bui-card__title travel_articles__two_line">Europe’s finest and most scenic train journeys</span>
                                                        <span className="bui-title__subtitle travel_articles__two_line">From the snow-capped peaks of the Alps to vast, navy blue Norwegian fjords.</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="travel_articles_item bui-carousel__item"
                                            data-bui-ref="carousel-item"
                                            data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:1" data-index="2">
                                            <a className="bui-card bui-card--media bui-card--transparent"
                                               href="#">
                                                <div className="bui-card__image-container travel_articles_img_small">
                                                    <img className="bui-card__image"
                                                         src="https://cf.bstatic.com/xdata/images/xphoto/540x405/223110036.webp?k=dee0537605f9e2377deca151eb89be76ef24e35f4d91ab7eb397625af8cb6cec&amp;o="
                                                         alt="6 inspiring sabbaticals in the Asia-Pacific region"/>
                                                </div>
                                                <div className="bui-card__content">
                                                    <div className="bui-title bui-title--strong_1 bui-card__title">
                                                        <span className="bui-card__title travel_articles__two_line">6 inspiring sabbaticals in the Asia-Pacific region</span>
                                                        <span className="bui-title__subtitle travel_articles__two_line">From a mindful stay in a Japanese temple to a cookery course in Vietnam.</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="travel_articles_item bui-carousel__item"
                                            data-bui-ref="carousel-item"
                                            data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:1" data-index="3">
                                            <a className="bui-card bui-card--media bui-card--transparent"
                                               href="#">
                                                <div className="bui-card__image-container travel_articles_img_small">
                                                    <img className="bui-card__image"
                                                         src="https://cf.bstatic.com/xdata/images/xphoto/720x405/223600156.webp?k=dd6dcf8fc8d528ea747cb3f0fbb5da8b2832e7548dcc25497cd90cc7318f058e&amp;o="
                                                         alt="6 best summer music festivals in South Korea"/>
                                                </div>
                                                <div className="bui-card__content">
                                                    <div className="bui-title bui-title--strong_1 bui-card__title">
                                                        <span className="bui-card__title travel_articles__two_line">6 best summer music festivals in South Korea</span>
                                                        <span className="bui-title__subtitle travel_articles__two_line">From dancing to K-hip hop in Seoul to a classical music festival in the mountains.</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="travel_articles_item bui-carousel__item"
                                            data-bui-ref="carousel-item"
                                            data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:1" data-index="4">
                                            <a className="bui-card bui-card--media bui-card--transparent"
                                               href="#">
                                                <div className="bui-card__image-container travel_articles_img_small">
                                                    <img className="bui-card__image"
                                                         src="https://cf.bstatic.com/xdata/images/xphoto/540x405/219730590.webp?k=10a70a5982bc3bc2661b2d8ac142f3320bb52acedd32130504c192975a8d9b47&amp;o="
                                                         alt="Northern Italian holiday homes with amazing views"/>
                                                </div>
                                                <div className="bui-card__content">
                                                    <div className="bui-title bui-title--strong_1 bui-card__title">
                                                        <span className="bui-card__title travel_articles__two_line">Northern Italian holiday homes with amazing views</span>
                                                        <span className="bui-title__subtitle travel_articles__two_line">From a historic villa on Lake Como to an Italian Riviera bungalow overlooking the sea.</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="bui-carousel__nav" aria-hidden="true">
                                        <button type="button" className="bui-carousel__button" aria-label="Previous"
                                                data-bui-ref="carousel-prev"
                                                data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:4" >
                                            <svg className="bk-icon -streamline-arrow_nav_left bui-carousel__prev"
                                                 height="32" width="32" viewBox="0 0 24 24" role="presentation"
                                                 aria-hidden="true" focusable="false">
                                                <path
                                                    d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path>
                                            </svg>
                                        </button>
                                        <button type="button"
                                                className="bui-carousel__button bui-is-visible bui-is-clickable"
                                                aria-label="Next" data-bui-ref="carousel-next"
                                                data-et-click="customGoal:cCHObONdPbABJRXTcXCEFRURURHe:3">
                                            <svg className="bk-icon -streamline-arrow_nav_right bui-carousel__next"
                                                 height="32" width="32" viewBox="0 0 24 24" role="presentation"
                                                 aria-hidden="true" focusable="false">
                                                <path
                                                    d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div style={{clear:"both"}} ></div>
                            <div data-et-view=" cCHObONdPbIZFbYSfDcfFdHMbNXGDJdLOLOLMO:2 ">
                            </div>
                            <div data-capla-component="b-index-lp-web-mfe/GeniusSignInBanner"
                                 data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                <div className="a8587b2c3c" data-qmab-component-id="36">
                                    <div>
                                        <div
                                            className="a826ba81c4 fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 bd09386e88"
                                            >
                                            <div
                                                 className="d57f52f47d c9ad251439">
                                                <div className="da627785d6">
                                                    <div className="bcc2c1529b">
                                                        <picture className="e4e8d3238b"><img
                                                            className="c3194e6c89 e5eb7fb6cb"
                                                            src="https://t-cf.bstatic.com/design-assets/assets/v3.72.0/illustrations-traveller/GlobeGeniusBadge.png"
                                                            srcSet="https://t-cf.bstatic.com/design-assets/assets/v3.72.0/illustrations-traveller/GlobeGeniusBadge@2x.png 2x"
                                                            alt="" role="presentation" loading="lazy"/></picture>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c27180cdd7"><h2 className="e1f827110f db764d8fd9">Get
                                                instant discounts</h2>
                                                <div className="a0c113411d e7dbab4567">Simply sign into your Booking.com
                                                    account and look for the blue Genius logo to save
                                                </div>
                                            </div>
                                            <div className="a1b3f50dcd be36d14cea b2fe1a41c3 f99e477b40"><a
                                                href="#"
                                                className="fc63351294 a822bdf511 e2b4ffd73d f7db01295e c334e6f658 a9a04704ee"><span
                                                className="e57ffa4eb5">Sign in</span></a><a
                                                href="#"
                                                className="fc63351294 a822bdf511 e3c025e003 f7db01295e c334e6f658 e1b7cfea84"><span
                                                className="e57ffa4eb5">Register</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-et-view="cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe:2" data-qmab-component-id="19">
                                <div data-capla-component="b-index-lp-web-mfe/BHAwarenessBanner"
                                     data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                                    <div>
                                        <div data-testid="wcu_bh_banner-desktop"
                                             className="a826ba81c4 fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 bc4e2c467a"
                                             ><a target="_isblank"
                                                                               href="#"
                                                                               className="fc63351294 b8e920e088">
                                            <div className="d39c27f89b"></div>
                                            <div className="d875fc0c4c">
                                                <div data-testid="wcu_bh_banner_desktop--content"
                                                     className="e1f827110f bb44aa69aa">
                                                    <div><span>Find </span>
                                                        <div className="de7f9979e1">
                                                            <ul className="a2172b8d6f">
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">apartments</span></li>
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">villas</span></li>
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">aparthotels</span></li>
                                                                <li className="db46cc1a0a"><span className="fc7d18e9e4">holiday homes</span>
                                                                </li>
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">cottages</span></li>
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">homes</span></li>
                                                                <li className="db46cc1a0a"><span
                                                                    className="fc7d18e9e4">apartments</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span> for your next trip</span></div>
                                                <span data-testid="wcu_bh_banner_desktop--button"
                                                      className="fc63351294 a822bdf511 e2b4ffd73d f7db01295e c334e6f658 a9a04704ee ccbae5d425"><span
                                                    className="e57ffa4eb5">Discover homes</span></span></div>
                                            <div className="a0670806ef">
                                                <picture className="e4e8d3238b"><img className="c3194e6c89 e5eb7fb6cb"
                                                                                     src="https://q-xx.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png"
                                                                                     alt="presentation" loading="lazy"/>
                                                </picture>
                                            </div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="calendar"></div>
                </div>
            </div>
        </>
    )
}

export {Content}
