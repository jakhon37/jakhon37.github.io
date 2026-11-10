export const site = {
  name: "Jakhongir Nodirov",
  title: "AI Research Engineer",
  focus: "Robotics · Computer Vision",
  statement:
    "Perception for robots and production lines, from training to the\u00a0device.",
  lede: "At HyVision I built defect inspection for iPhone and semiconductor lines. Now\u00a0I\u00a0build mobile robots on Jetson with ROS\u00a02, SLAM, Nav2\u00a0and\u00a0TensorRT.",
  affiliation: "Seongnam, South Korea",
  location: "Seongnam, South Korea",
  email: "jakhon37@gmail.com",
  url: "https://jakhon37.github.io",
  portrait: {
    src: "/portrait.png",
    // Background removed; the header shows this one in both themes.
    cutout: "/portrait-cutout.webp",
    alt: "Portrait of Jakhongir Nodirov",
  },
  citationsAsOf: "November 2026",
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
