import React from "react";
import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../images/moon.jpg";
import sunImage from "../../images/sun.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timelime/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";


const Home = () => {
  useEffect(() => {
    //creating planet texture for moon circle
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const sunTexture = textureLoader.load(sunImage);
    const spaceTexture = textureLoader.load(spaceImage);

    //generating webpage space scene
    const scene = new THREE.Scene();

    //creating camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });

    //creating planet moon
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    //creating planet sun
    const sunGeometry = new THREE.SphereGeometry(3, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight1 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight1.position.set(-8, -5, -5);

    // const lightHelper = new THREE.PointLightHelper(pointLight);

    // const controls = new OrbitControls(camera,renderer.domElement);
    scene.add(moon);
    scene.add(sun);
    scene.add(pointLight);
    scene.add(pointLight1);
    scene.background = spaceTexture;
    // scene.add(lightHelper)

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        sun.rotation.x -= constSpeed;
        sun.rotation.y += constSpeed;
      }

      if (e.clientX >= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        sun.rotation.x -= constSpeed;
        sun.rotation.y -= constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        sun.rotation.x -= constSpeed;
        sun.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        sun.rotation.x -= constSpeed;
        sun.rotation.y -= constSpeed;
      }
    });

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      sun.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h4">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillFaces homeCubeSkillsFace1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaQE2_T9cdK8PauC6EUySqnrZ0Wtb6xzm3g&usqp=CAU"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillsFace2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NfLqRjG1POoF73OP2hfLCJKSbz5sMo1a5A&usqp=CAU"
              alt="Face2"
            />
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillsFace3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OJojPOqt8ARgHoKqtZp63FkBTfYRl_67ng&usqp=CAU"
              alt="Face3"
            />
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillsFace4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU"
              alt="Face4"
            />
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillsFace5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnr_90ROeD8qgYg2cmZo1nVeTncGr0Xpj2Dg&usqp=CAU"
              alt="Face5"
            />
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillsFace6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU"
              alt="Face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
            <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU" title="Sample Image" />
            <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU" title="Sample Image" />
            <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU" title="Sample Image" />
            <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU" title="Sample Image" />
            <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU" title="Sample Image" />
            
        </div>
      </div>
    </div>
  );
};

export default Home;
