// components/Docs.js

import CodeDisplay from "@/component/layout/codeDisplay";
// Assuming the component for a single expandable item is named AccordionItem
// or the list container is named FAQAccordion as per the previous example.
// Using AccordionItem as per original import, but typically it would be FAQAccordion.
import AccordionItem from "@/component/layout/docs";

export default function FAQ() {
  const documentationData = [
    {
      title: "What is TemplateRecipe Route Definition?",
      content: (
        <div>
          <p className="text-neutral-400 mb-4">
            XRohrJS uses two primary types to define routes:{" "}
            <strong>`TemplateRecipe`</strong> and{" "}
            <strong>`ConstructRecipe`</strong>.
          </p>
          <p className="text-neutral-400 mb-4">
            The <strong>`TemplateRecipe`</strong> is the standard, most common
            type you will use. As shown in the "Creating Your First Route"
            guide, it uses a strict, predefined template designed for
            manually-written route handlers.
          </p>
        </div>
      ),
    },
    {
      title: "What is ConstructRecipe on Route Definition?",
      content: (
        <div>
          <p className="text-neutral-400 mb-4">
            While <strong>`TemplateRecipe`</strong> is for manually-written
            handlers, the <strong>`ConstructRecipe`</strong> is a more advanced,
            conceptual type.
          </p>
          <p className="text-neutral-400 mb-4">
            It is intended to be used as a metadata "blueprint" that tells the
            XRohrJS server to <strong>dynamically generate</strong> an endpoint
            (e.g., from a database or a remote source) without a pre-written
            handler function.
          </p>
          <p className="text-neutral-400 mb-4">
            This feature is part of the core thesis behind the framework but is
            not fully implemented in the current version (see Logs).
          </p>
        </div>
      ),
    },
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
