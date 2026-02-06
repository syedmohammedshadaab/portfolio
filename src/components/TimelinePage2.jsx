import React, { memo, useCallback, useState } from "react";
const ChevronDown = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>;
const Code = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>;
const Palette = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>;
const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
  };
  return <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>;
};
const timelineData = [{
  id: "prof-exp-1",
  title: "Associate Software Engineer",
  type: "Full-time",
  company: "Mphasis, Bengaluru",
  duration: "12/2024 - Present",
  icon: Code,
  responsibilities: ["Developed full-stack modules using Spring Boot, Angular, and MySQL", "Designed and implemented RESTful APIs with scalable backend business logic.", "Collaborated with team members to deliver features, fix bugs, and improve application performance."],
  skills: ["Spring Boot", "Angular", "MySQL", "GitHub"]  
}, {
  id: "prof-exp-2",
  title: "Intern",
  type: "Internship",
  company: "Rail Wheel Factory, Bengaluru",
  duration: "04/2023 - 07/2023",
  icon: Code,
  responsibilities: ["Developed a robust Web API using C#, ASP.NET MVC and MySQL enabling smooth data transfer between front-end applications and the backend database", "Assisted in optimizing the database using SQL, ensuring data integrity and performance."],
  skills: ["MySQL", "C#", "ASP.NET MVC"]
}, ];
const TimelineItemContent = memo(function TimelineItemContent({
  item
}) {
  return <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
      {}
      <div className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => <div key={`${item.id}-resp-${idx}`} className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-slate-600 dark:bg-slate-500 dark:group-hover:bg-slate-400 transition-colors duration-200" />
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {responsibility}
            </p>
          </div>)}
      </div>

      {}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
        {item.skills.map((skill, skillIdx) => <Badge key={`${item.id}-skill-${skillIdx}`} variant="secondary">
            {skill}
          </Badge>)}
      </div>
    </div>;
});
TimelineItemContent.displayName = "TimelineItemContent";
const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle
}) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;
  return <div className="relative group">
      {}
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gradient-to-b from-black via-gray-500 to-white dark:from-white dark:via-gray-400 dark:to-black" />

      {}
      <div className="absolute left-4 top-6 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
        <div className="w-2 h-2 bg-slate-900 dark:bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {}
      <div className="ml-12 mb-8">
        <div className={`
          bg-white dark:bg-slate-950 
          rounded-lg border border-slate-200 dark:border-slate-800 
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}>
          {}
          <button id={headerId} className="w-full text-left p-6 group/button cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded-t-lg" onClick={() => onToggle(item.id)} aria-expanded={expanded} aria-controls={contentId}>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md">
                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium text-slate-400">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-3 ml-11">
                  <Badge variant="outline" className="text-xs dark:text-slate-50">
                    {item.type}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div className={`
                text-slate-400 dark:text-slate-600 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {}
          {expanded && <div id={contentId} role="region" aria-labelledby={headerId} className="px-6 pb-6 border-t border-slate-100 dark:border-slate-900">
              <TimelineItemContent item={item} />
            </div>}
        </div>
      </div>
    </div>;
});
TimelineItem.displayName = "TimelineItem";
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi"
}) {
  const initial = defaultExpandedIds ?? data.map(item => item.id);
  const [expanded, setExpanded] = useState(() => new Set(initial));
  const onToggle = useCallback(id => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (expandMode === "single") {
        return prev.has(id) ? new Set() : new Set([id]);
      }
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, [expandMode]);
  return <div className="relative">
      {data.map((item, index) => <TimelineItem key={item.id} item={item} expanded={expanded.has(item.id)} onToggle={onToggle} index={index} />)}
    </div>;
}
export default function TimelinePage2() {
  return <div className="transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
            Professional Experience
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            A comprehensive overview of my career journey and professional
            achievements.
          </p>
        </header>

        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
    </div>;
}