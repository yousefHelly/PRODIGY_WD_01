import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Star } from 'lucide-react'

type Props = {}

function ReviewSlider({}: Props) {
    const reviews = [
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
        {
            header:'Had good experiences so far',
            des:'We are very pleased with the work with Cripz. After a long search, we have found a company with good sense of trend, but also with...',
            name:'Igor Chygrynov',
            position:'CEO at bitoftrade'
        },
    ]
  return (
    <Carousel className='mb-5 cursor-grab'>
    <CarouselContent>
        {
            reviews.map((rev)=>
                <CarouselItem className='md:basis-1/2 lg:basis-1/3 min-h-[350px]'>
                    <article className='flex flex-col gap-5 h-full justify-around items-start bg-mainLightBackground/75 rounded-2xl p-5'>
                        <div className='flex items-center gap-3'>
                            <Star className='fill-stone-50'/> Trustpilot
                        </div>
                        <h4 className='text-xl font-bold'>{rev.header}</h4>
                        <p className='text-start gradient-des font-bold text-sm'>
                            {
                                rev.des
                            }
                        </p>
                        <div className='flex flex-col text-start gap-1'>
                            <p className='font-bold text-stone-300'>{rev.name}</p>
                            <p className='font-bold text-stone-400'>{rev.position}</p>
                        </div>
                    </article>
                </CarouselItem>
            )
        }
    </CarouselContent>
    <CarouselNext className='hidden md:flex bg-main cursor-pointer border-mainBackground hover:bg-mainLightBackground hover:text-stone-300'/>
    <CarouselPrevious className='hidden md:flex bg-main cursor-pointer border-mainBackground hover:bg-mainLightBackground hover:text-stone-300'/>
    </Carousel>
  )
}

export default ReviewSlider