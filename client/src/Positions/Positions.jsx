import React, { useState } from 'react';
import CustomTable from '../CustomTable';
import styles from './Positions.module.css';
import { Input, InputNumber } from 'antd';
const url = '/positions';

const Positions = () => {

    const [filters, setFilters] = useState({
        client: '',
        instrument: '',
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
    ];

    return (
        <div>

            <CustomTable filters={filters} url={url} columns={columns} >
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
                </div>
            </CustomTable>
        </div>
    );
};

export default Positions;