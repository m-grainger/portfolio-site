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
  python,
  docker,
  bend,
  smarsh,
  terazo,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Software Engineer",
    company_name: "Bend by FNBO",
    icon: bend,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Lead developer for the React application team; enhancing/maintaining a Twilio Flex servicing application",
      "Work in Agile methodology using Jira for story/task completion",
      "Identify and implement improvements in front-end architecture and tooling to enhance developer productivity and code maintainability",
      "Manage and troubleshoot a REST API built with AWS CDK in AWS infrastructure",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Terazo",
    icon: terazo,
    iconBg: "#383E56",
    date: "July 2021 - April 2023",
    points: [
      "Collaborated with various clients and worked on multiple engagements that ranged from building custom contact centers using React.JS to creating dynamic Power BI dashboards that were seamlessly integrated with AWS Redshift.",
      "Developed server-side applications using Python, Node.js, Flask, FastAPI and Moluculer.js frameworks",
      "Developed custom contact centers using Node.js and React.js",
      "Contributed to SRE and DevOps tasks, including setting up Datadog services, deploying to AWS with Terraform, and creating a CI/CD pipeline with Jenkins.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Smarsh",
    icon: smarsh,
    iconBg: "#383E56",
    date: "December 2019 - June 2021",
    points: [
      "Developed and supported custom applications, including troubleshooting and bug fixing, to meet clients' specific needs",
      "Utilized multiple programming languages including Python, Bash, T-SQL, and DA",
      "Lead developer on project where we built a new data exporting tool from the ground-up. The application is now being used to export data across the company for all customers",
      "Improved user experience and increased efficiency in data processing by developing new customer tools",
    ],
  },
  {
    title: " Sr. Migrations Engineer",
    company_name: "Smarsh",
    icon: smarsh,
    iconBg: "#383E56",
    date: "June 2017 - December 2019",
    points: [
      "Utilized programming languages such as Python, Bash, and Windows scripting for developing efficient and effective solutions.",
      "Provided support for custom applications used for large-scale data migrations using Smarsh's internal systems",
      "Maintained security and confidentiality of sensitive customer data by adhering to established security protocols and procedures",
      "Developed custom scripting solutions for customer-facing projects, leveraging technical expertise and creativity to meet clients'needs",
    ],
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
    testimonial:
      "I recommend Matt, he is a software developer who loves to learn new things and takes pride in providing accurate work. Matt has a great ability to quickly understand new concepts and apply them to his work. He is flexible and can work in a variety of environments, adapting to different workflows and processes.  \nMatt pays attention to detail and is always looking for ways to improve the quality of his work. In addition, Matt is a great communicator, with excellent written and verbal skills, making him an asset to any team.  \nWith Matt's enthusiasm and expertise, he will be an invaluable member of your team.",
    name: "Brett Rudisel",
    designation: "Program Manager | Certified Scrum Master",
    company: "Terazo",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEmHV4MjIyNyA/profile-displayphoto-shrink_800_800/0/1642458269485?e=1688601600&v=beta&t=HaytAAWVfw5q19owbWiZTaKMkuwc74oBzwKZasB2KKo",
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

const projects = [];

export { services, technologies, experiences, testimonials, projects };
