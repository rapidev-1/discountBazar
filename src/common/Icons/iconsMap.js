import { HiOutlineMail } from "react-icons/hi"
import { BiPhoneCall, } from "react-icons/bi"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
import { FaRegHeart, FaFacebook } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"

const cn = 'DiscountBazarIcon'
export const iconmap = {
    'email': <HiOutlineMail className={cn} />,
    'call': <BiPhoneCall className={cn} />,
    'cart': <FiShoppingCart className={cn} />,
    'user': <FiUser className={cn} />,
    'wishlist': <FaRegHeart className={cn} />,
    'search': <FiSearch className={cn} />,
    'burger': <FiMenu className={cn} />,
    'facebook': <FaFacebook className={cn} />,
    'twitter': <BsTwitter className={cn} />,
    'instagram': <AiFillInstagram className={cn} />
}