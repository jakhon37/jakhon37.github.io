export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: { name: string; self?: boolean }[];
  venue: string;
  year: number;
  citedBy?: number;
  status?: string;
  gloss: string;
  links: PublicationLink[];
};

// Citation counts as of November 2026 (Google Scholar).
export const publications: Publication[] = [
  {
    title:
      "Faster but Not Different: Parity-\u2060Checked Deployment of the SmolVLA Robot Policy on a Jetson\u00a0Xavier\u00a0NX",
    authors: [{ name: "J. Nodirov", self: true }],
    venue: "Preprints.org",
    year: 2026,
    status: "Preprint",
    gloss:
      "SmolVLA on a Jetson Xavier NX with TensorRT, checked against LeRobot at every split point: fp16 runs 3.1× faster than fp32, with actions in the range of LeRobot’s own bf16.",
    links: [
      { label: "Paper", href: "https://www.preprints.org/manuscript/202611.0970/v1" },
      { label: "DOI", href: "https://doi.org/10.20944/preprints202611.0970.v1" },
      { label: "Code", href: "https://github.com/jakhon37/smolvla-edge" },
    ],
  },
  {
    title:
      "Attention 3D U-Net with Multiple Skip Connections for Segmentation of Brain Tumor Images",
    authors: [
      { name: "J. Nodirov", self: true },
      { name: "A. B. Abdusalomov" },
      { name: "T. K. Whangbo" },
    ],
    venue: "Sensors 22(17): 6501",
    year: 2022,
    citedBy: 138,
    gloss:
      "Attention 3D U-Net with multiple skip connections and MobileNetV2 blocks for volumetric MRI tumor segmentation.",
    links: [
      {
        label: "PDF",
        href: "https://www.mdpi.com/1424-8220/22/17/6501/pdf",
      },
      { label: "DOI", href: "https://doi.org/10.3390/s22176501" },
      {
        label: "Scholar",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yt1yJyAAAAAJ&citation_for_view=yt1yJyAAAAAJ:d1gkVwhDpl0C",
      },
    ],
  },
  {
    title: "3D Volume Reconstruction from MRI Slices based on VTK",
    authors: [
      { name: "N. Jakhongir", self: true },
      { name: "A. Abdusalomov" },
      { name: "T. K. Whangbo" },
    ],
    venue: "ICTC, IEEE, pp. 689–692",
    year: 2021,
    citedBy: 26,
    gloss: "VTK-based reconstruction of 3D volumes from MRI slice stacks.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1109/ICTC52510.2021.9621022" },
      {
        label: "Scholar",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yt1yJyAAAAAJ&citation_for_view=yt1yJyAAAAAJ:u-x6o8ySG0sC",
      },
    ],
  },
];
