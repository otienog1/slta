'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Slider = (props: any) => {
    let { slides, autoplay, direction, speed, duration, current } = props,
        next = current + 1

    const sliders = useRef<any>(null),
        slider = gsap.utils.selector(sliders)

    const initSlide = () => {
        slider('.slide').forEach((slider: any) => {
            slider.style.zIndex = 1
        })
        if (sliders.current != null) {
            sliders.current.children[next].style.zIndex = 2
            sliders.current.children[current].style.zIndex = 3
            sliders.current.children[current].style.opacity = 1

            startAutoplay()
        }
    }

    const startAutoplay = () => {
        autoplay = !0
        !0 === autoplay && gsap.delayedCall(duration, play)
    }

    const stopAutoplay = () => {
        autoplay = !1
        gsap.killTweensOf(play)
    }

    const play = () => {
        tweenSlide()
        !0 === autoplay && gsap.delayedCall(duration, play)
    }

    const tweenSlide = () => {
        if (sliders.current != null) {
            setSlide()
            gsap.to(sliders.current.children[current], {
                duration: speed,
                opacity: 0,
                ease: 'power3.inOut'
            })

            gsap.to(sliders.current.children[next], {
                duration: speed,
                opacity: 1,
                ease: 'power3.inOut'
            })
        }
        // gsap.to(textWrapper.current.children[current], {
        //     duration: 2,
        //     opacity: 0,
        //     ease: 'power3.inOut'
        // })

        // gsap.to(textWrapper.current.children[next], {
        //     duration: 2,
        //     opacity: 1,
        //     ease: 'power3.inOut'
        // })
        getSlide()
    }

    const setSlide = () => {

        // bullet('.list__item').forEach(bullet => {
        //     bullet.classList.remove("is__active")
        // })

        // bullet('.list__item')[next].classList.add("is__active")

        slider('.slide').forEach((slider: any) => {
            slider.style.zIndex = 1
        });
        if (sliders.current != null) {
            sliders.current!.children[next].style.zIndex = 3
            sliders.current!.children[current].style.zIndex = 2

        }
        // textWrappers('.slideText').forEach(tt => {
        //     tt.style.opacity = 0
        // });

        // textWrapper.current.children[next].style.opacity = 0
        // textWrapper.current.children[current].style.opacity = 1
    }

    const getSlide = () => {
        "next" === direction ? nextSlide() : prevSlide()
    }

    const nextSlide = () => {
        if (sliders.current != null) {
            current === sliders.current.children.length - 1 ? current = 0 : current = next
            next === sliders.current.children.length - 1 ? next = 0 : next = current + 1
        }
    }

    const prevSlide = () => {

    }

    // const clickEvent = (e) => {
    //     bullet('.list__item').forEach((bullet, i) => {
    //         bullet.addEventListener('click', () => {
    //             direction = "next"
    //             stopAutoplay()
    //             next = i
    //             tweenSlide()
    //             current = i
    //             startAutoplay()
    //         })
    //     })
    // }

    useEffect(() => {
        initSlide()
    }, [])

    return (
        <div ref={sliders} className="w-full h-full relative overflow-hidden">
            {
                slides.map((slide: any, i: any) => {
                    return (
                        <Slide
                            source={slide.image}
                            author={slide.author}
                            key={i}
                        />
                    )
                })
            }
        </div>
    )
}


const Slide = (props: any) => {
    let { source, author } = props

    return (
        <div className="slide absolute w-full h-full opacity-0">
            <div className="relative w-full h-full">
                <Image
                    src={source}
                    alt="Alt"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="container relative h-full mx-auto">
                    <Author author={author} />
                </div>
            </div>
        </div>
    )
}
const Author = (props: any) => {
    const { author } = props

    return (
        <div className="absolute bottom-10 right-4">
            <p className="text-white text-sm tracking-tighter opacity-75">Image by {author}</p>
        </div>
    )
}

export default Slider