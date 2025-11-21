// components/Docs.js

import CodeDisplay from "@/component/layout/codeDisplay";
// Assuming the component for a single expandable item is named AccordionItem
// or the list container is named FAQAccordion as per the previous example.
// Using AccordionItem as per original import, but typically it would be FAQAccordion.
import AccordionItem from "@/component/layout/docs";

export default function FAQ() {
  const documentationData = [
  ];

  return (
    <div className="text-white">
      {documentationData.map((item, index) => (
        // Render each item using the AccordionItem component
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
      {/* The final divider after the last item, maintaining existing styling */}
      <div className="h-px w-full bg-cyan-800" />
    </div>
  );
}
