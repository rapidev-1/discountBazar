import React from 'react'
import { Input } from 'antd'
import DiscountBazarIcon from '../Icons'

function SearchBar({ onSearch, icon, placeholder, style }) {
    return (
        <Input.Search
            style={style}
            placeholder={placeholder ? placeholder : "input search text"}
            enterButton={
                <DiscountBazarIcon icon={icon} />
            }
            size="middle"
            onSearch={onSearch}
        />
    )
}

export default SearchBar