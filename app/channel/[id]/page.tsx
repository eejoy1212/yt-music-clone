import React from 'react'
type Props = {
    params: {
      id: string
    }
  }
function page({ params }: Props) {

  return (
    <div>
      채널 {params.id}
    </div>
  )
}

export default page
