import React from 'react'
import responseHandler from '../../utils/responseHandler'

const index = () => {
  responseHandler({ code: 1200 }, 1)
  responseHandler({ code: 1200 }, 2)
  responseHandler({ code: 1200 }, 3)

  return <div>122</div>
}

export default index
