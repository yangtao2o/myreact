/*
 * @Description: html 转为 pdf 并下载
 * @Author: cmyoung
 * @Date: 2018-08-10 19:07:32
 * @LastEditTime: 2019-08-23 16:34:18
 */

/**
 * @param html { String } DOM树
 * @param isOne { Boolean }  是否为单页 默认 否(false)
 * @return 文件 {pdf格式}
 */

import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

export default function getPdf(dom) {
  let width = dom.offsetWidth // 获得该容器的宽
  let height = dom.offsetHeight // 获得该容器的高
  const canvas = document.createElement('canvas')
  const scale = 2 // 解决清晰度问题，先放大 2倍

  canvas.width = width * scale // 将画布宽&&高放大两倍
  canvas.height = height * scale
  canvas.getContext('2d').scale(scale, scale)

  let opts = {
    canvas,
    width,
    height,
    scale,
    // dpi: window.devicePixelRatio * 2,
    useCORS: true,
  }

  return html2canvas(document.body, opts).then(canvas => {
    const pageData = canvas.toDataURL('image/jpeg', 1.0) // 清晰度 0 - 1
    let contentWidth = canvas.width
    let contentHeight = canvas.height

    var imgWidth = 595.28
    var imgHeight = (592.28 / contentWidth) * contentHeight
    // orientation Possible values are "portrait" or "landscape" (or shortcuts "p" or "l")
    const pdf = new jsPDF('', 'pt', 'a4') // 下载尺寸 a4 纸 比例

    // pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)

    return pdf
  })
}
