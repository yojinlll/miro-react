import React from 'react'
import '../svg/index.js'
import './icon.scss'


interface IconProps {
  name: string
}

const Icon:React.FC<IconProps> = (props)=>{
  return (
    <svg className='miro-icon'>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon