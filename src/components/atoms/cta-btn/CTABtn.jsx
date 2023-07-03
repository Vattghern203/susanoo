import React from 'react'
import './cta-btn.module.css'

export default function CTABtn({ btnTxt, onClickFn }, props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        color: props.txtColor
      }}

      onClick={onClickFn || undefined}

    >
        {btnTxt}
    </button>
  )
}
