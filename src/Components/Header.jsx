import logo from '../images/logo.webp'
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {

    const location = useLocation();

    useEffect(() => {
        const links = [...document.querySelectorAll(".link")];
        links.forEach(
            (a)=>{
                if(a.name===location.pathname) {
                    a.classList.add("active");
                }
                else{
                a.classList.remove("active");
                }
            }
        )
    },[location])

    const NavButton = (a) => {
        let navbar = document.getElementById("nav-list");
        let style = getComputedStyle(navbar);
        let checkStyle = style.display;
        if (checkStyle === "none") {
            navbar.style.display = "block";
            setTimeout(() => {
                navbar.style.opacity = "1";
            }, 100);
            
            document.querySelector(".nav-btn").innerHTML = "Close";
        } else {
            setTimeout(() => {
                navbar.style.display = "none";
            },200);
            document.querySelector(".nav-btn").innerHTML = "Menu";
            navbar.style.opacity = "0";
        }
    }


    return (
        <div className="container hd-container">
            <div className="logo-box">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <button className="nav-btn" onClick={NavButton}>Menu</button>
            <nav>
                <ul id="nav-list">
                    <li><Link className="link" to="shorts" name="/shorts">Shorts</Link></li>
                    <li><Link className="link" to="shirts" name="/shirts">Shirts</Link></li>
                    <li><Link className="link" to="dress" name="/dress">Dresses</Link></li>
                    <li><Link className="link" to="tops" name="/tops">Tops</Link></li>
                    <li><Link className="link" to="t-shirts"  name="/t-shirts">T-shirts</Link></li>
                    <li><Link className="link" to="jeans"  name="/jeans">Jeans</Link></li>
                </ul>
            </nav>
        </div>
    )
}