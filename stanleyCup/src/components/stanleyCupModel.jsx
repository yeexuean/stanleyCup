import { useEffect, useRef } from "react";

//import the THREE.js library
import * as THREE from "three";

//to allow the camera move around the scene
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//able to import gltf file
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function StanleyCupModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    //check if the ref is mounted
    if (!mountRef.current) return;

    //create a Three.js scene
    const scene = new THREE.Scene();

    //create a new camera with positions and angles
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true }); //makes bg transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); //transparent bg
    //add the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    //set how far the camera will be from the 3d model
    camera.position.z = 5;

    //add lights to the scene, so we can actually see the model
    const topLight = new THREE.DirectionalLight(0xffffff, 1); //color, intesity
    topLight.position.set(500, 500, 500); //arnd top left ish
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    //load the cup model
    const loader = new GLTFLoader();
    let cup;

    loader.load(
      "/stanleyCup/stanleyCup.glb",
      (gltf) => {
        cup = gltf.scene;
        cup.scale.set(5, 5, 5);
        cup.position.set(0, -1.5, 0);
        scene.add(cup);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    //add OrbitControls for rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //add smooth damping
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3; //prevent zooming too close
    controls.maxDistance = 10; //precent zooming too far
    controls.maxPolarANgle = Math.PI; //allow full rotation

    //handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    //animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); //required if controls.enableDamping = true
      renderer.render(scene, camera);
    };
    animate();

    //cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.odmElement);
      }
    };
  }, []);
  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
