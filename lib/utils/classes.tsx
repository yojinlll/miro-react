export default function (component: string, className: string | undefined,  key = 'miro'): string{
  const classes =  className ? `${key}-${component} ${className}` : `${key}-${component}`
  return classes.trim()
}