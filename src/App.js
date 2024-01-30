// turtle_co/src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import temporaryCard1 from './Images/temporary_card.png';
import temporaryCard2 from './Images/temporary_card_2.png';
import temporaryCard3 from './Images/temporary_card_3.png';
import aPlaceForTurtle from './Images/img_aPlaceForTurtles.png';
import turtleBeam from './Images/img_TurtleBeam.png';

function App() {


    // 스크롤 이벤트 기본 설정
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //스크롤 이벤트 : 안녕 거북이들 환영합니다
    const helloTransform = `translate(-${scrollPosition}px, -${scrollPosition}px)`;
    const turtlesTransform = `translate(${scrollPosition}px, -${scrollPosition}px)`;
    const welcomeTransform = `translate(${scrollPosition}px, ${scrollPosition}px)`;

    //스크롤 이벤트 : 임시카드
    const card1Transform = `translate(-${scrollPosition * 0.2}px, -${scrollPosition * 0.5}px)`;
    const card2Transform = `translate(${scrollPosition * 0.2}px, -${scrollPosition * 0.5}px)`;
    const card3Transform = `translate(${scrollPosition * 0.2}px, ${scrollPosition * 0.5}px)`;

    const card1Style = { transform: card1Transform, left: '40%', top: '40%' };
    const card2Style = { transform: card2Transform, right: '10%', top: '50%' };
    const card3Style = { transform: card3Transform, left: '20%', bottom: '10%' };

    return (
        <div className="App">

{/*---헤더---------------------------------------------*/}
            <header>
                <h1>App-header</h1>
            </header>
{/*---상단---------------------------------------------*/}
            <div className="top-part">

        {/*---스크롤 이벤트 : 안녕 거북이들 환영합니다----------*/}
                <h1 style={{ transform: helloTransform }}>안녕,</h1>
                <h1 style={{ transform: turtlesTransform }}>거북이들</h1>
                <h1 style={{ transform: welcomeTransform }}>환영합니다</h1>

        {/*---스크롤 이벤트 : 임시카드 ---------------------*/}
                <img
                    src={temporaryCard1}
                    alt="Temporary Card 1"
                    className="header-scroll-img"
                    style={{ ...card1Style }}
                />

                <img
                    src={temporaryCard2}
                    alt="Temporary Card 2"
                    className="header-scroll-img"
                    style={{ ...card2Style }}
                />

                <img
                    src={temporaryCard3}
                    alt="Temporary Card 3"
                    className="header-scroll-img"
                    style={{ ...card3Style }}
                />
            </div>

{/*---중앙------------------------------------------*/}
            <div className="mid-part">

        {/*---몇 명이서 왔어--------------------------*/}
                <div className="how-many-are-you">
                    {/* 왼쪽 이미지 */}
                     <img src={aPlaceForTurtle} alt="Turtles Place" className="left-image"/>

                    {/* 오른쪽 텍스트 박스 */}
                    <div className="mid-wheel-box">
                        <p>혹시 몇 명이서 왔어?</p>
                        <div>
                            <p>1명</p>
                            <p>2명</p>
                            <p>3명</p>
                            <p>4명</p>
                        </div>
                    </div>
                </div>

        {/*---어떤거 좋아해? (장르)--------------------*/}
                <div className="what-do-you-like">
                    <div className="mid-wheel-box">
                        <p>혹시 어떤거 좋아해?</p>
                        <div>
                            <p>추리</p>
                            <p>파티</p>
                            <p>마피아</p>
                            <p>덱 빌딩</p>
                        </div>
                    </div>
                    <img src={turtleBeam} alt="Turtles Beam" className="left-image"/>
                </div>

                {/*---검색---------------------------------*/}
                <div className="search-games">
                    <p>검색</p>
                    <p>테스트</p>
                </div>

        {/*---돌림판---------------------------------*/}
                <div className="dol-lim-pan">
                    <p> 뭐할지 모르겠으면 돌려돌려 돌림판!</p>
                </div>
            </div>

{/*---하단------------------------------------------*/}
            <div className="bottom-part">
                <p>밑부분</p>
            </div>
        </div>
    );
}

export default App;
