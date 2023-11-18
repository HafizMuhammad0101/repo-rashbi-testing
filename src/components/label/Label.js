import React from 'react'
export default function Label({ title, labelClass, parentalClass, style, htmlFor }) {
    return (
        <div className={parentalClass} style={style}>
            <label className={labelClass} htmlFor={htmlFor}>
                {title}
            </label>
        </div>
    )
}
