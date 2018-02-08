import React, { Component } from 'react';
import './NavItems.css';
import Logo from '../../assets/imgs/logo.png';

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
        console.log('resizing');
    }
    closeMobileHandler = (e) =>{
        this.setState({isMobileOpen:false});
    }
    render() {
        const ListItems = [
            {
                caption: 'Home',
                url: '/'
            },
            {
                caption: 'About',
                url: '/'
            },
            {
                caption: 'Gallery',
                url: '/'
            },
            {
                caption: 'FAQ',
                url: '/'
            },
            {
                caption: 'Find Us',
                url: '/'
            },
            {
                caption: 'Contact',
                url: '/'
            },
        ];
        let classes = ['NavItems'];
        let navList = (
            <ul className="NavItems--list reset-list">
                {ListItems.map((item, idx) =>
                    <li key={item.caption}><a href={item.url}>{item.caption}</a></li>
                )}
            </ul>
        );
        if (this.state.pastScrolled) {
            classes.push('scrolled');
        }
        if (this.state.isMobile) {
            classes.push('NavItems--isMobile');
            navList = (
                <div className = "NavItems--isMobile__wrapper">
                    <ul className="NavItems--list--mobile reset-list">
                        {ListItems.map((item, idx) =>
                            <li key={item.caption}><a href={item.url}><span>{item.caption}</span></a></li>
                        )}
                    </ul>
                    <button onClick = {this.closeMobileHandler} className="NavItems--isMobile__closebtn appereance"><span className = "accessible-hide">Close Menu</span><span>X</span></button>
                </div>
            );
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
                </div>
            </nav>
        );
    }
};

export default NavItems;