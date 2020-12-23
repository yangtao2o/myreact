# 动手实现 React-redux 练习

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## connect 实现

theme-context 文件：

```js
import React from 'react'
export const ThemeContext = React.createContext()
```

```js
import React, { Component } from 'react'
import { connect } from './../react-redux'

class ThemeSwitch extends Component {
  handleClick(e) {
    const color = e.target.value
    this.props.onSwitchColor(color)
  }

  render() {
    const { color } = this.props
    return (
      <div>
        <button
          style={{ color }}
          onClick={e => this.handleClick(e)}
          value="red"
        >
          Red
        </button>
        <button
          style={{ color }}
          onClick={e => this.handleClick(e)}
          value="blue"
        >
          Blue
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.themeColor,
})

const mapDispatchToProps = dispatch => ({
  onSwitchColor: color => {
    dispatch({ type: 'CHANGE_COLOR', themeColor: color })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
```

## 参考资料

- [动手实现 React-redux（一）：初始化工程](http://huziketang.mangojuice.top/books/react/lesson36)
