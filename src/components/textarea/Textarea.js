import React from 'react'
import "./textarea.css";
export default function Textarea({ parentalClass, textareaClass, rows, onChange, value }) {
    return (
        <div className={parentalClass}>
            <textarea onChange={onChange} className={textareaClass} rows={rows} value={value}></textarea>
        </div>
    )
}
