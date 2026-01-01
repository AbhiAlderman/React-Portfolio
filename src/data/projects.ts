import type { Project } from '../types/project';

// Import all project images
import animatronicEyesImg from '../assets/Visuals/Animatronic-Eyes/eyesproto.gif';
import benchmarkKukaImg from '../assets/Visuals/Benchmark-Kuka/toolpick.gif';
import berkeleyArmImg from '../assets/Visuals/Berkeley-Arm/pick_and_place.gif';
import bubbleBouncerImg from '../assets/Visuals/Bubble-Bouncer/demo.gif';
import cloyneDoorImg from '../assets/Visuals/Cloyne-Door/doorVid.gif';
import discordBotImg from '../assets/Visuals/Discord-Chatbot/discordDemo.png';
import frcImg from '../assets/Visuals/FRC/2020/robotHoops.gif';
import lightsCameraDungeonImg from '../assets/Visuals/Lights-Camera-Dungeon/damaged.gif';
import portfolioImg from '../assets/Visuals/Portfolio/frontpage.png';
import platmorferImg from '../assets/Visuals/Platmorfer/title_gif.gif';
import powerLeapImg from '../assets/Visuals/Power-Leap/thumbnail_small.png';
import ribbonRobotImg from '../assets/Visuals/Ribbon-Robot/Ribbon-Robot.gif';

export const projects: Project[] = [
  {
    id: 'animatronic-eyes',
    title: 'Animatronic Eyes',
    description: '3D printed eyes that detects and follows faces using an ESP32 microcontroller equipped with a camera and a live webserver.',
    image: animatronicEyesImg,
    tags: ['ESP32', 'KiCAD', 'TinkerCAD', 'Robotics'],
    githubUrl: 'https://github.com/AbhiAlderman/Animatronic-Eyes',
    date: 'Spring 2022',
    institution: 'UC Berkeley',
    slidesUrl: 'https://docs.google.com/presentation/d/1FW59XkIs3ZGVX3t927tC5mJX9hl6XicPWnYyxPDcV-w/edit',
  },
  {
    id: 'platmorfer',
    title: 'Platmorfer',
    description: 'Game I made in 2 weeks for a game jam. Difficult Platformer with power-up mechanics.',
    image: platmorferImg,
    tags: ['GameDev', 'Godot', 'GDScript', 'Game Jam'],
    githubUrl: 'https://github.com/AbhiAlderman/Platformer-Board-Game',
    demoUrl: 'https://toastyfraud.itch.io/platmorfer',
    date: 'July 2024',
  },
  {
    id: 'robot-block-stacker',
    title: 'Robot Block Stacker',
    description: 'Robotic arm that autonomously stacked wooden blocks using computer vision.',
    image: berkeleyArmImg,
    tags: ['ROS', 'Python', 'Vision', 'Robotics'],
    githubUrl: 'https://github.com/AbhiAlderman/106a_Project',
    date: 'December 2023',
    institution: 'UC Berkeley',
    slidesUrl: 'https://docs.google.com/presentation/d/1WTsfqbbt7CjBxMZEsQlyO-3TQf2Ovqs2yy4cxfOyZC0/',
  },
  {
    id: 'bubble-bouncer',
    title: 'Bubble Bouncer',
    description: 'Game I made in 3 days for a game jam. Bounce on bubbles while avoiding obstacles to get a high score.',
    image: bubbleBouncerImg,
    tags: ['GameDev', 'Godot', 'GDScript', 'Game Jam'],
    githubUrl: 'https://github.com/AbhiAlderman/Bubble-Arcade-Game',
    demoUrl: 'https://toastyfraud.itch.io/bubble-bouncer',
    date: 'June 2024',
  },
  {
    id: 'benchmark-electronics-kuka-robot-arm',
    title: 'Benchmark Electronics KUKA Robot Arm',
    description: 'KUKA Robotic Arm that autonomously switches tools, picks up brushes, deburrs product surfaces and holes, and picks / racks products.',
    image: benchmarkKukaImg,
    tags: ['KUKA', 'Automation', 'Robotics'],
    date: 'Summer 2021',
  },
  {
    id: 'power-leap',
    title: 'Power Leap',
    description: 'Game Jam submission for the Kenny Game Jam. Heavily inspired by Jump King. Leap to the top!',
    image: powerLeapImg,
    tags: ['GameDev', 'Godot', 'GDScript', 'Game Jam'],
    githubUrl: 'https://github.com/dangjase/kenney-jam-2025',
    demoUrl: 'https://toastyfraud.itch.io/power-leap',
    date: 'July 2025',
  },
  {
    id: 'lights-camera-dungeon',
    title: 'Lights, Camera, Dungeon!',
    description: 'Game I made with 3 other students for the Computer Graphics class at UC Berkeley. Top down roguelike with power ups, enemies, and a final boss',
    image: lightsCameraDungeonImg,
    tags: ['Graphics', 'Godot', 'GameDev', 'GDScript'],
    githubUrl: 'https://github.com/draynr/Lights_Camera_Dungeon',
    demoUrl: 'https://toastyfraud.itch.io/lights-camera-dungeon',
    date: 'April 2024',
    institution: 'UC Berkeley',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Online Portfolio to view my past projects and experience. I\'ve made quite a few!',
    image: portfolioImg,
    tags: ['Javascript', 'HTML', 'CSS', 'React', 'Astro'],
    githubUrl: 'https://github.com/AbhiAlderman/Portfolio',
    date: '2023 - Present',
  },
  {
    id: 'automatic-secure-door',
    title: 'Automatic Secure Door',
    description: 'Automated Door that could be opened using a Berkeley student ID card for verified members living at Cloyne Court.',
    image: cloyneDoorImg,
    tags: ['Arduino', 'Automation'],
    githubUrl: 'https://github.com/AbhiAlderman/RFID_Access_Controller',
    date: 'December 2022',
  },
  {
    id: 'discord-music-bot',
    title: 'Discord Music Bot',
    description: 'Discord Bot capable of searching Youtube and SoundCloud to play requesting music onto the user\'s voice channel.',
    image: discordBotImg,
    tags: ['Python', 'AWS', 'Linux'],
    githubUrl: 'https://github.com/AbhiAlderman/Discord-Music-Bot',
    date: 'July 2022',
  },
  {
    id: 'ribbon-cutting-robot',
    title: 'Ribbon-Cutting Robot',
    description: 'Small four-wheeled robot used to cut the ribbon for the Bay Area Science Festival in 2019.',
    image: ribbonRobotImg,
    tags: ['Java', 'Automation', 'Robotics'],
    date: '2019',
  },
  {
    id: 'first-robotics-competition',
    title: 'FIRST Robotics Competition',
    description: 'Competed in the FIRST Robotics Competition in High School from 2018 - 2020.',
    image: frcImg,
    tags: ['Java', 'Vision', 'Automation', 'Robotics'],
    githubUrl: 'https://github.com/AbhiAlderman/Ygnacio-Valley-High-School-FRC-2018-Code',
    date: '2017-2020',
  },
];
