import React from 'react'
import './cta-btn.module.css'

export default function CTABtn(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        color: props.txtColor
      }}

    >
        {props.name}
    </button>
  )
}
