"use client";

import React from "react";
import Image from "next/image";
import { type BlogPost, type BlogContentSection as IBlogContentSection, type ParagraphBlock } from "@/data/blogs";

function ParagraphRenderer({ block }: { block: ParagraphBlock | string }) {
  if (typeof block === "string") {
    return <p className="leading-relaxed text-[#FFF7E6]">{block}</p>;
  }

  const alignClass = block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : "";
  const weightClass = block.bold ? "font-bold" : "font-medium";

  if (block.lines && block.lines.length > 0) {
    return (
      <p className={`leading-relaxed ${alignClass} ${weightClass}`}>
        {block.lines.map((line, idx) => {
          const lineCol =
            line.color === "gold"
              ? "text-[#D2BB79]"
              : line.color === "steel-blue"
              ? "text-[#5E96B7]"
              : line.color === "light-grey"
              ? "text-[#E9EDF3]"
              : "text-[#FFF7E6]";
          const lineWeight = line.bold !== undefined ? (line.bold ? "font-bold" : "font-normal") : "";

          return (
            <React.Fragment key={idx}>
              <span className={`${lineCol} ${lineWeight}`}>{line.text}</span>
              {idx < (block.lines?.length ?? 0) - 1 && <br />}
            </React.Fragment>
          );
        })}
      </p>
    );
  }

  const textColor =
    block.color === "gold"
      ? "text-[#D2BB79]"
      : block.color === "steel-blue"
      ? "text-[#5E96B7]"
      : block.color === "light-grey"
      ? "text-[#E9EDF3]"
      : "text-[#FFF7E6]";

  return <p className={`leading-relaxed ${textColor} ${alignClass} ${weightClass}`}>{block.text}</p>;
}

function SectionRenderer({ section }: { section: IBlogContentSection }) {
  const isWhiteTitle = section.titleTheme === "white";
  const isGoldTitle = section.titleTheme === "gold" || !section.titleTheme;
  const titleSizeClass = section.titleSize === "small" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  const titleColorClass = isWhiteTitle
    ? "text-[#FFF7E6]"
    : isGoldTitle
    ? "text-[#D2BB79]"
    : "text-[#5E96B7]";
  const underlineColorClass = isWhiteTitle
    ? "border-[#FFF7E6]"
    : isGoldTitle
    ? "border-[#D2BB79]/60"
    : "border-[#5E96B7]";

  const titleWrapperClass = section.titleAlign === "center" ? "text-center" : "";

  return (
    <section className="space-y-5">
      {section.title && (
        <div className={titleWrapperClass}>
          <h2
            className={`inline-block font-forma ${titleSizeClass} font-bold ${titleColorClass} border-b-2 ${underlineColorClass} pb-1.5 tracking-tight`}
          >
            {section.title}
          </h2>
        </div>
      )}

      {/* Paragraphs */}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="space-y-4 text-base sm:text-lg text-[#FFF7E6]">
          {section.paragraphs.map((p, idx) => (
            <ParagraphRenderer key={idx} block={p} />
          ))}
        </div>
      )}

      {/* Bullet Items (e.g. Questions or checklist items) */}
      {section.bulletItems && section.bulletItems.length > 0 && (
        <ul
          className={`space-y-2 ps-2 text-base sm:text-lg ${
            section.bulletColor === "gold" ? "text-[#D2BB79]" : "text-[#FFF7E6]"
          }`}
        >
          {section.bulletItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#D2BB79] text-base leading-none mt-1.5">▪</span>
              <span className="font-medium text-[#FFF7E6]">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Subheading */}
      {section.subheading && (
        <p
          className={`font-bold text-base sm:text-lg pt-1 ${
            section.subheading.color === "steel-blue"
              ? "text-[#5E96B7]"
              : section.subheading.color === "gold"
              ? "text-[#D2BB79]"
              : "text-[#FFF7E6]"
          }`}
        >
          {section.subheading.text}
        </p>
      )}

      {/* Callout Grid (e.g. 2-column prompts or requirements) */}
      {section.calloutGrid && section.calloutGrid.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2 max-w-2xl mx-auto">
          {section.calloutGrid.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-2xl border border-[#D2BB79]/30 bg-[#0B0B0B]/60 backdrop-blur-md px-4 py-3 text-base sm:text-lg font-bold text-[#FFF7E6] shadow-md"
            >
              <span className="text-[#D2BB79] text-xl font-bold leading-none">➤</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Numbered Items */}
      {section.numberedItems && section.numberedItems.length > 0 && (
        <ol className="space-y-3 ps-2 text-[#FFF7E6] list-none text-base sm:text-lg">
          {section.numberedItems.map((item, idx) => {
            if (typeof item === "string") {
              return (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#D2BB79] font-bold">{idx + 1}.</span>
                  <span className="font-medium">{item}</span>
                </li>
              );
            }
            return (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#D2BB79] font-bold min-w-[1.5rem]">{idx + 1}.</span>
                <div className="space-y-0.5">
                  {item.title && (
                    <span className="font-bold text-[#5E96B7] me-2">{item.title}:</span>
                  )}
                  <span className="font-medium text-[#FFF7E6]">{item.description}</span>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {/* Strategy Feature Cards */}
      {section.cards && section.cards.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-3">
          {section.cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/40 via-white/15 to-transparent hover:from-[#D2BB79] hover:via-[#5E96B7]/40 hover:to-[#D2BB79]/30 transition-all duration-500 shadow-2xl group hover:scale-[1.02]"
            >
              <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-[#03111F]/85 backdrop-blur-2xl p-4 sm:p-5 flex flex-col items-center text-center space-y-4 border border-white/10 hover:border-transparent transition-all duration-300">
                <div className="relative w-full aspect-[1.5/1] rounded-2xl overflow-hidden border border-[#5E96B7]/30 shadow-lg">
                  <Image
                    src={card.image}
                    alt={card.alt || card.title}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <h3 className="font-forma text-base sm:text-lg font-bold text-[#FFF7E6] tracking-tight group-hover:text-[#D2BB79] transition-colors duration-300 leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mistakes Items */}
      {section.mistakeItems && section.mistakeItems.length > 0 && (
        <ul className="space-y-3 ps-2 text-[#FFF7E6]">
          {section.mistakeItems.map((item, idx) => (
            <li key={idx} className="space-y-1">
              <div className="flex items-center gap-2.5 font-bold text-[#D2BB79]">
                <span className="text-sm leading-none">▪</span>
                <span>{item.title}</span>
              </div>
              <p className="text-[#FFF7E6] text-base font-medium ps-4">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Post Text */}
      {section.postText && (
        <p className="text-base sm:text-lg text-[#FFF7E6] font-medium pt-1 leading-relaxed">
          {section.postText}
        </p>
      )}

      {/* Conclusion Paragraphs */}
      {section.conclusionParagraphs && section.conclusionParagraphs.length > 0 && (
        <div className="pt-2 space-y-3 text-[#FFF7E6] text-base sm:text-lg">
          {section.conclusionParagraphs.map((cp, idx) => (
            <ParagraphRenderer key={idx} block={cp} />
          ))}
        </div>
      )}
    </section>
  );
}

export function SingleBlogContentSection({ blog }: { blog?: BlogPost }) {
  if (!blog?.content) {
    return (
      <article className="relative w-full py-12 sm:py-20 bg-[#03111F] text-[#FFF7E6] font-forma font-bold leading-relaxed overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8 font-bold text-center">
          <p className="text-xl text-[#D2BB79]">
            {blog?.excerpt || "محتوى المقالة قيد الإعداد..."}
          </p>
        </div>
      </article>
    );
  }

  const { content } = blog;

  return (
    <article className="relative w-full py-12 sm:py-20 bg-[#03111F] text-[#FFF7E6] font-forma font-bold leading-relaxed overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12 sm:space-y-14 font-bold">
        
        {/* Intro Paragraphs */}
        {content.introParagraphs && content.introParagraphs.length > 0 && (
          <section className="space-y-5 text-base sm:text-lg text-[#FFF7E6] font-bold">
            {content.introParagraphs.map((p, idx) => (
              <ParagraphRenderer key={idx} block={p} />
            ))}

            {/* Questions Block */}
            {content.questions && (
              <div className="space-y-1 pt-2 text-[#FFF7E6] leading-relaxed font-bold">
                <p>{content.questions.lead}</p>
                <p className="text-[#D2BB79] font-bold">{content.questions.q1}</p>
                <p>{content.questions.transition}</p>
                <p className="text-[#D2BB79] font-bold">{content.questions.q2}</p>
              </div>
            )}
          </section>
        )}

        {/* Dynamic Sections */}
        {content.sections && content.sections.map((sec) => (
          <SectionRenderer key={sec.id} section={sec} />
        ))}

      </div>
    </article>
  );
}
