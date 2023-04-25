import React from 'react';
import profile from '../styles/Profile.module.scss';
import Jason from '../images/JasonLe.jpg';
import Arrow from '../images/searchbar_arrow.png';
import Lock from '../images/lock.png';

class Profile extends React.PureComponent {
    render() {
        return (
            <div className={profile.container}>
                <div class={profile.left_column}>
                    <div className={profile.terminal_bar}>
                        <div className={`${profile.circle_button} ${profile.red}`} />
                        <div className={`${profile.circle_button} ${profile.yellow}`} />
                        <div className={`${profile.circle_button} ${profile.green}`} />
                        <div className={profile.white_box} />
                        <img className={profile.left_arrow} src={Arrow} alt="Left Arrow" />
                        <div className={profile.white_box} />
                        <img className={profile.right_arrow} src={Arrow} alt="Right Arrow" />
                        <div className={profile.search_bar} />
                        <img className={profile.lock} src={Lock} alt="Lock" />
                        <div className={profile.search_text}>www.jasonle.com</div>
                    </div>
                    <img className={profile.Jasonimage} src={Jason} alt="Jason Portrait" />
                </div>
                <div class={profile.right_column}>
                    <div className={profile.description}>
                        As a software developer, I’ve become more<br />
                        interested in web development and web design.<br />
                        I’ve included my work experience and side projects<br />
                        that I’ve done below so take a look around :)
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;