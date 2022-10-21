import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper'


function Section1() {
    SwiperCore.use([Autoplay])
    const bg = {
        background:"url('images/banner.png') no-repeat",
        backgroundPosition:"right",
    }
  return (
    <section className="py-16 border-solid border-2" style={bg}>
        <div className="container mx-auto md:px-20 ">
           <h1 className="font-bold text-3xl pb-12 text-center">
             Trending
            </h1>
            <Swiper
                
                slidesPerView={1}
                loop={true}
                autoplay={{delay:2000}}
                
            >
                <SwiperSlide>{Slide(1)}</SwiperSlide>
                <SwiperSlide>{Slide(2)}</SwiperSlide>
                <SwiperSlide>{Slide(3)}</SwiperSlide>
                <SwiperSlide>{Slide(4)}</SwiperSlide>
                
                
            </Swiper>
            
        </div>
    </section>
  )
}

function Slide(x)
{
    return (
            <div className="grid md:grid-cols-2">
                <div className="image">
                    <Link href={"/"}>
                        <a><Image src={"/images/img1.jpg"} width={600} height={600}  /></a>
                    </Link>
                    
                </div>
                <div className="info flex  justify-center flex-col ">
                    <div className="cat">
                        <Link href={"/"}><a className="text-orange-500 hover:text-orange-600" >Business,travel</a></Link>
                        <Link href={"/"}><a className="text-gray-500 hover:text-gray-600" > - July 22,2022</a></Link>
                    </div>
                        <div className="title">
                           <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Title - {x}</a></Link>
                        </div>
                        <p className="text-gray-500 py-3">This is paragraph
                        Students & Writers mostly look for some questions when 
                        coming to paragraph writing about any topic or thing or person. The questions
                         raised by most of the students while thinking about writing a paragraph are 
                         Paragraph Writing Examples, What is the perfect paragraph format? How many steps
                          involved to write a paragraph? How to write a good paragraph? How many sentences
                           are included in a para? and many more like these.</p>
                        <Author></Author>
                    
                </div>
            </div>
    )
}

export default Section1