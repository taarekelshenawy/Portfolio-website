


import { motion, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Drag() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const springSettings = { damping: 20, stiffness: 300 }

function useFollowPointer(ref) {
  const x = useSpring(0, springSettings)
  const y = useSpring(0, springSettings)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current
      x.set(clientX - element.offsetWidth / 2)
      y.set(clientY - element.offsetHeight / 2)
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return { x, y }
}

const ball = {
  width: 40,
  height: 40,
 backgroundColor: "#ff0000",
  borderRadius: "50%",
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 9999,
}

