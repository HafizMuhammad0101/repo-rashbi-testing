import React from 'react'

export default function Input({ type, accept, placeholder, inputClass, parentalClass, id, onChange, onClick, name, style, onFocus, value }) {
    return (
        <div className={parentalClass}>
            <input accept={accept} type={type} placeholder={placeholder} className={inputClass} id={id} onChange={onChange} onClick={onClick} onFocus={onFocus} name={name} style={style} value={value} />
        </div>
    )
}
