import '../elements/element.css';

const column = [
    {
        name: <span className='categoryText'>קטגוריה</span>,
        selector: row => row.name
    },
    {
        name: <span className='studiesText'>לימודים יומיים</span>,
        selector: row => row.type
    },
    {
        name: <span className='seriolText'>לא.</span>,
        selector: row => row.srNo
    }
]


export { column };