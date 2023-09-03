import React, { memo } from 'react'

const ComponentA = ({handleConsole}) => {
    console.log('ComponentA rerender');
  return (
    <div>
      
    </div>
  )
}

export default memo(ComponentA)
