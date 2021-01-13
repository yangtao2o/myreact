import React from 'react'
import { jsPDF } from 'jspdf'
import { imgData } from './imgData'

export default class MyComponent extends React.Component {
  exportComponentAsPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(40)
    doc.text(35, 25, 'Paranyan loves jsPDF')
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
    doc.save('a4.pdf')
  }
  render() {
    return (
      <p>
        <button onClick={this.exportComponentAsPDF}>Export As PDF</button>
      </p>
    )
  }
}
