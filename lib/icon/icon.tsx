import React from 'react'
import '../svg/index.js'
import './icon.scss'


interface IconProps {
  name: string
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon:React.FC<IconProps> = (props)=>{
  return (
    <svg className='miro-icon' onClick={ props.onClick }>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon