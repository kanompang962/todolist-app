import React, { useEffect } from 'react'

const Alert = ({ msg, type, setAlert, list }) => {

    useEffect(() => {
        setTimeoutAlert();
    }, [list]);

    const setTimeoutAlert = () => {
        const timeout = setTimeout(() => {
            setAlert({ show: false, msg: '', type: '' });
        }, 2000);
        return () => clearTimeout(timeout);
    };

    return (
        <p className={`alert ${type}`}>
            {msg}
        </p>
    )
}

export default Alert