"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface PhotoGalleryProps {
  title: string
  description: string
  image: string
  isFullSociety?: boolean
}

export default function GroupGallery({ title, description, image }: PhotoGalleryProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-900 via-blue-900/5 to-slate-900 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isLoaded ? "animate-slide-in-left" : ""} space-y-6`}>
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {title}
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">{description}</p>
          </div>

          {/* Image Content */}
          <div className={`${isLoaded ? "animate-slide-in-right" : ""} relative group`}>
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden p-1">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-cyan-400 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-cyan-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-cyan-400 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-2 border-cyan-400 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
