import React from 'react'
import UmiRequestToken from './component/UmiRequestToken'
import GetWebData from './utils/xhr'

GetWebData('https://api.github.com/search/repositories?sort=stars&q=javascript')

export default function App() {
  return <UmiRequestToken />
}
