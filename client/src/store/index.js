import { proxy } from 'valtio';

//=> it works similar like context:
const state = proxy({
	intro: true,
	color: '#0e0e0e',
	shirtColor: '#2D2C2C',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './hand.png',
	fullDecal: './screen.png',
});

export default state;
