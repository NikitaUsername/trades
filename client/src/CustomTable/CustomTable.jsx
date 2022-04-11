import React, { useEffect, useState } from 'react';
import { Table, Spin, Button } from 'antd';
import axios from 'axios';
import styles from './CustomTable.module.css'

const CustomTable = ({ filters, columns, url, children }) => {

    useEffect(() => {
        getData()
    }, [])

    const [error, setError] = useState(false);
    const [data, setData] = useState(undefined);

    const getData = async () => {
        setError(false);
        const response = await axios.get(url)
            .catch((_) => {
                setError(true);
            })
        if (!response)
            return
        setData(response.data);
    }

    if (error)
        return (
            <div className={styles.content}>
                <p>
                    Something went wrong :(
                </p>
                <Button onClick={getData}>
                    Try again
                </Button>
            </div>
        )

    if (!error && data)
        return (
            <div>
                <Table
                    rowKey={'id'}
                    className={styles.table}
                    columns={columns}
                    dataSource={data.filter(row => {
                        for (let el in filters) {
                            if (!filters[el] || !row[el])
                                continue;
                            if (!row[el].toString().toLowerCase().includes(filters[el]))
                                return false
                        }
                        return true
                    }
                    )}
                />
            </div>
        )

    if (!error && !data)
        return (
            <Spin
                size='large'
                className={styles.content}
            />
        )
};

export default CustomTable;