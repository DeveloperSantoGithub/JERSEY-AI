import { proxy } from 'valtio';

//=> it works similar like context:
const state = proxy({
	intro: true,
	color: '#0e0e0e',
	shirtColor: '#F27166',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './react.png',
	fullDecal: './threejs.png',
});

export default state;
