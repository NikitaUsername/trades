import React, { useState } from 'react';

export const withFilters = (Component) => {

    const Wrapper = props => {

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

        return <Component filters={filters} changeFilter={changeFilter} {...props} />
    }

    return Wrapper;
};
