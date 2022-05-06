/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    rPlaceGrid: THREE.Mesh
  }
  materials: {
    ColorMap: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>
  const { nodes, materials } = useGLTF('/r-place.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.rPlaceGrid.geometry}
        material={materials.ColorMap}
        scale={10}
      />
    </group>
  )
}
