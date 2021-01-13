import React from 'react'
import GetWebData from './utils/xhr'
import UmiRequestToken from './component/UmiRequestToken'
import ExportPdf from './component/ExportPdf'
import JsPdf from './component/JsPdf'
import SVG2PDF from './component/SVG2PDF'
import SVGToPDFKit from './component/SVGToPDFKit'

GetWebData('https://api.github.com/search/repositories?sort=stars&q=javascript')

export default function App() {
  return (
    <>
      <UmiRequestToken />
      <ExportPdf />
      <JsPdf />
      <SVG2PDF />
      <SVGToPDFKit />
    </>
  )
}
