import React from 'react';
import styles from './FaqTextContainer.module.css';

function FaqTextContainer(props) {
    return (
        <div className={styles.FaqTextContainer}>
            {props.children}
        </div>
    );
}

export default FaqTextContainer;