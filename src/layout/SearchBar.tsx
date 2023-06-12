import React, {forwardRef, useRef, useState} from "react";
import withClickOutside from "../helpers/WithoutClickOutside";
import CalendarTab from "./tabs/CalendarTab";
import OccupantTab from "./tabs/OccupantTab";

type Props = {
    open: boolean
    setOpen: any
}
// const ref =

const SearchBar = ()=> {

    return (
        <>
            <div className="xpi__content__wrapper xpi__content__wrappergray xpi__content_hero_banner " id="indexsearch">
                <div data-capla-component="b-index-lp-web-mfe/HeroBannerDesktop"
                     data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                    <div>
                        <div className="ab6cf2edce hero-banner-wrapper b36dba3aaa a2893870c6">
                            <div className="f5ac4a5021 dd9568f98a">
                                <div className="b367390a6e">
                                    <header><h1><span data-testid="herobanner-title1"
                                                      className="fa27fe07b6 c0ec8bd590 e0ff951c3e">Find your next stay</span>
                                    </h1></header>
                                    <p data-testid="herobanner-subtitile"
                                       className="fa21f9c13a c0ec8bd590 e6d35895b6">Search low prices on hotels, homes
                                        and much more...</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-banner-searchbox" data-et-click="customGoal:HZUaQJdDBKFfHET:4" >
                    <div data-component="arp-searchbox-horizontal-index" >
                        <div data-capla-component="b-index-lp-web-mfe/SearchBoxDesktopHorizontal"
                             data-capla-namespace="b-index-lp-web-mfeNAcFEQNe">
                            <form className="a0ac39e217">
                                <div className="ffa9856b86 db27349d3a cc9bf48a25">
                                    <div className="f9cf783bde">
                                        <div className="a5761ae4af">
                                            <div className="ab090fee6e d6e01b74ce" data-testid="destination-container"
                                                 role="none">
                                                <div className="db29ecfbe2 c072c8cf10 b1f9db9109">
                                                    <div className="a61cce10a1">
                                                        <div className="d4e829796c">
                                                            <div className="a713e2a62f"><span
                                                                className="b6dc9a9e69 ec1b6253a6 b8c9de5937"
                                                                aria-hidden="true"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                                                d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg></span>
                                                            </div>
                                                            <input name="ss" className="ce45093752"
                                                                   placeholder="Where are you going?"
                                                                   data-destination="1" autoComplete="off" id=":Ra9:"
                                                                   value="" spellCheck="false" data-ms-editor="true" />

                                                                <div className="ade92cdb3b b8c4387f70"></div></div>
                                                    </div>
                                                </div>
                                                <div className="a7631de79e"></div>
                                            </div>
                                        </div>
                                    </div>
                                   <CalendarTab/>
                                    <OccupantTab/>
                                    <div className="f9cf783bde">
                                        <button type="submit"
                                                className="fc63351294 a822bdf511 d4b6b7a9e7 cfb238afa1 c938084447 f4605622ad aa11d0d5cd">
                                            <span className="e57ffa4eb5">Search</span></button>
                                    </div>
                                </div>
                                <div className="dfdd8e04de">
                                    <div className="db29ecfbe2 c072c8cf10 c3f5dab487"><input id=":Ra:"
                                                                                             className="f49aa20e67"
                                                                                             type="checkbox"
                                                                                             name="sb_entire_place"
                                                                                             value="1"/><label
                                        htmlFor=":Ra:"
                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 d19ba76520 efeda70352"><span
                                        className="f8b8a6476c"></span><span className="bbdb949247"><span
                                        className="b6dc9a9e69 aba8c51b27 e25355d3ee" aria-hidden="true"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path
                                        d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z"></path></svg></span></span><span
                                        className="b1e6dd8416 aacd9d0b0a"><div className="db29ecfbe2 f0d4d6a2f5">I'm looking for an entire home or apartment</div></span></label>
                                    </div>
                                    <div className="db29ecfbe2 c072c8cf10 c3f5dab487"><input id=":Ri:"
                                                                                             className="f49aa20e67"
                                                                                             type="checkbox"
                                                                                             name="sb_travel_purpose"
                                                                                             value="business"/><label
                                        htmlFor=":Ri:"
                                        className="a1b3f50dcd be36d14cea b2fe1a41c3 d19ba76520 efeda70352"><span
                                        className="f8b8a6476c"></span><span className="bbdb949247"><span
                                        className="b6dc9a9e69 aba8c51b27 e25355d3ee" aria-hidden="true"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path
                                        d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z"></path></svg></span></span><span
                                        className="b1e6dd8416 aacd9d0b0a"><div className="db29ecfbe2 f0d4d6a2f5">I'm travelling for work</div></span></label>
                                    </div>
                                </div>
                                <input type="hidden" name="ssne" value="Lagos" placeholder="Where are you going?"/><input type="hidden"
                                                                                      name="ssne_untouched"
                                                                                      value=""/><input type="hidden"
                                                                                                      name="efdco" value="1"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export {SearchBar}
