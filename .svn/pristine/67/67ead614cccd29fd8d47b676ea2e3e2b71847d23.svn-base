import React from 'react'
import { useSelector } from 'react-redux'
import { makeSelectEditorBaselines } from '../selectors'
import { SlideBaseline } from '../components/Container/Slide'

const SlideBaselines: React.FC = () => {
  const baselines = useSelector(makeSelectEditorBaselines())

  return (
    <>
      {baselines.map((bl, idx) => (
        <SlideBaseline key={idx} value={bl} />
      ))}
    </>
  )
}

export default SlideBaselines
