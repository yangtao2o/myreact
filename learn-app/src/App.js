import React from 'react'
import GetWebData from './utils/xhr'

import Waterfall from './component/Waterfall'

GetWebData('https://api.github.com/search/repositories?sort=stars&q=javascript')

export default function App() {
  return (
    <>
      <Waterfall />
    </>
  )
}
