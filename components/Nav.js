// help from https://tailwindui.com/
import React from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: [
                { name: "Home", href: "home", current: true },
                { name: "About", href: "about", current: false },
                { name: "Projects", href: "projects", current: false },
                { name: "Experience", href: "experience", current: false },
                { name: "Contact", href: "contact", current: false },
            ] 
        }
        this.setNav = this.setNav.bind(this);
    }

    setNav = (itemName) => {
        this.setState(prevState => ({
            ...prevState,
            navigation: prevState.navigation.map(item => ({
                ...item,
                current: item.name === itemName 
            }))
        }));
    }

    render() {
        return (
            <nav className="fixed top-0 z-10 w-screen bg-zinc-800 flex flex-row h-16 items-center pl-4">
                <img src="/android-chrome-192x192.png" alt="pigeon icon" className="object-contain h-12 w-12"/>
                <div className="flex gap-x-8 items-center justify-center px-8">
                    {typeof window !== "undefined" ? 
                        this.state.navigation.map((item) => (
                            <Link key={item.name} activeClass="active" to={item.href} spy={true} smooth={true} duration={700}>
                                <div
                                href={item.href}
                                onClick={(e) => this.setNav(item.name, e)}
                                className={classNames(
                                    item.current ? "bg-zinc-900 text-white" : "text-zinc-300 hover:bg-zinc-700 hover:text-white", "px-3 py-3 rounded-md text-sm font-medium cursor-pointer"
                                )}
                                aria-current={item.current ? "page" : undefined} 
                                >
                                {item.name}
                                </div>
                            </Link> 
                        )) 
                        : 
                        this.state.navigation.map((item) => (
                            <Link key={item.name}>
                                <div
                                href={item.href}
                                onClick={(e) => this.setNav(item.name, e)}
                                className={classNames(
                                    item.current ? "bg-zinc-900 text-white" : "text-zinc-300 hover:bg-zinc-700 hover:text-white", "px-3 py-3 rounded-md text-sm font-medium cursor-pointer"
                                )}
                                aria-current={item.current ? "page" : undefined}
                                >
                                {item.name}
                                </div>
                            </Link> 
                        ))
                    }
                </div>
            </nav>
        )
    } 
}

export default Nav;
