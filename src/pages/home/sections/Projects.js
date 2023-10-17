import React, { useEffect, useState } from "react";
import axios from "axios";

import { TitleSection } from "../styles";
import Project from "../../../common/components/ProjectCard";
import themesColors from "../../../common/constants/themesColors";
import getRandomOnArray from "../../../common/utils/getRandomOnArray";

function ProjectsSection() {
  let [themeColor, setThemeColor] = useState([themesColors[3]]);
  const realProjectsList = [
    {
      id: 0,
      name: "Remox Landing Page",
      homepage: "https://www.remox.io/",
      description:
        "Official website of Remox. Here you can get information about the company, sign up for registration or view and link to currently available public organizations",
      topics: ["React Js", "Tailwind Css", "... etc"],
    },
    {
      id: 1,
      name: "Remox Community Dashboard",
      homepage: "https://community.remox.io/dashboard/Notional",
      description:
        "This dashboard is for the community. You can switch between different public organizations with the public dashboard names you have by changing the name in the link section. Simple type of private dashboard. Unfortunately, I can not share private dashboard",
      topics: [
        "Next JS",
        "TypeScript",
        "Tailwind Css",
        "Material UI",
        "... etc",
      ],
    },
  ];
  const [list, setList] = useState([]);
  // const user = GetUserDataOnMount();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios
        .get("https://api.github.com/users/sardarliyusif/repos")
        .then(({ data: response }) => setList(response));
    }
    return () => (mounted = false);
  }, []);
  console.log(list);
  return (
    <section className="pb-md-5 row">
      <div className="col-12 ">
        <TitleSection
          themeColor={themeColor}
          onClick={() => setThemeColor(getRandomOnArray(themesColors))}
        >
          projects
        </TitleSection>
      </div>
      <div className="col-12">
        <ul className="row p-0">
          {realProjectsList.map((project) => (
            <li className="col-md-4 p-3" key={project.id}>
              <Project themeColor={themeColor} project={project} />
            </li>
          ))}

          {list.map((project) => (
            <li className="col-md-4 p-3" key={project.id}>
              <Project themeColor={themeColor} project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
