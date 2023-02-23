import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import DiscountBazarIcon from '../Icons'
import { useNavigate } from 'react-router-dom'

function SearchBar({ onSearch, icon, placeholder, style }) {
    const [text, settext] = useState(null)
    useEffect(() => {
        return () => { settext(null) }
    }, [])
    const navigate = useNavigate()
    const gotoSearch = () => {
        navigate('/search')
        onSearch()
    }
    return (
        <Input.Search
            style={style}
            value={text}
            onChange={e => settext(e.target.value)}
            placeholder={placeholder ? placeholder : "input search text"}
            enterButton={
                <DiscountBazarIcon icon={icon} />
            }
            size="middle"
            onSearch={() => icon === "search" ? gotoSearch() : onSearch()}
        />
    )
}

export default SearchBar