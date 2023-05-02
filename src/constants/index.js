import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  docker,
  smarsh,
  terazo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: `Typescript / Javascript`,
    icon: web,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Data Visualization",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Sr. Migrations Engineer",
    company_name: "Smarsh",
    icon: smarsh,
    iconBg: "#383E56",
    date: "June 2017 - December 2019",
    points: ["", "", "", ""],
  },

  {
    title: "Software Engineer",
    company_name: "Smarsh",
    icon: smarsh,
    iconBg: "#383E56",
    date: "December 2019 - June 2021",
    points: ["", "", "", ""],
  },

  {
    title: "Software Engineer",
    company_name: "Terazo",
    icon: terazo,
    iconBg: "#383E56",
    date: "July 2021 - April 2023",
    points: ["", "", "", ""],
  },
];

const testimonials = [
  {
    testimonial:
      "...Matt's organized, communicates well, and digs into software problems without an eye on the clock. He demonstrates extreme ownership in every respect, and has grown significantly in the last year and a half. He is perfectly customer facing, accountable, and a joy to manage. More than one customer has called me ensuring I knew the job was well done. Matt has a reflective side and knows enough to ask 'should we be doing this?' especially on questionable customer asks....",
    name: "John Dettori",
    designation: "Sr. Director, Data Management",
    company: "Smarsh",
    image:
      "https://media.licdn.com/dms/image/C4E03AQECd5JGzW1n2Q/profile-displayphoto-shrink_800_800/0/1574393473033?e=1688601600&v=beta&t=jPBQx--py2D8JMRhvHA-zTeXjutGqTBlMswNQjzLwNQ",
  },
  {
    name: "Brett Rudisel",
    designation: "Program Manager | Certified Scrum Master",
    company: "Terazo",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEmHV4MjIyNyA/profile-displayphoto-shrink_800_800/0/1642458269485?e=1688601600&v=beta&t=HaytAAWVfw5q19owbWiZTaKMkuwc74oBzwKZasB2KKo",
    testimonial:
      "I recommend Matt, he is a software developer who loves to learn new things and takes pride in providing accurate work. Matt has a great ability to quickly understand new concepts and apply them to his work. He is flexible and can work in a variety of environments, adapting to different workflows and processes.  \nMatt pays attention to detail and is always looking for ways to improve the quality of his work. In addition, Matt is a great communicator, with excellent written and verbal skills, making him an asset to any team.  \nWith Matt's enthusiasm and expertise, he will be an invaluable member of your team.",
  },
  {
    testimonial:
      "Matt is one of the most driven employees I've ever had the pleasure of working with. Without fail, day after day, he'd show up to work with a positive attitude and always ready to learn. If he didn't feel like he had a strong enough understanding of something, he'd spend the time outside of work to make sure he did. Matt has an inquisitive mind and is always looking for ways to improve. He is an invaluable asset to any team and someone I would relish the opportunity to work with again.",
    name: "Justin Baldwin",
    designation: "Lead Software Engineer",
    company: "Terazo",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHxsrigYCBgag/profile-displayphoto-shrink_800_800/0/1586537703222?e=1688601600&v=beta&t=0Zw8kLxbV0xFeYLkurY3jnwdZBN_nY64L-t97YHG-kw",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
