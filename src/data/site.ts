export const site = {
  name: "Jakhongir Nodirov",
  title: "AI Research Engineer",
  focus: "Robotics · Computer Vision",
  statement:
    "Perception and autonomy — robots, inspection systems, and models that have to run on the machine.",
  lede: "I ship computer-vision systems on factory AOI equipment at HyVision, and I build mobile robots on Jetson: ROS 2, SLAM, Nav2, and on-device inference. Same loop in both cases — data, the model, and the hardware it has to live on.",
  affiliation: "HyVision System · Seongnam",
  location: "Seongnam, South Korea",
  email: "jakhon37@gmail.com",
  url: "https://jakhon37.github.io",
  portrait: {
    src: "/portrait.png",
    alt: "Portrait of Jakhongir Nodirov",
  },
  citationsAsOf: "August 2026",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Research", href: "#research" },
    { label: "Path", href: "#path" },
    { label: "CV", href: "/Jakhongir_Nodirov_CV.pdf" },
  ],
  sideNav: [
    { label: "Top", href: "#intro", id: "intro" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Path", href: "#path", id: "path" },
  ],
  links: [
    { label: "Email", href: "mailto:jakhon37@gmail.com" },
    { label: "CV", href: "/Jakhongir_Nodirov_CV.pdf" },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=yt1yJyAAAAAJ",
    },
    { label: "GitHub", href: "https://github.com/jakhon37" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jakhongir-nodirov-jakhon37",
    },
  ],
} as const;
