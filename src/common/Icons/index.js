import React from 'react'
import { iconmap } from './iconsMap'

function DiscountBazarIcon({
    dir,
    text,
    icon,
    onClick,
    className
}) {
    const handleclick = () => {
        if (typeof (onClick) === 'function') {
            onClick();
        }
    }
    return (
        <div className={`${className} ${dir} DiscountBazarIconWrapper`} onClick={handleclick}>
            {iconmap[icon]}
            {
                text ?
                    <div className={`icontext ${dir}`}>
                        {text}
                    </div>
                    : null
            }
        </div>
    )
}

export default DiscountBazarIcon