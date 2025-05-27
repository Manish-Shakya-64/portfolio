import React from 'react'
import { motion } from 'framer-motion'

const FadeBox = ({ children, delay = 0.1, duration = 0.8 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default FadeBox
