'use client'

import { FastAverageColor } from 'fast-average-color'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'

type SkillCardProps = {
    name: string
    image: StaticImageData
}

export default function SkillCard(props: SkillCardProps) {
    const { image, name } = props
    const theme = useTheme()
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        new FastAverageColor().getColorAsync(image.src)
            .then(color => {
                const rgba = color.rgb.split(')')
                setBgColor(rgba[0] + ',0.1)')
            })
            .catch(e => {
                console.log(e);
            })
    }, [image])


    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div title={name} style={{ backgroundColor: theme.theme == 'light' ? bgColor : 'white' }}
                className={"h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center"}>
                <Image alt="skill" width={100} height={100} className={`h-12 w-12 md:h-14 md:w-14 object-contain`} src={image} />
            </div>
            <p className="text-sm md:text-base text-center">{name}</p>
        </div>
    )
}
