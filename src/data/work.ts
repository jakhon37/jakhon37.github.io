export type WorkItem = {
  title: string;
  field: string;
  description: string;
  result?: string;
  href?: string;
  video?: string;
  paper?: string;
};

export const work: WorkItem[] = [
  {
    title: "iPhone enclosure inspection",
    field: "Industrial perception · HyVision for Apple",
    description:
      "A multi-stage AOI pipeline for 120-megapixel scans of iPhone enclosure parts, running on the production lines of Apple’s tier-1 supplier. A segmentation model finds the part, a lightweight CNN detector screens it tile by tile for more than a dozen defect classes, and segmentation and classification models outline and label each\u00a0defect.",
    result: "In production · TensorRT in\u00a0C++ · full-scan detection\u00a08×\u00a0faster",
  },
  {
    title: "Wafer defect inspection",
    field: "Industrial perception · HyVision",
    description:
      "CNN detectors for active-area and whitening defects inside the wafer inspection software, and a lightweight detector with a third of the baseline’s parameters. A parallel, batched TensorRT runner makes tile inference about\u00a011×\u00a0faster.",
    result: "In production · TensorRT in\u00a0C++",
  },
  {
    title: "autoJetsonBot",
    field: "Mobile robot · ROS 2",
    description:
      "A mobile robot and its Gazebo twin, running one ROS 2 stack. On the robot, a Jetson Xavier\u00a0NX runs ROS 2 Humble in Docker, and an ESP32 drives the motors and streams encoder and IMU data at 50\u00a0Hz into an EKF. slam_toolbox builds maps from the real RPLidar; AMCL and Nav2 navigate the twin, which is built from measurements of the chassis. Web dashboard for teleop and live\u00a0scans.",
    result: "Xavier\u00a0NX · ROS 2 Humble · SLAM on the robot, Nav2\u00a0in\u00a0Gazebo",
    href: "https://github.com/jakhon37/autoJetsonBot",
    video: "https://youtu.be/JTg8ff2hSGM",
  },
  {
    title: "Camera-only docking",
    field: "Robot learning · autoJetsonBot",
    description:
      "A learning-from-demonstration stack for the robot: teleoperated demonstrations recorded as a LeRobot v3 dataset, behavior cloning policies running as ONNX in a ROS 2 node, a C++ safety gate as the only path to the motors, and a referee node that judges every method in paired trials against a classical servo.",
    result: "Simulation · 303 tests · ROS\u00a02\u00a0Foxy,\u00a0Humble\u00a0and\u00a0Jazzy",
    href: "https://github.com/jakhon37/camera-only-docking",
  },
  {
    title: "SmolVLA Edge",
    field: "VLA inference · LeRobot",
    description:
      "Hugging Face’s 450M-parameter SmolVLA robot policy, exported as three ONNX graphs and run by a C++17 runtime on TensorRT, with every split point checked against LeRobot on the real LIBERO checkpoint. On a Jetson Xavier\u00a0NX an action chunk takes 0.33\u00a0s in FP16 against 1.0\u00a0s in FP32, with actions within the range of LeRobot’s own\u00a0BF16.",
    result: "Xavier\u00a0NX · TensorRT\u00a08.5 · 3.1×\u00a0faster\u00a0in\u00a0FP16",
    href: "https://github.com/jakhon37/smolvla-edge",
    paper: "https://www.preprints.org/manuscript/202611.0970/v1",
  },
  {
    title: "Seamline",
    field: "Annotation and training tooling",
    description:
      "A desktop app for segmentation: label images, train a model, review its proposals least certain first, and retrain on what was accepted. Remote training runs detached over SSH and survives lost connections; large images open through tile pyramids. Built on mySegLib, a PyTorch library with multi-GPU DDP training, chunked inference, and ONNX export.",
    result: "Open source · Electron and PyTorch · training on remote\u00a0GPUs",
    href: "https://github.com/jakhon37/Seamline",
  },
  {
    title: "3D human avatars",
    field: "3D perception · AIVAR",
    description:
      "From a single photograph to a textured 3D face and body, using morphable models (FLAME,\u00a0SMPL) trained and customized for Korean faces and bodies, plus diffusion image correction and neural texture matching. Deployed on\u00a0AWS.",
  },
  {
    title: "Driver monitoring on the edge",
    field: "On-device perception · Jetson",
    description:
      "A single-process driver monitor on a Jetson Xavier\u00a0NX: GStreamer capture into nine TensorRT FP16 engines for face detection, landmarks, head pose, eye and mouth state and an occlusion check, plus alert logic, with no PyTorch on the\u00a0board.",
    result: "Xavier\u00a0NX · TensorRT FP16 · 16–30\u00a0FPS end to\u00a0end",
  },
];
