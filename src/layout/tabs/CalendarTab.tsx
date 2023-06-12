import React, {forwardRef} from "react";
import withClickOutside from "../../helpers/WithoutClickOutside";
import {TabModel} from "./TabModel";

const CalendarTab= forwardRef(({ open, setOpen  }:TabModel, ref:React.ForwardedRef<HTMLDivElement>)=> {

    return (
        <>

            <div ref={ref} className="f9cf783bde">
                <div className="d606c76c5a">
                    <div className="b91c144835" role="none" onClick={()=>setOpen(!open)}
                         data-testid="searchbox-dates-container"><span
                        className="b6dc9a9e69 a804864eef e6c50852bd b8c9de5937"
                        aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"><path
                        d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path></svg></span>
                        <button type="button" data-testid="date-display-field-start"
                                className="d47738b911 e246f833f7 fe211c0731">Check-in date
                        </button>
                        <span className="a77cb49759"> — </span>
                        <button type="button" data-testid="date-display-field-end"
                                className="d47738b911 e246f833f7 fe211c0731">Check-out date
                        </button>
                    </div>
                    {

                        open &&    (
                            <div className="dec3155a06" data-testid="searchbox-datepicker"  >
                                <div className="a97110d8d3 b603b9c864 a031c463c5 d6a5f7a388">
                                    <nav data-testid="datepicker-tabs"
                                         className="fb995cecb1 f214e2d2f6 dc28c4127e">
                                        <div className="bc13adc8ab cd743661d2">
                                            <ul className="e20caabacb" role="tablist">
                                                <li className="d7ba686b8a e69171d050"
                                                    role="presentation">
                                                    <button role="tab" aria-selected="true"
                                                            aria-controls="calendar-searchboxdatepicker"
                                                            type="button"
                                                            className="fc63351294 fa030f4cc2 f44d43bbc4 d4e373d880">
                                                        <div
                                                            className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                            <span className="db29ecfbe2">Calendar</span>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li className="d7ba686b8a" role="presentation">
                                                    <button role="tab" aria-selected="false"
                                                            aria-controls="flexible-searchboxdatepicker"  type="button"
                                                            className="fc63351294 fa030f4cc2 d4e373d880">
                                                        <div
                                                            className="a1b3f50dcd be36d14cea b2fe1a41c3 db7f07f643">
                                                                            <span
                                                                                className="db29ecfbe2">I'm flexible</span>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li className="d7ba686b8a e5305db18a"
                                                    role="presentation"><span
                                                    className="cb5ebe3ffb c3de4d2761"><button
                                                    aria-expanded="false" className="fa030f4cc2"
                                                    type="button" role="tab"><span
                                                    className="b6dc9a9e69 eb54845d00 e25355d3ee"
                                                    aria-hidden="true"><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"><path
                                                    d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg></span></button></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div role="tabpanel" id="calendar-searchboxdatepicker">
                                            <div className="f92dfc7e1a">
                                                <div
                                                    data-testid="searchbox-datepicker-calendar"
                                                    className="c5d667353d efea941f13">
                                                    <button type="button"
                                                            className="fc63351294 a822bdf511 e3c025e003 fa565176a8 cfb238afa1 c334e6f658 ae1678b153 c9fa5fc96d be298b15fa">
                                                                        <span className="b9def0936d"><span
                                                                            className="b6dc9a9e69 e6c50852bd"
                                                                            aria-hidden="true"><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24" data-rtl-flip="true"><path
                                                                            d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                    </button>
                                                    <div className="fa3f76ae6b">
                                                        <div className="f261b68fe6"><h3
                                                            aria-live="polite"
                                                            className="ac78a73c96 ab0d1629e5">June
                                                            2023</h3>
                                                            <table className="aadb8ed6d3" role="grid">
                                                                <thead aria-hidden="true">
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Mo
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Tu
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">We
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Th
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Fr
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Sa
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Su
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-01"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="1 June 2023"><span>1</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-02"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="2 June 2023"><span>2</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-03"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="3 June 2023"><span>3</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-04"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="4 June 2023"><span>4</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-05"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="5 June 2023"><span>5</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-06"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="6 June 2023"><span>6</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-07"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="7 June 2023"><span>7</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-08"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="8 June 2023"><span>8</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-09"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="9 June 2023"><span>9</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span
                                                                        className="b21c1c6c83 f5774da2d4"
                                                                        data-date="2023-06-10"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="10 June 2023"><span>10</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-11"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="11 June 2023"><span>11</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-12"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="12 June 2023"><span>12</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-13"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="13 June 2023"><span>13</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-14"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="14 June 2023"><span>14</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-15"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="15 June 2023"><span>15</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-16"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="16 June 2023"><span>16</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-17"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="17 June 2023"><span>17</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-18"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="18 June 2023"><span>18</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-19"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="19 June 2023"><span>19</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-20"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="20 June 2023"><span>20</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-21"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="21 June 2023"><span>21</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-22"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="22 June 2023"><span>22</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-23"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="23 June 2023"><span>23</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-24"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="24 June 2023"><span>24</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-25"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="25 June 2023"><span>25</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-26"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="26 June 2023"><span>26</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-27"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="27 June 2023"><span>27</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-28"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="28 June 2023"><span>28</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-29"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="29 June 2023"><span>29</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-06-30"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="30 June 2023"><span>30</span></span>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="f261b68fe6"><h3
                                                            aria-live="polite"
                                                            className="ac78a73c96 ab0d1629e5">July
                                                            2023</h3>
                                                            <table className="aadb8ed6d3" role="grid">
                                                                <thead aria-hidden="true">
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Mo
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Tu
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">We
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Th
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Fr
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Sa
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="d2978c30b3">
                                                                        <div
                                                                            className="db29ecfbe2 c90c0a70d3">Su
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td className="e2f0d47913"
                                                                        aria-hidden="true"></td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-01"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="1 July 2023"><span>1</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-02"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="2 July 2023"><span>2</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-03"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="3 July 2023"><span>3</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-04"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="4 July 2023"><span>4</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-05"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="5 July 2023"><span>5</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-06"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="6 July 2023"><span>6</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-07"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="7 July 2023"><span>7</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-08"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="8 July 2023"><span>8</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-09"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="9 July 2023"><span>9</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-10"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="10 July 2023"><span>10</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-11"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="11 July 2023"><span>11</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-12"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="12 July 2023"><span>12</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-13"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="13 July 2023"><span>13</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-14"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="14 July 2023"><span>14</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-15"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="15 July 2023"><span>15</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-16"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="16 July 2023"><span>16</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-17"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="17 July 2023"><span>17</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-18"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="18 July 2023"><span>18</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-19"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="19 July 2023"><span>19</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-20"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="20 July 2023"><span>20</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-21"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="21 July 2023"><span>21</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-22"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="22 July 2023"><span>22</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-23"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="23 July 2023"><span>23</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-24"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="24 July 2023"><span>24</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-25"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="25 July 2023"><span>25</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-26"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="26 July 2023"><span>26</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-27"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="27 July 2023"><span>27</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-28"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="28 July 2023"><span>28</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-29"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="29 July 2023"><span>29</span></span>
                                                                    </td>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-30"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="30 July 2023"><span>30</span></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td role="gridcell"
                                                                        className="e2f0d47913"><span

                                                                        className="b21c1c6c83"
                                                                        data-date="2023-07-31"
                                                                        aria-checked="false"
                                                                        role="checkbox"
                                                                        aria-label="31 July 2023"><span>31</span></span>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="e8831c9192"
                                                         data-testid="datepicker-footer">
                                                        <div data-testid="flexible-dates-container"
                                                             role="region"
                                                             className="d4f3be4ddb dbf27a7228">
                                                            <ul className="fff8c74b55 cb9e386163"
                                                                id=":r1c:"
                                                                aria-atomic="false">
                                                                <li className="d5fc932504 ebb6d69bfc">
                                                                    <label className="eb47fad9b8"><input
                                                                        className="e6e585da68 e0e0dbd795"
                                                                        name="" type="checkbox"
                                                                        value="1"/><span
                                                                        className="b66c065d20"><span
                                                                        className="b6dc9a9e69 b2becd73ae e25355d3ee"
                                                                        aria-hidden="true"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1ZM4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2Z"></path></svg></span></span><span
                                                                        className="ee746850b6 a81bed280d">1 day</span></span></label>
                                                                </li>
                                                                <li className="d5fc932504 ebb6d69bfc">
                                                                    <label className="eb47fad9b8"><input
                                                                        className="e6e585da68 e0e0dbd795"
                                                                        name="" type="checkbox"
                                                                        value="2"/><span
                                                                        className="b66c065d20"><span
                                                                        className="b6dc9a9e69 b2becd73ae e25355d3ee"
                                                                        aria-hidden="true"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1ZM4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2Z"></path></svg></span></span><span
                                                                        className="ee746850b6 a81bed280d">2 days</span></span></label>
                                                                </li>
                                                                <li className="d5fc932504 ebb6d69bfc">
                                                                    <label className="eb47fad9b8"><input
                                                                        className="e6e585da68 e0e0dbd795"
                                                                        name="" type="checkbox"
                                                                        value="3"/><span
                                                                        className="b66c065d20"><span
                                                                        className="b6dc9a9e69 b2becd73ae e25355d3ee"
                                                                        aria-hidden="true"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1ZM4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2Z"></path></svg></span></span><span
                                                                        className="ee746850b6 a81bed280d">3 days</span></span></label>
                                                                </li>
                                                                <li className="d5fc932504 ebb6d69bfc">
                                                                    <label className="eb47fad9b8"><input
                                                                        className="e6e585da68 e0e0dbd795"
                                                                        name="" type="checkbox"
                                                                        value="7"/><span
                                                                        className="b66c065d20"><span
                                                                        className="b6dc9a9e69 b2becd73ae e25355d3ee"
                                                                        aria-hidden="true"><span
                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                        aria-hidden="true"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"><path
                                                                        d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1ZM4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2Z"></path></svg></span></span><span
                                                                        className="ee746850b6 a81bed280d">7 days</span></span></label>
                                                                </li>
                                                            </ul>
                                                            <div className="ec293799a8">
                                                                <button aria-label=""
                                                                        aria-controls=":r1c:"
                                                                        type="button"
                                                                        className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                                                    <span className="b9def0936d"><span
                                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                                        aria-hidden="true"><svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        data-rtl-flip="true"><path
                                                                                        d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path></svg></span></span>
                                                                </button>
                                                                <button aria-label=""
                                                                        aria-controls=":r1c:"
                                                                        type="button"
                                                                        className="fc63351294 a822bdf511 a197a33f25 fa565176a8 f7db01295e c334e6f658 e66ee09c14 b3774fa8b1 d23c616de5">
                                                                                    <span className="b9def0936d"><span
                                                                                        className="b6dc9a9e69 e25355d3ee"
                                                                                        aria-hidden="true"><svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        data-rtl-flip="true"><path
                                                                                        d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path></svg></span></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </>
        )
})

export default withClickOutside(CalendarTab)
