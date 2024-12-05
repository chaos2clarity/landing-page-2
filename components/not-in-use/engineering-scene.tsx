// 'use client'

// import { useRef } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Environment, Float, Html, OrbitControls, PresentationControls } from '@react-three/drei'
// import { Mesh } from 'three'

// const engineeringMajors = [
//   {
//     title: "Chemical Engineering",
//     description: "Process design & material science",
//     position: [-4, 2, 0] as [number, number, number]
//   },
//   {
//     title: "Electrical Engineering",
//     description: "Power systems & electronics",
//     position: [4, 2, 0] as [number, number, number]
//   },
//   {
//     title: "Mechanical Engineering",
//     description: "Dynamics & thermodynamics",
//     position: [0, 4, 0] as [number, number, number]
//   },
//   {
//     title: "Civil Engineering",
//     description: "Structures & infrastructure",
//     position: [-3, -2, 0] as [number, number, number]
//   },
//   {
//     title: "Software Engineering",
//     description: "Systems & algorithms",
//     position: [3, -2, 0] as [number, number, number]
//   }
// ]

// function RubiksCube() {
//   const cubeRefs = useRef<Mesh[]>([])
//   const size = 0.95
//   const gap = 0.1

//   const miniCubes = []
//   for (let x = -1; x <= 1; x++) {
//     for (let y = -1; y <= 1; y++) {
//       for (let z = -1; z <= 1; z++) {
//         const position = [
//           x * (size + gap),
//           y * (size + gap),
//           z * (size + gap)
//         ]
//         miniCubes.push(position)
//       }
//     }
//   }

//   return (
//     <group rotation={[0.5, -0.5, 0]}>
//       {miniCubes.map((position, index) => (
//         <mesh
//           key={index}
//           position={position as [number, number, number]}
//           ref={(ref) => {
//             if (ref) cubeRefs.current[index] = ref
//           }}
//         >
//           <boxGeometry args={[size, size, size]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             metalness={0.5}
//             roughness={0.2}
//           />
//         </mesh>
//       ))}
//     </group>
//   )
// }

// function FloatingCard({ title, description, position }: { 
//   title: string
//   description: string
//   position: [number, number, number]
// }) {
//   return (
//     <Float
//       speed={2}
//       rotationIntensity={0.5}
//       floatIntensity={1}
//       position={position}
//     >
//       <Html
//         transform
//         occlude
//         style={{
//           transition: 'all 0.2s',
//           padding: '1rem',
//           backgroundColor: 'rgba(0, 0, 0, 0.8)',
//           borderRadius: '0.5rem',
//           width: '200px',
//           textAlign: 'left',
//           color: 'white',
//           transform: 'translateX(-50%) translateY(-50%)',
//         }}
//       >
//         <h3 className="text-lg font-bold mb-2">{title}</h3>
//         <p className="text-sm text-gray-300">{description}</p>
//       </Html>
//     </Float>
//   )
// }

// export default function EngineeringScene() {
//   return (
//     <section className="relative">
//       <div className="w-full h-[800px] bg-[#0a0a1f]">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1f]/80 pointer-events-none" />
        
//         <div className="container mx-auto px-4">
//           <h2 className="pt-12 text-4xl md:text-5xl font-bold text-center text-white max-w-4xl mx-auto">
//             Discover the world of Engineering through interactive learning
//           </h2>
//         </div>

//         <Canvas
//           camera={{ position: [0, 0, 15], fov: 50 }}
//           className="w-full h-full"
//         >
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={1} />
//           <PresentationControls
//             global
//             zoom={0.8}
//             rotation={[0, 0, 0]}
//             polar={[-Math.PI / 4, Math.PI / 4]}
//             azimuth={[-Math.PI / 4, Math.PI / 4]}
//           >
//             <RubiksCube />
//             {engineeringMajors.map((major, index) => (
//               <FloatingCard key={index} {...major} />
//             ))}
//           </PresentationControls>
//           <Environment preset="city" />
//           <OrbitControls enableZoom={false} />
//         </Canvas>
//       </div>
//     </section>
//   )
// } 