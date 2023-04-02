import { proxy } from 'valtio';

//=> it works similar like context:
const state = proxy({
	intro: true,
	color: '#0e0e0e',
	shirtColor: '#011826',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './hand.png',
	fullDecal: './threejs.png',
});

export default state;
