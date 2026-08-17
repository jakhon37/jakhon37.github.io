export type WorkItem = {
  title: string;
  field: string;
  description: string;
  result?: string;
};

export const work: WorkItem[] = [
  {
    title: "Wafer defect inspection",
    field: "Semiconductor · HyVision",
    description:
      "Detection, segmentation, and anomaly models for 8-inch and 12-inch silicon wafers, deployed on industrial GPUs inside the inspection tool itself.",
    result: "24/7 in fab · >98% on critical defects · <0.5% false positives",
  },
  {
    title: "Consumer electronics inspection",
    field: "Glass and metal · HyVision",
    description:
      "An end-to-end AOI pipeline — segmentation, detection, classification — running at line speed on enclosure parts for a tier-1 electronics manufacturer.",
    result: "Sub-millimeter defects · fully automated line inspection",
  },
  {
    title: "3D human avatars",
    field: "Reconstruction · AIVAR",
    description:
      "From a single photograph to a textured 3D face and body, using morphable models (FLAME, SMPL, DECA) and a service deployed on AWS.",
  },
  {
    title: "IP image verification",
    field: "Retrieval · AIVAR",
    description:
      "A vector-search system for animation-character and logo protection: embed a query image, find near-duplicates, return a decision. Built for a government-backed digital IP project.",
  },
  {
    title: "Driver monitoring on the edge",
    field: "Perception · Jetson",
    description:
      "Head pose, facial landmarks, and seatbelt detection on grayscale day-and-night video, compiled to TensorRT and run on NVIDIA Jetson.",
  },
];
