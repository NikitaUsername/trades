import React, { useState } from 'react';
import DisplayContainer from '../CustomTable';
import { Input, InputNumber } from 'antd';
import styles from './Trades.module.css';
const url = '/trades';

const Trades = () => {

    const [filters, setFilters] = useState({
        client: '',
        instrument: '',
        direction: '',
        quantity: ''
    });

    const changeFilter = (type, value) => {
        if (!value)
            value = '';
        setFilters(oldFilters => ({
            ...oldFilters,
            [type]: value.toString().toLowerCase()
        }));
    }

    const columns = [
        {
            title: "Id",
            dataIndex: 'id'
        },
        {
            title: 'Client',
            dataIndex: 'client'
        },
        {
            title: 'Instrument',
            dataIndex: 'instrument'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity'
        },
        {
            title: 'Direction',
            dataIndex: 'direction'
        },
    ];

    return (
        <div>

            <DisplayContainer filters={filters} url={url} columns={columns} >
                <div className={styles.filters} >
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
            </DisplayContainer>
        </div>
    );
};

export default Trades;