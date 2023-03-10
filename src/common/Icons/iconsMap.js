import { HiOutlineMail } from "react-icons/hi"
import { BiPhoneCall, } from "react-icons/bi"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
import { FaRegHeart, FaFacebook } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri"
import { IoNavigateCircleOutline } from "react-icons/io5"

const cn = 'DiscountBazarIcon'
export const iconmap = {
  email: <HiOutlineMail className={cn} />,
  close: <AiOutlineCloseCircle className={cn} />,
  send: <RiSendPlane2Fill className={cn} />,
  call: <BiPhoneCall className={cn} />,
  cart: <FiShoppingCart className={cn} />,
  user: <FiUser className={cn} />,
  wishlist: <FaRegHeart className={cn} />,
  search: <FiSearch className={cn} />,
  burger: <FiMenu className={cn} />,
  facebook: <FaFacebook className={cn} />,
  twitter: <BsTwitter className={cn} />,
  instagram: <AiFillInstagram className={cn} />,
  navigate: <IoNavigateCircleOutline className={cn} />,
};