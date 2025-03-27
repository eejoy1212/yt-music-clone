import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode
  }
const layout = ({children}:Props) => {
  return (
    <div>
      플레이리스트 레이아웃
      {children}
    </div>
  )
}

export default layout
