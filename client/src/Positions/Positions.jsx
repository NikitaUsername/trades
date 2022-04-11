import React from 'react';
import CustomTable from '../CustomTable';
import { withFilters } from '../hocs/withFilters';
import FiltersView from './FiltersView';
const url = '/positions';

const Positions = withFilters(({ changeFilter, filters }) => {

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
            <FiltersView changeFilter={changeFilter} />
            <CustomTable filters={filters} url={url} columns={columns} />
        </div>
    );
})

export default Positions;