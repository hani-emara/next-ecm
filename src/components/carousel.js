
"use client"
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel({images=[]}) {
   
	return <>
		

			<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={25} totalSlides={3} dragEnabled={true} interval={5000} isPlaying={true} infinite={true} className="relative overflow-hidden w-full h-full bg-white rounded-lg my-3 mx-1">
				<Slider className="h-full">
					<Slide index={0}><img className="w-full h-full" src="/oerde52g.png" alt=""/></Slide>
					<Slide index={1}><img className="w-full h-full" src="/1q28r808.png" alt=""/></Slide>
					<Slide index={1}><img className="w-full h-full" src="/4yj92j3r.png" alt=""/></Slide>
				</Slider>
				<ButtonBack type="button" className="disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
						<span className="text-2xl" aria-hidden="true">
							<LuChevronLeft className="flex-shrink-0 size-5" />
						</span>
					<span className="sr-only">Previous</span>
				</ButtonBack>
				<ButtonNext type="button" className="disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
					<span className="sr-only">Next</span>
					<span className="text-2xl" aria-hidden="true">
						<LuChevronRight className="flex-shrink-0 size-5" />
					</span>
				</ButtonNext>

			</CarouselProvider>

	

	</>
}








     
