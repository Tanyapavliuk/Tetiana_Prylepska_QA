"use client";
import { useState } from "react";
import { BottomPanel } from "./SQL/BottomPanel";
import { TopPanel } from "./SQL/TopPanel";
import { SqlResult } from "./SqlResult";
import { SqlContent } from "./SQL/SqlContent";

import tech from "@/data/techSkills.json";
import soft from "@/data/softSkill.json";
import education from "@/data/education.json";
import languages from "@/data/languages.json";
import hobby from "@/data/hobby.json";
import work from "@/data/work.json";

const QUERIES = [
  { label: "Soft Skills", value: "soft" },
  { label: "Tech Skills", value: "tech" },
  { label: "Languages", value: "languages" },
  { label: "Education", value: "education" },
  { label: "Hobby", value: "hobby" },
  { label: "Work experience", value: "work" },
];

export const Sql = () => {
  const [currentQuery, setCurrentQuery] = useState(QUERIES[0]);

  const handleSelectOption = (value) => {
    setCurrentQuery(value);
  };

  const getSelectedData = () => {
    switch (currentQuery.value) {
      case "tech":
        return tech;
      case "soft":
        return soft;
      case "education":
        return education;
      case "languages":
        return languages;
      case "hobby":
        return hobby;
      case "work":
        return work;
      default:
        return tech;
    }
  };

  return (
    <section id="skills" className='pt-8 md:pt-32 pb-16'>
      <div className='container flex flex-col'>
        <TopPanel />
        <SqlContent
          queries={QUERIES}
          currentQuery={currentQuery}
          onSelectOption={handleSelectOption}
        />
        <BottomPanel />
        <SqlResult data={getSelectedData()} />
      </div>
    </section>
  );
};
