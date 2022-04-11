import React from 'react';
import styles from './Header.module.css';
import CustomButton from '../CustomButton';

const Header = () => {
    return (
        <div className={styles.header}>
            <CustomButton
                link={'/trades'}
                title='Trades' />
            <CustomButton
                link={'/positions'}
                title='Positions' />
        </div>
    );
};

export default Header;