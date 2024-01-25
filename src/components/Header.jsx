import { linkDataHeader } from "../constants/headerLinkData"
import { LinkNav } from "./LinkNav"

export const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">ЭLектRоника :)</div>
        <nav className="header-nav">
          {
            linkDataHeader.map(item => {
              return (
                <LinkNav key={item.name} name={item.name} href={item.href} />
              )
            })
          }
        </nav>
      </div>
    </header>
  )
}
