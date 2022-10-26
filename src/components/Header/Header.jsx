import React from "react";
import styles from "./Header.module.scss";
import logo from "./../../assets/daikin-logo.png";

const Header = () => {
    return (
        <div className={styles.Header}>
            <img
                src={logo}
                alt="Daikin logo"
                className={styles.Header__image}
            />
            <h1 className={styles.Header__title}>Temperature Control</h1>
        </div>
    );
};

export default Header;
