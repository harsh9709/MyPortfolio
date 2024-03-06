import { useEffect, useRef } from 'react'
import hkvPic from '../../../assets/images/hkv.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        // ref={solidLogoRef}
        src={hkvPic}
        style={{
          display: 'inline-block',
          // transform: 'rotate(45deg)',
          borderRadius: '50%',
        }}
        alt="My profile pic"
      />
    </div>
  )
}

export default Logo
