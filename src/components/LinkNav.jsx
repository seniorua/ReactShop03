export const LinkNav = (props) => {
const conslog = (e) => console.log(e) 
  return (
    <a 
      className={`nav-link`} 
      onClick={e => console.log(e.target)}
      onMouseEnter={e => console.log(e.target)} 
      href={props.href}
    >
      {props.name}
    </a>
  )
}