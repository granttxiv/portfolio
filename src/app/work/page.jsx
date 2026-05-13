"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Qwerk",
		description:
			"A project that uses the Quasar framework to create a music clone mobile app, single page app, or browser extension.",
		stack: [{ name: "React" }, { name: "Css 3" }, { name: "Typescript" }],
		// change the image link
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--cKOH5pjN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6nr064pgbqxp9mxzu1l5.jpg",
		live: "spotifyclee.vercel.app",
		github: "github.com/grantt-3",
	},
	{
		num: "02",
		category: "fullstack",
		title: "Pxe",
		description:
			"When you are living fsr from your home or when you go on a trip with friends it is very important to track your expenses so that you can manage things according to your budget and not overspent..",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
		// image broken, change the link
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--_5S5yj6w--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/w8dl2clghqhc0mxm4be3.jpg",
		live: "",
		github: "github.com/grantt-3",
	},
	{
		num: "03",
		category: "frontend",
		title: "BarScan",
		description:
			"Barcodes and QR codes have revolutionized the way we shop. Customers can now use their smartphones to scan a product and obtain information such as the price or where they can purchase it.",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
		// broken image, change link
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
		live: "",
		github: "github.com/grantt-3",
	},
	{
		num: "04",
		category: "frontend",
		title: "Noteboard",
		description:
			"Noteboard - Your Digital Thought Canvas. Visit http://noteboardd.vercel.app to start organizing your digital life today.",
		stack: [
			{ name: "Nextjs" },
			{ name: "tailwindcss" },
			{ name: "typescript" },
		],
		image:
			"https://clickup.com/blog/wp-content/uploads/2024/05/Note-Taking-Apps-Featured-Image.png",
		live: "noteboardd.vercel.app",
		github: "github.com/grantt-3",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update project state based on current slide index
		setProject(projects[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px] ">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
						<div className="flex flex-col gap-[30px]">
							{/* outline num */}
							<div className="text-8xl leading-none font-semibold text-transparent text-outline">
								{project.num}
							</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
								{project.category} project
							</h2>
							{/* project description */}
							<p className="text-white/60">{project.description} </p>
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/**remove the last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/**border */}
							<div className="border border-white/20"></div>
							{/**buttons */}
							<div className="flex items-center gap-4">
								{/**live project button */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/**github project button */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
											{/** overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/** image */}
											<div className="relative h-full w-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/** slider buttons */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transistion-all "
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
