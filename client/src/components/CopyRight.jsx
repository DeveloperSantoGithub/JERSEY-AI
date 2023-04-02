import { AiFillGithub } from 'react-icons/ai';
import { CgCopyright } from 'react-icons/cg';
import { RiLinkedinFill } from 'react-icons/ri';

function CopyRight() {
	return (
		<div className="copy-right-tags">
			<div className="copy-rights">
				<h2>
					<CgCopyright className="i-copy" />
					<a
						href="https://developersanto.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						Developer<span>Santo.</span>
					</a>
				</h2>
			</div>
			<div className="links">
				<a
					className="github"
					href="https://github.com/DeveloperSantoGithub"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillGithub className="i-github" />
				</a>
				<a
					className="linkedin"
					href="https://www.linkedin.com/in/saidul-islam-santo"
					target="_blank"
					rel="noreferrer"
				>
					<RiLinkedinFill className="i-linkedin" />
				</a>
			</div>
		</div>
	);
}

export default CopyRight;
