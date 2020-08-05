import React, { SVGAttributes } from 'react'
import '../svg/index.js'
import './icon.scss'
import classes from '../utils/classes'

interface IconProps extends SVGAttributes<SVGElement> {
  name: string
}

const Icon:React.FC<IconProps> = (props)=>{
  const { className, name, ...restProps } = props
  return (
    <svg
      className={ classes('icon', className) }
      { ...restProps }
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon