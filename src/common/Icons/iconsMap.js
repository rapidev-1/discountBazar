import { HiOutlineMail } from "react-icons/hi"
import { BiPhoneCall, } from "react-icons/bi"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"

const cn = 'DiscountBazarIcon'
export const iconmap = {
    'email': <HiOutlineMail className={cn} />,
    'call': <BiPhoneCall className={cn} />,
    'cart': <FiShoppingCart className={cn} />,
    'user': <FiUser className={cn} />,
    'wishlist': <FaRegHeart className={cn} />,
    'search': <FiSearch className={cn} />
}