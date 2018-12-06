import React from 'react'
import './RenderFormField.css'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
    <div>
      <input className="stake-from-input"  {...input} placeholder={label} type={type} />
      {touched &&
        (error && <div className="app-text">{error}</div>)}
    </div>
)