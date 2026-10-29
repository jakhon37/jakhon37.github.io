export type WorkItem = {
  title: string;
  field: string;
  description: string;
  result?: string;
  href?: string;
  video?: string;
};

export const work: WorkItem[] = [
  {
    title: "Camera-only docking",
    field: "Robot learning · autoJetsonBot",
    description:
      "Learning to dock the robot from its camera alone, with a C++ safety gate between every command source and the motors. ROS 2 bags become a LeRobot v3 dataset and a ResNet18 behavior-cloning policy, exported to ONNX and scored by an ArUco judge in paired trials against a classical servo. A stricter judge showed the demonstrations never ended on a stop. In the pre-registered rerun, the policy fell behind the servo from unseen start poses (16/30 against 27/30), and demonstrations recorded through the robot’s 62.2° lens fixed a lens failure (0/30 to 23/30).",
    result: "Simulation only so far · pre-registered · ROS 2 Foxy, Humble and Jazzy",
    href: "https://github.com/jakhon37/autojetsonbot-learning",
  },
  {
    title: "SmolVLA latency",
    field: "VLA inference · LeRobot",
    description:
      "Where SmolVLA’s time goes, component by component, and what lower precisions change in its actions. The model exports as three ONNX graphs driven by a C++17 runtime; with the real LIBERO checkpoint on real frames they reproduce LeRobot’s actions to 6e-6 in FP32, and FP16 stays finite and moves the actions less than the BF16 LeRobot runs. The precision layout LeRobot actually runs is checked against LeRobot 0.6.1’s own loading, parameter by parameter.",
    result: "CPU only so far · GPU and TensorRT numbers pending",
    href: "https://github.com/jakhon37/smolvla-latency",
  },
  {
    title: "autoJetsonBot",
    field: "Mobile robot · ROS 2",
    description:
      "A Jetson Nano B01 robot with an ESP32 motor bridge, RPLidar, wheel-encoder odometry, and an MPU6050 fused into the estimate. Mapping with slam_toolbox, localization with AMCL, and Nav2 — same stack in Gazebo and on the chassis. Web dashboard for teleop and live scans.",
    result: "Hardware + Gazebo · SLAM and Nav2",
    href: "https://github.com/jakhon37/autoJetsonBot",
    video: "https://youtu.be/JTg8ff2hSGM",
  },
  {
    title: "Driver monitoring on the edge",
    field: "On-device perception · Jetson",
    description:
      "Head pose, facial landmarks, and seatbelt detection on grayscale day-and-night video, compiled to TensorRT and run on NVIDIA Jetson.",
    result: "Day and night · TensorRT on device",
  },
  {
    title: "Wafer defect inspection",
    field: "Industrial perception · HyVision",
    description:
      "Detection, segmentation, and anomaly models for 8-inch and 12-inch wafers, deployed on industrial GPUs inside the inspection tool.",
    result: "In production · high precision · low false-positive rate",
  },
  {
    title: "Consumer electronics inspection",
    field: "Industrial perception · HyVision",
    description:
      "An end-to-end AOI pipeline — segmentation, detection, classification — at line speed on glass and metal enclosure parts for a tier-1 manufacturer.",
    result: "Line speed on AOI equipment · fine-grained defects",
  },
  {
    title: "LabelMeV2",
    field: "Annotation tooling",
    description:
      "A fork of labelme for large industrial images: faster load on big TIFF/JPG, 5000% zoom for small defects, and extra polygon editing. Published on PyPI.",
    result: "Open source · pip install labelmev2",
    href: "https://github.com/jakhon37/LabelMeV2",
  },
  {
    title: "3D human avatars",
    field: "3D perception · AIVAR",
    description:
      "From a single photograph to a textured 3D face and body, using morphable models (FLAME, SMPL), diffusion-based correction, and neural texture-matching. Deployed on AWS.",
  },
  {
    title: "IP image verification",
    field: "Retrieval · AIVAR",
    description:
      "A vector-search system for animation-character and logo protection: embed a query image, find near-duplicates, return a decision. Built for a government-backed digital IP project.",
  },
];
