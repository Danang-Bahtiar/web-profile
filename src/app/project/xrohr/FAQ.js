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
            type you will use. As shown in the &quot;Creating Your First Route&quot;
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
            It is intended to be used as a metadata &quot;blueprint&quot; that tells the
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
    {
      title: "What is an 'Independent' Middleware?",
      content: (
        <div>
          <p className="text-neutral-400 mb-4">
            While an <strong>`express`</strong> middleware is used for API
            routes (handling <strong>`req`</strong> and <strong>`res`</strong>),
            an <strong>`Independent`</strong> middleware is a standalone data
            processing function.
          </p>
          <p className="text-neutral-400 mb-4">
            This is an advanced feature. These functions do not receive `req` or
            `res`. They are designed to be used in &quot;pipelines,&quot; such as
            formatting data for a <strong>`ConstructRecipe`</strong> or in an
            event handler.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Example: A &apos;format-user&apos; Middleware
          </h3>
          <p className="text-neutral-400 mb-2">
            Create a file named{" "}
            <strong>`./src/middlewares/format-user.js`</strong>.
          </p>
          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs';

// 1. Define the handler function (just a plain function)
const formatUserHandler = (userPayload) => {
  // This function just removes the password
  const { password, ...safeUser } = userPayload;
  return safeUser;
};

// 2. Export it as an Independent MiddlewareTemplate
export default XrohrJS.Middleware({
    name: "format-user",
    type: "Independent",
    handler: formatUserHandler
});`}
            fileName="format-user.js"
            language="javascript"
          />
        </div>
      ),
    },
    {
      title: "🔌 How to Use Middleware in a Route?",
      content: (
        <div>
          <p className="mb-4">
            Once your middleware is created in the{" "}
            <strong>`./src/middlewares`</strong> folder, you can easily apply it
            to any route.
          </p>
          <p className="mb-4">
            In your route definition file, simply add the middleware&apos;s{" "}
            <strong>file name</strong> (as a string) to the{" "}
            <strong>`middlewares`</strong> array.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Example: Applying the &apos;verify&apos; Middleware
          </h3>
          <p className="text-neutral-400 mb-2">
            Let&apos;s modify our <strong>`./src/routes/health.js`</strong> file to
            use the &quot;verify&quot; middleware we just created.
          </p>
          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs'

export default XrohrJS.Route({
  basePath: "/health", 
  type: "TemplateRecipe", 
  routes: [
    {
      name: "healthCheck",
      method: "GET",
      // highlight-next-line
      middlewares: ["verify"], // <-- Just add the file name here
      path: "/",
      handlers: async (req, res) => {
        return res.json({ status: "OK" });
      }
    }
  ]
})`}
            fileName="health.js"
            language="javascript"
          />
          <p className="text-neutral-400 mt-4">
            Now, any request to <strong>`/api/health/`</strong> will be{" "}
            <strong>forced</strong> to pass through the `verify.js` middleware
            before the `handlers` function is ever called.
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
