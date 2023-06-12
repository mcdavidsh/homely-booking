import React, {forwardRef} from "react";
import withClickOutside from "../../helpers/WithoutClickOutside";
import {TabModel} from "./TabModel";

const OccupantTab= forwardRef(({ open, setOpen  }:TabModel, ref:React.ForwardedRef<HTMLDivElement>)=> {

    return (
        <>

            <div className="f9cf783bde" ref={ref}>
                <div className="d67edddcf0" >
                    <button type="button" data-testid="occupancy-config"
                            className="d47738b911 b7d08821c3" onClick={()=>setOpen(!open)}><span
                        data-testid="occupancy-config-icon"
                        className="b6dc9a9e69 ca4f2a5850 e6c50852bd b8c9de5937"
                        aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"><path
                        d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path></svg></span>2
                        adults · 0 children · 1 room<span
                            data-testid="searchbox-form-button-icon"
                            className="b6dc9a9e69 f8931b3e81 e25355d3ee" aria-hidden="true"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                            d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path></svg></span>
                    </button>

                    {open && (
                        <div className="a207cf5a0d">
                            <div className="a5da3001f3 a73af396c3" data-testid="occupancy-popup">
                                <div className="df856d97eb">
                                    <div className="b2b5147b20"><input type="range"
                                                                       className="a05c190135"
                                                                       id="group_adults" min="1"
                                                                       max="30" step="1"
                                                                       value="2" />
                                        <div className="b72a27c85f"><label className="a68a7ee8ee"
                                                                           htmlFor="group_adults">Adults</label>
                                        </div>
                                        <div className="e98c626f34">
                                            <button aria-hidden="true" type="button"
                                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 cd7aa7c891">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg></span></span>
                                            </button>
                                            <span className="e615eb5e43" aria-hidden="true">2</span>
                                            <button aria-hidden="true" type="button"
                                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 d64a4ea64d">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg></span></span>
                                            </button>
                                        </div></div>
                                    <div className="b2b5147b20"><input type="range"
                                                                       className="a05c190135"
                                                                       id="group_children" min="0"
                                                                       max="10" step="1"
                                                                       value="0" />
                                        <div className="b72a27c85f"><label className="a68a7ee8ee"
                                                                           htmlFor="group_children">Children</label>
                                        </div>
                                        <div className="e98c626f34">
                                            <button aria-hidden="true" type="button"
                                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 cd7aa7c891">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg></span></span>
                                            </button>
                                            <span className="e615eb5e43" aria-hidden="true">0</span>
                                            <button aria-hidden="true" type="button"
                                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 d64a4ea64d">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg></span></span>
                                            </button>
                                        </div></div>
                                    <div className="b2b5147b20"><input type="range"
                                                                       className="a05c190135"
                                                                       id="no_rooms" min="1"
                                                                       max="30" step="1" value="1" />
                                        <div className="b72a27c85f"><label className="a68a7ee8ee"
                                                                           htmlFor="no_rooms">Rooms</label>
                                        </div>
                                        <div className="e98c626f34">
                                            <button  aria-hidden="true" type="button"
                                                     className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 cd7aa7c891">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg></span></span>
                                            </button>
                                            <span className="e615eb5e43" aria-hidden="true">1</span>
                                            <button aria-hidden="true" type="button"
                                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 d64a4ea64d">
                                                                    <span className="b9def0936d"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg></span></span>
                                            </button>
                                        </div></div>
                                </div>
                                <button type="button"
                                        className="fc63351294 a822bdf511 e2b4ffd73d f7db01295e c938084447 a9a04704ee d285d0ebe9">
                                    <span className="e57ffa4eb5">Done</span></button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
})

export default withClickOutside(OccupantTab)
