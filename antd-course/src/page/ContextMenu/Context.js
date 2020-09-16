import React from 'react'
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'

const onClick = ({ event, props }) => console.log(event, props)

// 创建菜单内容
const MyAwesomeMenu = () => (
  <Menu id="menu_id">
    <Item onClick={onClick}>Lorem</Item>
    <Item onClick={onClick}>Ipsum</Item>
    <Separator />
    <Item disabled>Dolor</Item>
    <Separator />
    <Submenu label="Foobar">
      <Item onClick={onClick}>Foo</Item>
      <Item onClick={onClick}>Bar</Item>
    </Submenu>
  </Menu>
)

class ContextMenu extends React.Component {
  render() {
    return (
      <div>
        <MenuProvider id="menu_id" style={{ border: '1px solid purple', display: 'inline-block' }}>
          右键点击
        </MenuProvider>
        <MyAwesomeMenu />
      </div>
    )
  }
}

export default ContextMenu
