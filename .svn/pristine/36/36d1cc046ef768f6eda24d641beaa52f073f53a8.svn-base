
import React, {
  useState,
  useLayoutEffect
} from 'react'

import { debounce } from 'lodash'


export const useResize = (): number => {
  const [documentWidth, setDocumentWidth] = useState(document.body.clientWidth)

  useLayoutEffect(() => {
    function updateClientWidth () {
      setDocumentWidth(document.body.clientWidth)
    }
    window.addEventListener('resize',  debounce(updateClientWidth, 300))
    return () => {
      window.removeEventListener('resize', updateClientWidth)
    }
  }, [documentWidth])

  return documentWidth
}

