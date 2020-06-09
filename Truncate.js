
//Imports: Dependencies
import React from "react";

//Imports: Styles
import styles from "./style.css";

const Truncate = ({ children, line = 1 } = props) => {
    return (
        <div className={styles.truncatedContainer}>
            <p style={{ WebkitLineClamp: line }} className={styles.truncatedText} >
                {children}
            </p>
        </div>
    );
};

export default Truncate;
