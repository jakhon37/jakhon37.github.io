export type WorkItem = {
  title: string;
  field: string;
  description: string;
  result?: string;
  href?: string;
};

export const work: WorkItem[] = [
  {
    title: "autoJetsonBot",
    field: "Mobile robot · ROS 2",
    description:
      "A Jetson Nano B01 platform with an ESP32 motor bridge, RPLidar, MPU6050, and a web dashboard. Mapping with slam_toolbox, localization with AMCL, and Nav2 for autonomous goals — same stack in Gazebo and on the real chassis.",
    result: "Hardware + simulation digital twin · Nav2 active",
    href: "https://github.com/jakhon37/autoJetsonBot",
  },
  {
    title: "Driver monitoring on the edge",
    field: "On-robot perception · Jetson",
    description:
      "Head pose, facial landmarks, and seatbelt detection on grayscale day-and-night video, compiled to TensorRT and run on NVIDIA Jetson.",
    result: "Day and night · TensorRT on device",
  },
  {
    title: "Wafer defect inspection",
    field: "Industrial perception · HyVision",
    description:
      "Detection, segmentation, and anomaly models for 8-inch and 12-inch wafers, deployed on industrial GPUs inside the inspection tool. The same discipline I am carrying into robots: the model has to run on the machine.",
    result: "24/7 in fab · >98% on critical defects · <0.5% false positives",
  },
  {
    title: "Consumer electronics inspection",
    field: "Industrial perception · HyVision",
    description:
      "An end-to-end AOI pipeline — segmentation, detection, classification — at line speed on glass and metal enclosure parts for a tier-1 manufacturer.",
    result: "Sub-millimeter defects · fully automated line inspection",
  },
];
