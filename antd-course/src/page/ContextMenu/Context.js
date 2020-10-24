import React from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import './react-contextmenu.css'

const MENU_TYPE = 'SIMPLE'

const targets = [
  {
    name: 'Banana',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Papaya',
  },
  {
    name: 'Mango',
  },
  {
    name: 'Orange',
  },
  {
    name: 'Pineapple',
  },
]

function collect(props) {
  return { name: props.name }
}

class Customization extends React.Component {
  constructor(props) {
    super(props)

    this.state = { logs: [] }
  }

  handleClick = (e, data) => {
    this.setState(({ logs }) => ({
      logs: [`Clicked on ${data.name} menu ${data.item}`, ...logs],
    }))
  }

  render() {
    return (
      <div>
        <h3>Custom Wrappers</h3>
        <p>
          This demo shows usage of customization. Instead of using <code>div</code>(s) by default, we are using{' '}
          <code>tr</code>(s)
        </p>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Fruit</th>
            </tr>
          </thead>
          <tbody>
            {targets.map((item, i) => (
              <ContextMenuTrigger
                renderTag="tr"
                name={item.name}
                id={MENU_TYPE}
                holdToDisplay={1000}
                key={i}
                collect={collect}
              >
                <td>{i + 1}</td>
                <td>{item.name}</td>
              </ContextMenuTrigger>
            ))}
          </tbody>
        </table>
        <div>
          {this.state.logs.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>
        <ContextMenu id={MENU_TYPE}>
          <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>
            Menu Item 1
          </MenuItem>
          <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>
            Menu Item 2
          </MenuItem>
        </ContextMenu>
      </div>
    )
  }
}

export default Customization
