import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork(props) {
    const ref = useRef();

    // Create particles
    const particlesCount = 2000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15; // Spread out more
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        // Rotate based on time
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;

        // Interactive rotation based on scroll
        const scrollY = window.scrollY;
        ref.current.rotation.z = scrollY * 0.0005;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#006064" // Dark Cyan
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

function Galaxy() {
    const ref = useRef();

    const particlesCount = 5000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const r = Math.random() * 10 + 2; // Radius
            const theta = Math.random() * 2 * Math.PI; // Angle


            positions[i * 3] = r * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(theta);
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2 + (Math.random() - 0.5) * r * 0.2; // Flattened disk
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.z += delta / 50;
    });

    return (
        <group rotation={[Math.PI / 3, 0, 0]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#4a148c" // Dark Purple
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.5}
                    blending={THREE.NormalBlending} // Changed from Additive for light mode
                />
            </Points>
        </group>
    );
}

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[var(--color-bg-dark)]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Galaxy />
                <NeuralNetwork />
                <ambientLight intensity={0.8} /> {/* Increased intensity */}
            </Canvas>
        </div>
    );
};

export default Background;
