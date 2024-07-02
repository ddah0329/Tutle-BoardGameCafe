// turtle_co/src/components/section/Header.jsx

import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header id='header' role='banner'>
                <link rel="icon" type="image/svg+xml" href="../../../public/favicon.svg"/>

                <nav className='header__menu'>
                    <ul className='menu'>
                        <li className='active'>
                            <a href='/gamelist'>
                                인원별 | 장르별 게임
                            </a>
                        </li>
                        {/* 로고 이미지 추가 */}
                        <li className='logo'>
                            <img
                                src='/Users/dahyoun/Documents/coding/Project/turtle_co/src/assets/img/logo_heyTurtle.png'
                                alt='HeyTurtle 로고'/>
                        </li>
                        <li className='active'>
                            <a href='https://www.naver.com/'>
                                가맹문의
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>

        );
    }
}

export default Header;