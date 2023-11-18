import { MdOutlineTableChart, MdWindow } from 'react-icons/md';
import { BsFillGearFill, BsShare } from 'react-icons/bs';
import { BiSolidVideoPlus } from 'react-icons/bi';
import { FaRegFileLines, FaUserPlus } from 'react-icons/fa6';
import { FiBookOpen } from 'react-icons/fi';
import { PiSlideshow } from 'react-icons/pi';
import { LiaNewspaper } from 'react-icons/lia';


export const elements = [{ title: "קטגוריות", icon: <MdOutlineTableChart size={25} />, to: '/categories' }, { title: "קטגוריות משנה", icon: <MdWindow size={25} />, to: "/subcategories" }, { title: "קישורים", icon: <BsShare size={25} />, to: "/links" }, { title: "ייעוץ", icon: <BiSolidVideoPlus size={25} />, to: "/consultation" }, { title: "בקשות", icon: <FaUserPlus size={25} />, to: "/requests" }, { title: "הגדרה", icon: <BsFillGearFill size={25} />, to: "/definition" }, { title: "לימודים יומיים", icon: <FiBookOpen size={25} />, to: "/daily-studies" }, { title: "סליידר ביתי", icon: <PiSlideshow size={25} />, to: "/home-slider" }, { title: "טופס פירוט", icon: <FaRegFileLines size={25} />, to: "/detail-form" }, { title: "חדשות קופצות", icon: <LiaNewspaper size={25} />, to: "/pop-up-news" }];
