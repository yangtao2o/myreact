import React from 'react'
import { Button } from 'antd'
import { Menu, Item, Separator, Submenu, MenuProvider, contextMenu, IconFont, theme, animation } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'

const menuId = 'menuId'
const myMenuId = 'myMenuId'

// 禁止点击Item或者Submenu的方式
const isDisabled = ({ event, props }) => true

// 菜单点击事件
const onClick = ({ event, props }) => console.log(event, props)

const onClickMenu = ({ event, props }) => {
  alert(
    JSON.stringify(
      {
        x: event.clientX,
        msg: props.msg,
      },
      null,
      2
    )
  )
}

// 创建菜单内容
const MyAwesomeMenu = () => (
  <Menu
    id={menuId}
    theme={theme.dark}
    animation={animation.zoom}
    onShown={() => console.log('SHOWN')}
    onHidden={() => console.log('HIDDEN')}
  >
    <Item onClick={onClick}>Lorem</Item>
    <Item>
      <IconFont className="fa fa-trash" />
      Delete
    </Item>
    <Separator />
    <Item disabled>Dolor1</Item>
    <Item disabled={isDisabled}>Dolor2</Item>
    <Separator />
    <Submenu label="Foobar" arrow="&gt;">
      <Item onClick={onClick}>Foo</Item>
    </Submenu>
  </Menu>
)

const MyMenu = () => (
  <Menu id={myMenuId}>
    <Item onClick={onClickMenu}>Click Me</Item>
  </Menu>
)

// 自定义菜单内容
function handleEvent(e) {
  e.preventDefault()
  contextMenu.show({
    id: myMenuId,
    event: e,
    props: {
      msg: 'hello',
    },
  })
}

class ContextMenu extends React.Component {
  render() {
    return (
      <div>
        <MenuProvider id={menuId}>
          <Button type="primary" size="large">
            使用 MenuProvider
          </Button>
        </MenuProvider>
        <MyAwesomeMenu />
        <br />
        <Button onContextMenu={handleEvent} type="primary" size="large">
          未使用 MenuProvider
        </Button>
        <MyMenu />
      </div>
    )
  }
}

export default ContextMenu
