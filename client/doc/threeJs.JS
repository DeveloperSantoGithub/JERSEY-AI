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
//==> Shirt:
//>-->> Inside of Shirt.jsx:

//-->> All imports:
//-->> import {easing} from 'maath';
//-->> import {useSnapshot} from 'valtio';
//-->> import {useFrame (execute code on every render frame )} from '@react-three/fiber';
//-->> import {Decal (for Mesh or texture) ,  useGLTF (for use 3D model), useTexture } from '@react-three/drei';
//-->> import state from '../store'

//=> (*) import 3D model:
//-->> const { nodes, materials } = useGLTF('/shirt_baked.glb');

//-->> Add Texture:
//-->> const logoTexture = useTexture(snap.logoDecal);
//-->> const fullTexture = useTexture(snap.fullDecal);

//=> (*) Display Model:
//-->> inside of <group></group>:
//-->> working with mesh:
//-->> mesh properties: castShadow, geometry, material, material-roughness, dispose

//>-->> inside of <mesh></mesh>:
//-->> set texture based on isTexture state value:
//-->> with <Decal/>
//-->> <Decal/> has some properties on it:
/* -->> 
<Decal
1.position={[x,y,z]}, 
2.rotation={[x,y,z]}, 
3.scale={1}, 
4.map={texture that going to be set},
5.map-anisotropy={x} : set the qulity of the texture
5.depthTest={boolen} : set on top of other texture
7. depthWrite={true}
/>
*/

//=> Apply color smoothly:
//-->>For Color: easing.dampC() into the useFrame() hook

//==> [*] Setup Camera:
//>-->> Inside of CameraRig.jsx:

//-->> All imports:
//-->> import {easing} from 'maath';
//-->> import {useSnapshot} from 'valtio';
//-->> import {useFrame} from '@react-three/fiber';
//-->> import state from '../store'

//=> Initial:
//-->> Recive all children with 'children' props
//-->> Use useRef(): const group = useRef();
//-->> take state: cosnt snap = useSnapshot(state);

//=> (*) Customize camera:

//>-->> (*) Set Model Rotation:
//-->> use maath: easing: (define properties)
//-->> easing.damE( group.current.rotation, [x: state.pointer.y /10, y: -state.pointer.x / 5, z: 0], time: .25, different: delta )

//-->> Now all of the easing code put into the :
//-->> useFrame() Hook: Because useFrame hook extcute code on every frame render

//-->>For Rotation (dampE): easing.dampE(current: Euler, targetPosition, time, delta: different )

//>-->> (*) Set Model Camera Position:

//-->> For Camera Position (damp3): easing.damp3(currrent: Vector3, targetPosition, time, delta: different),
