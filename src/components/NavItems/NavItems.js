import React, { Component } from 'react';
import './NavItems.css';
import Logo from '../../assets/imgs/logo.png';

class NavItems extends Component {
    state = {
        pastScrolled: false
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.pastScrolled !== this.state.pastScrolled;
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
        if (this.state.pastScrolled) {
            classes.push('scrolled');
        }
        return (
            <nav className={classes.join(' ')} ref={(ref) => this.navBar = ref}>
                <div className="NavItems__wrapper">
                    <ul className="NavItems--list reset-list">
                        {ListItems.map((item, idx) =>
                            <li key={item.caption}><a href={item.url}>{item.caption}</a></li>
                        )}
                    </ul>
                    <a href="/index.html" className="main-logo">
                        <img src={Logo} alt="Ink Tatto Logo" />
                    </a>
                </div>
            </nav>
        );
    }
};

export default NavItems;