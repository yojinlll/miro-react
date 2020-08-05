import React, { SVGAttributes } from 'react'
import '../svg/index.js'
import './icon.scss'


interface IconProps extends SVGAttributes<SVGElement> {
  name: string
}

const Icon:React.FC<IconProps> = (props)=>{
  return (
    <svg className='miro-icon' { ...props }>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon