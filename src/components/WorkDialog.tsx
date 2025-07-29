import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface LocalizedText {
  en: string;
  es: string;
  [key: string]: string; // Allow other languages
}

interface ProjectDetails {
  id: number;
  title: LocalizedText | string;
  description: LocalizedText | string;
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

interface WorkDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
  lang?: string;
  translations?: any;
}

export default function WorkDialog({
  isOpen,
  onClose,
  project,
  lang = "en",
  translations,
}: WorkDialogProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getLocalizedText = (text: LocalizedText | string): string => {
    if (typeof text === "string") return text;
    return text[lang] || text.en || "";
  };

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (typeof globalThis !== "undefined" && "document" in globalThis) {
      const doc = globalThis.document as any;
      if (isOpen) {
        doc.body.style.overflow = "hidden";
      } else {
        doc.body.style.overflow = "unset";
      }

      return () => {
        doc.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-6xl h-[90vh] bg-yankees-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black-hard/50 hover:bg-black-hard/70 transition-colors"
          aria-label="Close dialog"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Left side - Carousel */}
          <div className="w-full lg:w-1/2 bg-black-hard/30 p-6 lg:p-8 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden rounded-2xl flex items-center min-h-0" ref={emblaRef}>
              <div className="flex h-full">
                {project.images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-full">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="max-w-full max-h-full object-contain rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel dots */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "bg-rose w-6"
                        : "bg-silver/50 hover:bg-silver"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right side - Details */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {getLocalizedText(project.title)}
            </h2>

            <p className="text-lg text-silver mb-6">{getLocalizedText(project.description)}</p>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-3">
                {translations?.work?.dialog?.aboutProject || "About this project"}
              </h3>
              <p className="text-silver-blue leading-relaxed">
                {getLocalizedText(project.story)}
              </p>
            </div>

            {/* Project details */}
            <div className="border-t border-silver/20 pt-6">
              <h3 className="text-xl font-medium text-white mb-4">
                {translations?.work?.dialog?.projectDetails || "Project Details"}
              </h3>
              <ul className="space-y-3">
                {project.details.client && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.client || "Client"}:
                    </span>
                    <span className="text-silver">
                      {project.details.client}
                    </span>
                  </li>
                )}
                {project.details.company && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.company || "Company"}:
                    </span>
                    <span className="text-silver">{project.details.company}</span>
                  </li>
                )}
                {project.details.year && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.year || "Year"}:
                    </span>
                    <span className="text-silver">{project.details.year}</span>
                  </li>
                )}
                {project.details.role && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.role || "Role"}:
                    </span>
                    <span className="text-silver">{getLocalizedText(project.details.role)}</span>
                  </li>
                )}
                {project.details.tools && project.details.tools.length > 0 && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.tools || "Tools"}:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.details.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-water/20 text-silver-blue text-sm rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </li>
                )}
                {project.details.link && (
                  <li className="flex items-start gap-2">
                    <span className="text-silver-blue font-medium">
                      {translations?.work?.dialog?.link || "Link"}:
                    </span>
                    <a
                      href={project.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose hover:text-rose/80 transition-colors"
                    >
                      {translations?.work?.dialog?.viewProject || "View Project"}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
