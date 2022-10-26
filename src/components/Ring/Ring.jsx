import React from "react";
import { useEffect } from "react";
import styles from "./Ring.module.scss";

const Ring = ({ temp }) => {
    useEffect(() => {}, [temp]);
    return (
        <div className={styles.Ring}>
            <div
                className={
                    temp > 24
                        ? styles.Ring__circle__warm
                        : styles.Ring__circle__cold
                }
            >
                {temp}°C
            </div>
        </div>
    );
};

export default Ring;
