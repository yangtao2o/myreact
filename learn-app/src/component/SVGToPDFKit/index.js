import React from 'react'
// import PDFDocument from 'pdfkit'
import SVGtoPDF from 'svg-to-pdfkit'
// import blobStream from 'blob-stream'
import svg from './svg'

// PDFDocument.prototype.addSVG = function (svg, x, y, options) {
//   return SVGtoPDF(this, svg, x, y, options)
// // }
// function resetDefaultStyles(doc) {
//   doc
//     .fillColor('black')
//     .fillOpacity(1)
//     .strokeColor('black')
//     .strokeOpacity(1)
//     .lineWidth(1)
//     .undash()
//     .fontSize(12)
//     .font('Helvetica')
// }
// function createPdf() {
//   let doc = new PDFDocument({ compress: false }) // It's easier to find bugs with uncompressed files
//   let textarea = document.getElementById('svg-code')
//   if (textarea.value) {
//     // Use the SVG code in the textarea
//     if (document.getElementById('use-css').checked) {
//       let hiddenDiv = document.getElementById('hidden-div')
//       hiddenDiv.innerHTML =
//         '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
//         textarea.value.trim() +
//         '</svg>'
//       SVGtoPDF(doc, hiddenDiv.firstChild, 0, 0, { useCSS: true })
//     } else {
//       SVGtoPDF(doc, textarea.value, 0, 0)
//     }
//   } else {
//     let svgs = document.querySelectorAll('#column-1 > svg') // Use all the svg drawings on the page
//     for (let i = 0; i < svgs.length; i++) {
//       doc.fontSize(20).text(svgs[i].id, { underline: true })
//       SVGtoPDF(doc, svgs[i].outerHTML || svgs[i], 0, 0)
//       if (i !== svgs.length - 1) {
//         resetDefaultStyles(doc)
//         doc.addPage()
//       }
//     }
//   }
//   let stream = doc.pipe(blobStream())
//   stream.on('finish', function () {
//     let blob = stream.toBlob('application/pdf')
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(blob, 'File.pdf')
//     } else {
//       document
//         .getElementById('pdf-file')
//         .setAttribute('src', URL.createObjectURL(blob))
//     }
//   })
//   doc.end()
// }

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }
  handleSVG2PDF = () => {
    // const doc = new PDFDocument()
    // const element = document.getElementById('svgId')
    // SVGtoPDF(doc, element, 0, 0)
  }

  render() {
    return (
      <p>
        <button onClick={this.handleSVG2PDF}>SVG-to-PDFKit</button>
        <div
          id="svgWrapper"
          ref={this.componentRef}
          dangerouslySetInnerHTML={{ __html: svg() }}
        ></div>
      </p>
    )
  }
}
