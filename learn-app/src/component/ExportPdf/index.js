import React from 'react'
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image'
import printJS from 'print-js'
import { imgData } from './../JsPdf/imgData'
import getPdf from './../../utils/getPdf'

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        ref="worddata"
        style={{
          fontSize: 100,
          padding: '10px 30px',
          background: '#2fddf3',
          color: '#455ace',
          textAlign: 'center',
        }}
      >
        中心主题
        <img ref="imgdata" src={imgData} alt="" />
      </div>
    )
  }
}
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }
  handlePdfClick = async () => {
    const target = this.componentRef.current.refs.imgdata
    const pdf = await getPdf(target)
    pdf.save('测试PDF')
  }
  render() {
    return (
      <>
        <ComponentToPrint ref={this.componentRef} />
        <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPDF(this.componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(this.componentRef)}>
          Export As PNG
        </button>
        <p>
          <button onClick={this.handlePdfClick}>导出PDF</button>
        </p>
        <p>
          <button
            onClick={() =>
              printJS({
                printable: imgData.substring(imgData.indexOf(',') + 1),
                type: 'pdf',
                base64: true,
              })
            }
          >
            Print PDF with Message
          </button>
        </p>
      </>
    )
  }
}
