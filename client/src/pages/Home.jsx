import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '../config/motion';

import { CustomButton } from '../components';

import state from '../store';
import CopyRight from '../components/CopyRight';

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.div className="home" {...slideAnimation('left')}>
					<motion.div {...slideAnimation('down')}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.div>

					<motion.div className="home-content" {...headContainerAnimation}>
						<motion.div className="head-text" {...headTextAnimation}>
							<h1 className="head-text">
								LET'S <br className="xl:block hidden" /> MAKE IT.
							</h1>
						</motion.div>

						<motion.div
							className="flex flex-col gap-5"
							{...headContentAnimation}
						>
							<p className="max-w-md font-normal text-gray-600 text-base">
								Using the <strong>JERSEY.3D</strong> customization tool, you can
								design your own <strong>one-of-a-kind</strong> shirt. Create
								your own look by using your{' '}
								<strong className=" text-emerald-500">creativity.</strong>
							</p>

							<CustomButton
								type="filled"
								title="Customize It"
								handleClick={() => (state.intro = false)}
								customStyles="w-fit px-4 py-2.5 font-bold text-sm "
							/>

							<div className="mt-20">
								<CopyRight />
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Home;
