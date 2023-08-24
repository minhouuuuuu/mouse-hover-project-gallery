'use client';
import React from 'react'
import styles from './style.module.css';

export default function Index({index, title, url, setModal}) {
    const handleDivClick = () => {
        console.log('url:', url);
        window.location.href = url;
      };

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} onClick={handleDivClick} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}
