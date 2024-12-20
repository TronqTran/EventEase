import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import NavbarAd from "../../admin/components/navbar/NavbarAd";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);

  const admin = false;

  return (
    <nav>
      {admin ? (
      
        <NavbarAd />
      ) : (
        <>
          <div className="left">
            <a href="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>EVENTEASE</span>
            </a>
            <a href="/">Home</a>
            <a href="/location">Location</a>
            <a href="/event">Event</a>
            <a href="/order">Order</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className="right">
            {user ? (
              <div className="user">
                <img
                  src= {user.image}
                  alt=""
                />           
                <Link to="/profile" className="profile">
                  <div className="notification">3</div>
                  <span>{user.username}</span>
                </Link>
              </div>
            ) : (
              <>
                <a href="/login">Sign In</a>
                <a href="/signup" className="register">
                  Sign Up
                </a>
              </>
            )}
            <div className="menuIcon">
              <img
                src="/menu.png"
                alt=""
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Order</a>
              <a href="/">Contact</a>
              <a href="/">Sign In</a>
              <a href="/">Sign up</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
