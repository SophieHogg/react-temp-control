import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ temp, setTemp }) => {
    const increaseTemp = () => {
        setTemp(temp + 1);
    };
    const decreaseTemp = () => {
        setTemp(temp - 1);
    };
    return (
        <div className={styles.Buttons}>
            <button
                className={styles.Buttons__minus}
                onClick={() => decreaseTemp()}
            >
                -
            </button>
            <button
                className={styles.Buttons__plus}
                onClick={() => increaseTemp()}
            >
                +
            </button>
        </div>
    );
};

export default Buttons;
