import React from 'react';
import styles from './CustomButton.module.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';


const CustomButton = ({ title, link, setSelected }) => {
    const { pathname } = useLocation();

    return (
        <div>
            <Link to={link}>
                <Button
                    className={styles.button}
                    type={pathname === link ? 'primary' : 'default'}
                >
                    {title}
                </Button>
            </Link>
        </div>
    );
};

export default CustomButton;