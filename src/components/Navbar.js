import React, { Component } from 'react'
import logo from '../images/h-logo.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen: false,
        scrollPosition: 0,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll= () => {
        const scrollPosition = window.scrollY;
        this.setState({scrollPosition});
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

  render() {
    const {isOpen, scrollPosition} = this.state;
    const isNavChange = scrollPosition >= (window.innerHeight - 60);
      return (
        <nav className={`navbar ${isNavChange ? 'change-nav' : ''}`}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to={'/'}>
                        <img src={logo} alt="Beach Resort" />
                        Himaran
                    </Link>
                    <button type='button' className='nav-btn' onClick={this.handleToggle}>
                        <FaAlignRight className='nav-icon' />
                    </button>
                </div>
                <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/rooms'}>Rooms</Link>
                    </li>
                    <li><Link to='#'>About</Link></li>
                    <li><Link to='#'>Contact</Link></li>
                </ul>
            </div>
      </nav>
    )
  }
}
