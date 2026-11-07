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
    title: "autoJetsonBot",
    field: "Mobile robot · ROS 2",
    description:
      "A Jetson Nano B01 robot with an ESP32 motor bridge, RPLidar, wheel-encoder odometry, and an MPU6050 fused into the estimate. Mapping with slam_toolbox, localization with AMCL, and Nav2 — same stack in Gazebo and on the chassis. Web dashboard for teleop and live scans.",
    result: "Hardware + Gazebo · SLAM and Nav2",
    href: "https://github.com/jakhon37/autoJetsonBot",
    video: "https://youtu.be/JTg8ff2hSGM",
  },
  {
    title: "Camera-only docking",
    field: "Robot learning · autoJetsonBot",
    description:
      "Learning to dock the robot from its camera alone, with a C++ safety gate between every command source and the motors. ROS 2 bags become a LeRobot v3 dataset and a ResNet18 behavior-cloning policy, exported to ONNX and scored by an ArUco judge in paired trials against a classical servo. A stricter judge showed the demonstrations never ended on a stop. In the pre-registered rerun, the policy fell behind the servo from unseen start poses (16/30 against 27/30), and demonstrations recorded through the robot’s 62.2° lens fixed a lens failure (0/30 to 23/30).",
    result: "Simulation only so far · pre-registered · ROS 2 Foxy, Humble and Jazzy",
    href: "https://github.com/jakhon37/camera-only-docking",
  },
  {
    title: "SmolVLA latency",
    field: "VLA inference · LeRobot",
    description:
      "Where SmolVLA’s time goes on a small GPU, and what lower precisions and TensorRT buy without changing its actions. The model exports as three ONNX graphs driven by a C++17 runtime on ONNX Runtime or TensorRT, checked against LeRobot at every split point with the real LIBERO checkpoint. On a Jetson Xavier NX one action chunk takes 1.0 s in FP32 and 0.33 s in FP16, with FP16 actions inside the range of the BF16 LeRobot itself runs, once TensorRT is held to the graphs’ FP32 layers.",
    result: "Jetson Xavier NX · TensorRT 8.5 · 3.1× faster in FP16",
    href: "https://github.com/jakhon37/smolvla-edge",
  },
  {
    title: "Seamline",
    field: "Annotation and training tooling",
    description:
      "A desktop app for segmentation: label images, train a model, review its proposals least certain first, and retrain on what was accepted. Remote training runs detached over SSH and survives lost connections; large images open through tile pyramids. Built on mySegLib, a PyTorch library with multi-GPU DDP training, chunked inference, and ONNX export.",
    result: "Open source · Electron and PyTorch · tested on VisA circuit boards",
    href: "https://github.com/jakhon37/Seamline",
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
    title: "Driver monitoring on the edge",
    field: "On-device perception · Jetson",
    description:
      "Head pose, facial landmarks, and seatbelt detection on grayscale day-and-night video, compiled to TensorRT and run on NVIDIA Jetson.",
    result: "Day and night · TensorRT on device",
  },
  {
    title: "IP image verification",
    field: "Retrieval · AIVAR",
    description:
      "A vector-search system for animation-character and logo protection: embed a query image, find near-duplicates, return a decision. Built for a government-backed digital IP project.",
  },
];
