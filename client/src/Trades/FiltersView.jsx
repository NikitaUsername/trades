import React from 'react';
import styles from './Trades.module.css';
import { Input, InputNumber } from 'antd';

const FiltersView = ({ changeFilter }) => {
    return (
        <div className={styles.filters}>
            <h2>Filters</h2>
            <div className={styles.filter}>
                <p className={styles.filterName}>Client</p>
                <Input onChange={(e) => changeFilter('client', e.target.value)} className={styles.filterInput} />
            </div>
            <div className={styles.filter}>
                <p className={styles.filterName}>Instrument</p>
                <Input onChange={(e) => changeFilter('instrument', e.target.value)} className={styles.filterInput} />
            </div>
            <div className={styles.filter}>
                <p className={styles.filterName}>Quantity</p>
                <InputNumber onChange={(e) => changeFilter('quantity', e)} className={styles.filterInput} />
            </div>
            <div className={styles.filter}>
                <p className={styles.filterName}>Direction</p>
                <Input onChange={(e) => changeFilter('direction', e.target.value)} className={styles.filterInput} />
            </div>
        </div>
    );
};

export default FiltersView