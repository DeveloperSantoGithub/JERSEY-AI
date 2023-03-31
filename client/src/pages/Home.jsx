import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '../config/motion';

import CustomButton from '../components/CustomButton';
import state from '../store';

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
								LET'S <br className="xl:block hidden" /> BUILD IT.
							</h1>
						</motion.div>

						<motion.div
							className="flex flex-col gap-5"
							{...headContentAnimation}
						>
							<p className="max-w-lg font-normal text-gray-600 text-base">
								Using the <strong>JERSEY.AI</strong> 3D customization tool, you
								can design your own <strong>one-of-a-kind</strong> shirt. Create
								your own look by using your{' '}
								<strong className=" text-orange-500">creativity.</strong>
							</p>

							<CustomButton />
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Home;
