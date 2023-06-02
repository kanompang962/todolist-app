import React from 'react'
import { AiOutlineClose, AiOutlineForm } from "react-icons/ai";

const List = ({ item }) => {
    return (
        <div className='list-item'>
            <p> {item.title}</p>
            <div className='btn-item'>
                <AiOutlineForm />
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default List