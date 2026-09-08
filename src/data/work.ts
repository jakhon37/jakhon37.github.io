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
