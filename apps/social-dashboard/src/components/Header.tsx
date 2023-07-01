import { Component } from "solid-js"


const Header: Component = () => {
    return (
        <header>
            <div class="logo">
                <h1>Social Media Dashboard</h1>
                <small>Total Followers: 23,004</small>
            </div>
            <hr />
            <div class="theme">
                <small>Dark Mode</small>
                <span class="icon">
                    <span class="ball"></span>
                </span>
            </div>
        </header>
    )
}


export default Header
