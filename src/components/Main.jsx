import { wareObj } from "../constants/wareData"
import { Wares } from "./Wares"

export const Main = (props) => {
  console.log('render Main');
  return (
    <main>
      <h1>Смартфоны:</h1>
      <div className="ware-box">
        {wareObj.map(item => {
          return (
            <Wares key='item.model' ware={item}></Wares>
          )
        })}
        {/* {props.wares.map(item => {
          return (
            <Wares key='item.model' ware={item}></Wares>
          )
        })} */}
      </div>
    </main>
  )
}