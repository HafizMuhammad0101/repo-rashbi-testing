import Dropdown from "../../../dropdown/Dropdown";
import './element.css';

const data = [
    {
        name: <Dropdown id="dropdown1" numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>חינם</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.1'
    },
    {
        name: <Dropdown id="dropdown2" numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>בתשלום</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.2'
    },
    {
        name: <Dropdown id="dropdown7"  numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>חינם</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.3'
    }, {
        name: <Dropdown id="dropdown3"  numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>בתשלום</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.4'
    }, {
        name: <Dropdown id="dropdown4"  numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>בתשלום</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.5'
    }, {
        name: <Dropdown id="dropdown5"  numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>חינם</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.6'
    }, {
        name: <Dropdown id="dropdown6"  numberOfItems='2' title1="לְאַשֵׁר" title2="לִמְחוֹק" />,
        type: <span className='fileSpan'>בתשלום</span>,                                       // FREE
        file: <span className='fileSpan'>שֵׁם</span>,                                         // NAME
        srNo: '.7'
    },
]


const column = [
    {
        name: <span className='categoryText'>קטגוריה</span>,                        // CATEGORY
        selector: row => row.name
    },
    {
        name: <span className='typeText'>סוג</span>,                             // TYPE
        selector: row => row.type
    },
    {
        name: <span className='fileText'>בקשות</span>,                           // REQUESTS
        selector: row => row.file
    },
    {
        name: <span className='seriolText'>לא.</span>,                              // NOT.
        selector: row => row.srNo
    }
]


export { column, data };