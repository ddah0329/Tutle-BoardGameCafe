// turtle_co/src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import temporaryCard1 from './temporary_card.png';
import temporaryCard2 from './temporary_card_2.png';
import temporaryCard3 from './temporary_card_3.png';

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

            {/*헤더*/}
            <header className="App-header">
                <h1>App-header</h1>
            </header>

            <div className="top-part">
                {/*스크롤 이벤트 : 안녕 거북이들 환영합니다*/}
                <h1 style={{ transform: helloTransform }}>안녕,</h1>
                <h1 style={{ transform: turtlesTransform }}>거북이들</h1>
                <h1 style={{ transform: welcomeTransform }}>환영합니다</h1>

                {/*스크롤 이벤트 : 임시카드*/}
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

            <div className="mid-part">
                <div className="how-many-are-you">
                    {/* 왼쪽 이미지 */}
                     <img src="img_aPlaceForTurtles.png" alt="Turtles Place" className="left-image"/>

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
                <div className="what-do-you-like">
                    <img src="img_TurtleBeam.png" alt="Turtles Beam" className="left-image"/>

                    <p>혹시 어떤거 좋아해?</p>
                </div>
                <div className="search-games">
                    <p>검색</p>
                </div>
                <div className="dol-lim-pan">
                    <p> 뭐할지 모르겠으면 돌려돌려 돌림판!</p>
                </div>
            </div>
        </div>
    );
}

export default App;
