import React from 'react'
import { jsPDF } from 'jspdf'
import 'svg2pdf.js'
// import { ReactSVG } from 'react-svg'
import svg from './svg'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }
  handleSVG2PDF = () => {
    const doc = new jsPDF()

    const element = document.getElementById('svgId')

    doc
      .svg(element, {
        x: 0,
        y: 0,
        width: 180,
        height: 160,
      })
      .then(() => {
        doc.save('SVG2PDF_TEST.pdf')
      })
  }
  render() {
    return (
      <p>
        <button onClick={this.handleSVG2PDF}>SVG2PDF</button>
        <div
          id="svgWrapper"
          ref={this.componentRef}
          dangerouslySetInnerHTML={{ __html: svg() }}
        ></div>
      </p>
    )
  }
}
