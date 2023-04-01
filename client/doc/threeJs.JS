//=>Create Canvas Model:

//=> Step-0:
//-->> Create index.jsx : It's our Canvas

//=> Step-1:
//-->> import {canvas} from '@react-three/fiber';
//-->> import { Environment, Center } from '@react-three/drei';

//=> Step-2:
//-->> Create Backdrop.jsx : Provide dropshadow behind the 3d model

//-->> Create CameraRig.jsx : Positioning of the camera

//-->> Create Shirt.jsx : 3D model

//=>[*] Create 3D Model:
//-->> All imports:
//-->> import {easing} from 'maath';
//-->> import {useSnapshot} from 'valtio';
//-->> import {useFrame} from '@react-three/fiber';
//-->> import {Decal (for Mash or texture) ,  useGLTF (for use 3D model), useTexture } from '@react-three/drei';
//-->> import state from '../store'

//=> (*) import 3D model:
//-->> const { nodes, materials } = useGLTF('/shirt_baked.glb');

//-->> Add Texture:
//-->> const logoTexture = useTexture(snap.logoDecal);
//-->> const fullTexture = useTexture(snap.fullDecal);
