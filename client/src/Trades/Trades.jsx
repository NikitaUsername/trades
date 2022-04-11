import React from 'react';
import CustomTable from '../CustomTable';
import FiltersView from './FiltersView';
import { withFilters } from '../hocs/withFilters';
const url = '/trades';

const Trades = withFilters(({ changeFilter, filters }) => {

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
            <FiltersView changeFilter={changeFilter} />
            <CustomTable filters={filters} url={url} columns={columns} />
        </div>
    );
});

export default Trades;