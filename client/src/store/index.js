import { proxy } from 'valtio';

//=> it works similar like context:
const state = proxy({
	intro: true,
	color: '#FFB30D',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './threejs.png',
});

export default state;
