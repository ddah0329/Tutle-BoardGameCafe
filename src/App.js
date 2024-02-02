// turtle_co/src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';

import temporaryCard1 from './Images/temporary_card.png';
import temporaryCard2 from './Images/temporary_card_2.png';
import temporaryCard3 from './Images/temporary_card_3.png';
import aPlaceForTurtle from './Images/img_aPlaceForTurtles.png';
import turtleBeam from './Images/img_TurtleBeam.png';
import dollimpanImg from './Images/dollimpan_img.png';
import dollimpanText from './Images/dollimpan_text.png';

function App() {
    // -------마우스 클릭 커서 이벤트-----------------------
    const [isMouseClick, setIsMouseClick] = useState(false);

    const handleMouseClick = () => {
        setIsMouseClick(true);

        setTimeout(() => {
            setIsMouseClick(false);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('click', handleMouseClick);
        };
    }, []);

    // -------스크롤 이벤트-----------------------
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

    const card1Style = {
        transform: card1Transform,
        left: '40%',
        top: '40%',
    };

    const card2Style = {
        transform: card2Transform,
        right: '10%',
        top: '50%',
    };

    const card3Style = {
        transform: card3Transform,
        left: '20%',
        bottom: '30%',
    };

    return (
        <div className={`App ${isMouseClick ? 'is-clicked' : ''}`}>
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
                <img src={temporaryCard1} alt="Greetings - Temporary Card 1" className="header-scroll-img" style={card1Style} />
                <img src={temporaryCard2} alt="Greetings - Temporary Card 2" className="header-scroll-img" style={card2Style} />
                <img src={temporaryCard3} alt="Greetings - Temporary Card 3" className="header-scroll-img" style={card3Style} />
            </div>

            {/*---중앙------------------------------------------*/}
            <div className="mid-part">
                {/*---몇 명이서 왔어--------------------------*/}
                <div className="how-many-are-you">
                    {/* 왼쪽 이미지 */}
                    <img src={aPlaceForTurtle} alt="A Place for Turtles" className="left-image" />
                    {/* 오른쪽 텍스트 박스 */}
                    <div className="mid-slide-box">
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
                    <div className="mid-slide-box">
                        <p>혹시 어떤거 좋아해?</p>
                        <div>
                            <p>추리</p>
                            <p>파티</p>
                            <p>마피아</p>
                            <p>덱 빌딩</p>
                        </div>
                    </div>
                    <img src={turtleBeam} alt="Genre - Turtles Beam" className="left-image" />
                </div>

                {/*---검색---------------------------------*/}
                <div className="search-games">
                    <input type="text" placeholder="이 게임이 있을까?" className="search-input" />
                    <span className="search-icon">&#128269;</span>
                </div>

                {/*---돌림판---------------------------------*/}
                <div className="dol-lim-pan">
                    <img src={dollimpanImg} alt="Dollimpan Image" className="dollimpan-img" />
                    <img src={dollimpanText} alt="Dollimpan Text" className="dollimpan-text" />
                </div>
            </div>

            {/*---하단------------------------------------------*/}
            <div className="bottom-part">
                <p>거북이에서는 지금...🐢</p>
                <div className="bottom-three-cards"></div>
            </div>
        </div>
    );
}

export default App;