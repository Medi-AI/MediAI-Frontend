import React from "react";
import {motion} from "framer-motion";

const SlidingCard = () => {
	return (
		<motion.div
			className='border w-[400px] h-[320px] rounded-[12px]'
			varients={
				({open: {opacity: 1, x: 0}},
				{closed: {opacity: 0, x: "-100%"}})
			}
		/>
	);
};

export default SlidingCard;
