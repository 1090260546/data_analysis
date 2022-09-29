import React, { useEffect, useState } from 'react'

interface IntersectionObserverState {
  inView: boolean
  triggered: boolean
  entry: object
}

const defaultState: IntersectionObserverState = {
  inView: false,
  triggered: false,
  entry: null
}

export const useIntersectionObserver = (ref, { threshold, root, rootMargin }) => {
  const [state, setState] = useState<IntersectionObserverState>(defaultState)

  const observeInstance = new IntersectionObserver(
    (entries, instance) => {
      if (entries[0].intersectionRatio > 0) {
        setState({
          inView: true,
          triggered: true,
          entry: instance
        })

        observeInstance.unobserve(ref.current)
      }
      return
    },
    {
      threshold: threshold || 0,
      root: root || null,
      rootMargin: rootMargin || '0%'
    }
  )

  useEffect(() => {
    if (ref.current && !state.triggered) {
      observeInstance.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observeInstance.disconnect()
      }
    }
  }, [ref, state])
  return [state.inView, state.entry]
}
