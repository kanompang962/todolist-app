import React from 'react'
import { AiOutlineClose, AiOutlineForm } from "react-icons/ai";

const List = ({ item, removeItem, editItem }) => {
    return (
        <div className='list-item'>
            <p> {item.title}</p>
            <div className='btn-item'>
                <AiOutlineForm onClick={() => editItem(item.id)} />
                <AiOutlineClose onClick={() => removeItem(item.id)} />
            </div>
        </div>
    )
}

export default List