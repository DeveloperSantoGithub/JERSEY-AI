import { AiFillGithub } from 'react-icons/ai';
import { CgCopyright } from 'react-icons/cg';
import { RiLinkedinFill } from 'react-icons/ri';

function CopyRight() {
	return (
		<div className="flex flex-row justify-start items-center w-52 gap-1">
			<div className="bg-emerald-300 glassmorhism px-1 rounded-xl border border-black">
				<h2 className="flex items-center font-bold">
					<CgCopyright className="text-lg" />
					<a
						href="https://developersanto.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						Developer<span>Santo.</span>
					</a>
				</h2>
			</div>
			<div className="flex gap-1">
				<a
					className="github"
					href="https://github.com/DeveloperSantoGithub"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillGithub className="bg-emerald-300 p-1 text-2xl rounded-full" />
				</a>
				<a
					className="linkedin"
					href="https://www.linkedin.com/in/saidul-islam-santo"
					target="_blank"
					rel="noreferrer"
				>
					<RiLinkedinFill className="bg-emerald-300 p-1 text-2xl rounded-full" />
				</a>
			</div>
		</div>
	);
}

export default CopyRight;
