import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./global/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[23rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
      <img src="/resume-1.png" className="rounded-md" alt="resum1" />
);
const Skeleton2 = () => (
    <img src="/resume-2.png" className="rounded-md" alt="resum2" />
);
const Skeleton3 = () => (
    <img src="/resume-3.png" className="rounded-md" alt="resum3" />
);
const Skeleton4 = () => (
    <img src="/resume-4.png" className="rounded-md" alt="resum3" />
);
const items = [
  {
    title: "A powerful resume builder",
    description: "Create a professional resume easily.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Simple Dynamic form",
    description: "Sleak dynamic form using content from your profile.",
    header: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Preview design and make edits to your resume.",
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skill Booster",
    description:
      "Understand the impact of effective skills and highlight them with featured skills.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
