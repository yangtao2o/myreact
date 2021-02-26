import { useState, useEffect } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import InfiniteScroll from 'react-infinite-scroller'
import imagesloaded from 'imagesloaded'
import { isMobileOnly } from 'react-device-detect'
import IntoDrawPage from '@/components/IntoDrawPage'

// fix: window is not defined
let Masonry = null
if (typeof window !== 'undefined') {
  import('masonry-layout').then((module) => {
    Masonry = module.default
  })
}

function LoadMorePages(props) {
  const {
    data,
    isLoading,
    isReset,
    handleReset,
    onUpdateHandle,
    FileItemCom,
  } = props
  const [details, setDetails] = useState([])
  const [current, setCurrent] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isReset) {
      setDetails([])
      setCurrent(0)
      setHasMore(true)
      handleReset(false)
    }
  }, [isReset])

  useEffect(() => {
    if (data && data.data) {
      if (current === 0) {
        setDetails(data.data)
      } else {
        setDetails(details.concat(data.data))
      }
    }
  }, [data])

  useEffect(() => {
    if (details.length > 0) {
      imagesOnload()
    }
  }, [details])

  useEffect(() => {
    if (!isLoading) {
      setLoading(false)
    }
  }, [isLoading])

  const layout = () => {
    const grid = document.querySelector('.scroll-wrap')
    new Masonry(grid, {
      itemSelector: '.list-item',
      columnWidth: '.list-item',
      gutter: isMobileOnly ? 12 : 16,
      fitWidth: true,
    })
  }

  //图片懒加载
  const imagesOnload = () => {
    layout()
    const elLoad = imagesloaded('.scroll-wrap')
    //always 图片已全部加载，或被确认加载失败
    elLoad.on('always', () => {
      layout()
    })
  }

  // 滑动加载
  const loadMoreFunc = () => {
    const { current_page, last_page } = data
    setLoading(true)
    setCurrent(current_page)
    if (current_page >= last_page) {
      setHasMore(false)
      setLoading(false)
      return
    }
    if (current_page !== current) {
      onUpdateHandle({ page: +current_page + 1 })
    }
  }

  return (
    <div className="community-list-wrap">
      {details.length > 0 && (
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={loadMoreFunc}
          hasMore={!loading && hasMore}
          threshold={-200}
        >
          <div className="scroll-wrap">
            <div className="list-item">
              <IntoDrawPage
                isPureText
                className="create-btn"
                sensor={() => true}
              >
                <img src="/static/img/community/create-btn.png" alt="新建" />
                新建空白思维导图
              </IntoDrawPage>
            </div>
            {details.map((listData) => (
              <div className="list-item" key={listData.id}>
                <FileItemCom listData={listData} {...props} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
      {!isLoading && details.length < 1 ? props.children : null}
      <div className="loading-wrap">
        {loading ? (
          <>
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 16, marginRight: 10 }}
                  spin
                />
              }
            />
            努力加载中...
          </>
        ) : !hasMore ? (
          '没有更多了~'
        ) : null}
      </div>
    </div>
  )
}
export default LoadMorePages
