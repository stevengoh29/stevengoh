'use client'

import React from 'react'
import { TypeAnimation as NativeTypeAnimation } from 'react-type-animation'

function TypingAnimationLabel() {
    return (
        <NativeTypeAnimation
            sequence={[
                'Web Development',
                1000,
                'Mobile Development',
                1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-slate-500 dark:text-slate-300 font-semibold text-lg"
            repeat={Infinity}
        />
    )
}

export default TypingAnimationLabel