import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    const elementToObserve = externalRef ? externalRef.current : fromRef.current
    useEffect(() => {
        let observer
        const onChange = (entries, observer) => {
            const element = entries[0]

            if (element.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        if (elementToObserve) observer.observe(elementToObserve)

        return () => observer && observer.disconnect()
    })

    return { isNearScreen, fromRef }
}