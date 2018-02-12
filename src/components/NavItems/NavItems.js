import React, { Component } from 'react';
import './NavItems.css';
import Logo from '../../assets/imgs/logo.png';
import $ from 'jquery';

class NavItems extends Component {
    state = {
        pastScrolled: false,
        isMobile: false,
        isMobileOpen: false,
    }
    componentDidMount() {
        this.resizeHandler();
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.resizeHandler);

        // Events.scrollEvent.register('begin', function (to, element) {
        //     console.log("begin", arguments);
        // });

        // Events.scrollEvent.register('end', function (to, element) {
        //     console.log("end", arguments);
        // });
       

    }


    linkClickHandler = (e) => {
        e.preventDefault();
        let sectionID = e.target.getAttribute('href');
        if(this.state.isMobile && this.state.isMobileOpen){
            this.closeMobileHandler();
        }
        $('html, body').animate({
            scrollTop:$(sectionID).offset().top
        },500);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.pastScrolled !== this.state.pastScrolled ||
            nextState.isMobile !== this.state.isMobile ||
            nextState.isMobileOpen !== this.state.isMobileOpen;
    }
    scrollHandler = (e) => {
        let clientHeight = this.navBar.clientHeight;
        let offset = 80;
        if (window.pageYOffset > (clientHeight - offset)) {
            this.setState({ pastScrolled: true });
        } else {
            this.setState({ pastScrolled: false });
        }
    }
    resizeHandler = (e) => {
        if (window.innerWidth <= 768) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }
    openMobileHandler = (e) => {
        this.setState({ isMobileOpen: true });
    }
    closeMobileHandler = (e) => {
        this.setState({ isMobileOpen: false });
    }

    render() {
        const ListItems = [
            {
                caption: 'Home',
                url: '#s-home'
            },
            {
                caption: 'About',
                url: '#s-about'
            },
            {
                caption: 'Gallery',
                url: '#s-gallery'
            },
            {
                caption: 'FAQ',
                url: '#s-gallery'
            },
            {
                caption: 'Find Us',
                url: '#s-findUs'
            },
            {
                caption: 'Contact',
                url: '#s-contactUs'
            },
        ];
        let classes = ['NavItems'];
        let navList = (
            <ul className="NavItems--list reset-list">
                {ListItems.map((item, idx) =>
                    <li key={item.caption}><a href={item.url} onClick = {this.linkClickHandler}>{item.caption}</a></li>
                    // <li key={item.caption}><Link activeClass = "active" to = {item.url} spy = {true} smooth = {true}>{item.caption}</Link></li>
                )}
            </ul>
        );
        let openMobileBtn = null;
        if (this.state.pastScrolled) {
            classes.push('scrolled');
        }
        if (this.state.isMobile) {
            classes.push('NavItems--isMobile');
            navList = (
                <div className="NavItems--isMobile__wrapper">
                    <ul className="NavItems--list--mobile reset-list">
                        {ListItems.map((item, idx) =>
                            <li key={item.caption}><a onClick = {this.linkClickHandler} href={item.url}>{item.caption}</a></li>
                            // <li key={item.caption}><Link onSetActive = {this.handleSetActive} smooth = {false} activeClass = "active" to = {item.url} spy = {true}>{item.caption}</Link></li>
                        )}
                    </ul>
                    <button onClick={this.closeMobileHandler} className="NavItems--isMobile__closebtn appereance"><span className="accessible-hide">Close Menu</span><span>X</span></button>
                </div>
            );
            openMobileBtn = <button onClick={this.openMobileHandler} className="NavItems--isMobile__openbtn appereance" type="button"><span className="accessible-hide">Open Menu</span><span className="fa fa-bars"></span></button>
        }
        if (this.state.isMobile && this.state.isMobileOpen) {
            classes.push('NavItems--isMobile--open');
        }
        return (
            <nav className={classes.join(' ')} ref={(ref) => this.navBar = ref}>
                <div className="NavItems__wrapper">
                    {navList}
                    <a href="/index.html" className="main-logo">
                        <img src={Logo} alt="Ink Tatto Logo" />
                    </a>
                    {openMobileBtn}
                </div>
            </nav>
        );
    }
};

export default NavItems;