import React, { useState } from "react";
import WorkDialog from "./WorkDialog";

interface LocalizedText {
  en: string;
  es: string;
  [key: string]: string; // Allow other languages
}

interface ProjectDetails {
  id: number;
  title: LocalizedText | string;
  description: LocalizedText | string;
  image: string;
  gridClass: string;
  story: LocalizedText | string;
  images: string[];
  details: {
    client?: string;
    company?: string;
    year?: string;
    tools?: string[];
    role?: LocalizedText | string;
    link?: string;
  };
}

interface WorkGridProps {
  projects: ProjectDetails[];
  lang?: string;
  translations?: any;
}

export default function WorkGrid({ projects, lang = "en", translations }: WorkGridProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getLocalizedText = (text: LocalizedText | string): string => {
    if (typeof text === "string") return text;
    return text[lang] || text.en || "";
  };

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    (globalThis as any).setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 auto-rows-[150px] md:grid-cols-3 md:gap-4 md:auto-rows-[180px] lg:grid-cols-4 lg:gap-5 lg:auto-rows-[220px]">
        {projects.map((project, index) => {
          // Define tablet-specific classes
          const tabletClass =
            index === 0
              ? "md:col-span-1 md:row-span-2 lg:col-span-2"
              : index === 1
                ? "md:col-span-2 md:row-span-1"
                : index === 2
                  ? "md:col-span-1 md:row-span-1"
                  : index === 3
                    ? "md:col-span-1 md:row-span-1"
                    : index === 4
                      ? "md:col-span-2 md:row-span-1 lg:col-span-3"
                      : "md:col-span-1 md:row-span-1";

          const desktopClass = project.gridClass
            .replace(/col-span-\d/g, (match) => `lg:${match}`)
            .replace(/row-span-\d/g, (match) => `lg:${match}`);

          return (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className={`
                relative overflow-hidden rounded-2xl lg:rounded-3xl
                group cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl
                aspect-auto md:aspect-auto
                ${tabletClass}
                ${desktopClass}
              `}
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={getLocalizedText(project.title)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-hard via-black-hard/40 to-transparent opacity-90" />
              </div>

              <div
                className={`
                  relative h-full flex flex-col justify-end
                  p-4
                  ${tabletClass.includes("md:col-span-2") || tabletClass.includes("md:row-span-2") ? "md:p-6" : "md:p-4"}
                  ${tabletClass.includes("lg:col-span-3") ? "lg:p-8" : ""}
                  ${project.gridClass.includes("row-span-2") && project.gridClass.includes("col-span-2") ? "lg:p-8" : "lg:p-5"}
                `}
              >
                <h3
                  className={`
                    font-bold text-white mb-1 transition-all duration-200
                    text-base
                    ${tabletClass.includes("md:row-span-2") || tabletClass.includes("md:col-span-2") ? "md:text-lg" : "md:text-sm"}
                    ${tabletClass.includes("lg:col-span-3") ? "lg:text-2xl" : ""}
                    ${
                      project.gridClass.includes("row-span-2") &&
                      project.gridClass.includes("col-span-2")
                        ? "lg:text-2xl xl:text-3xl"
                        : project.gridClass.includes("col-span-2") ||
                            project.gridClass.includes("col-span-3")
                          ? "lg:text-xl"
                          : "lg:text-base"
                    }
                  `}
                >
                  {getLocalizedText(project.title)}
                </h3>
                <p
                  className={`
                    text-silver/80 transition-all duration-200
                    text-xs
                    ${tabletClass.includes("md:col-span-2") || tabletClass.includes("md:row-span-2") ? "md:text-xs" : ""}
                    ${tabletClass.includes("lg:col-span-3") ? "lg:text-sm" : ""}
                    ${
                      project.gridClass.includes("row-span-2") &&
                      project.gridClass.includes("col-span-2")
                        ? "lg:text-sm xl:text-base"
                        : project.gridClass.includes("col-span-2") ||
                            project.gridClass.includes("col-span-3")
                          ? "lg:text-sm"
                          : "lg:text-xs"
                    }
                  `}
                >
                  {getLocalizedText(project.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <WorkDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        project={selectedProject}
        lang={lang}
        translations={translations}
      />
    </>
  );
}