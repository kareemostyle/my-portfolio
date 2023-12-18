"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";

const BasketballCourt: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    scene.background = new THREE.Color(0x222222);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // color, intensity
    scene.add(ambientLight);

    // Create basketball court
    const courtGeometry = new THREE.PlaneGeometry(12, 15, 32, 32);
    const courtMaterial = new THREE.MeshBasicMaterial({
      color: 0xd2b04c,
      side: THREE.DoubleSide,
    });
    const courtMesh = new THREE.Mesh(courtGeometry, courtMaterial);
    courtMesh.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    courtMesh.position.set(0, 0, 0);
    scene.add(courtMesh);

    // Remove rotation from the camera
    camera.position.set(0, 3, 3); // Adjust the height of the camera
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Add camera
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Add animation or interaction logic here if needed

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []); // Only run this effect once on mount

  return <canvas ref={canvasRef} />;
};

export default BasketballCourt;
