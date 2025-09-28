import React from "react";
import { useState, useEffect } from "react";

function Header({ isLogin, isAdmin }) {

    



    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src="/logo192.png" alt="Ecommerce Logo" className="header-logo-img" />
                    <span className="header-logo-text">Ecommerce</span>
                </div>

                <nav className="header-navigation">
                    <ul className="header-nav-list">
                        <li className="header-nav-item">
                        </li>
                        <li className="header-nav-item">
                        </li>
                        <li className="header-nav-item">
                        </li>
                        <li className="header-nav-item">
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="header-search">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="header-search-input"
                        />
                        <button className="header-search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="header-user-actions">
                        {isLogin ? (
                            <>
                                <button className="header-action-btn header-cart-btn">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="header-cart-count">0</span>
                                </button>
                                <button className="header-action-btn header-profile-btn">
                                    <i className="fas fa-user"></i>
                                </button>
                                {isAdmin && (
                                    <button className="header-action-btn header-admin-btn">
                                        <i className="fas fa-cog"></i>
                                    </button>
                                )}
                            </>
                        ) : (
                            <div className="header-auth-buttons">
                                <button className="header-action-btn header-login-btn">Login</button>
                                <button className="header-action-btn header-register-btn">Register</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;