// components/Docs.js

import CodeDisplay from "@/component/layout/codeDisplay";
// Assuming the component for a single expandable item is named AccordionItem
// or the list container is named FAQAccordion as per the previous example.
// Using AccordionItem as per original import, but typically it would be FAQAccordion.
import AccordionItem from "@/component/layout/docs";

export default function Docs() {
  const documentationData = [
    {
      title: "🚀 Getting Started: Installation",
      content: (
        <div>
          <p className="mb-4">
            <strong>XRohrJS</strong> can be easily installed in your project
            using either npm or yarn. Use one of the following commands:
          </p>
          {/* npm Installation */}
          <CodeDisplay
            fileName="Terminal"
            language="bash"
            code={`npm install @dan_koyuki/xrohrjs`}
          />
          {/* yarn Installation */}
          <CodeDisplay
            fileName="Terminal"
            language="bash"
            code={`yarn add @dan_koyuki/xrohrjs`}
          />
        </div>
      ),
    },
    {
      title: "📂 Project Structure",
      content: (
        <div>
          <p className="mb-4 text-neutral-400">
            XRohrJS relies on a specific directory structure to automatically
            load your modules. Here is how a standard project looks:
          </p>
          <CodeDisplay
            code={`my-project/
├── src/
│   ├── axiosCalls/       # API Call Definitions (Rheos)
│   │   └── getUser.axios.js
│   │
│   ├── events/           # Event Listeners (SparkLite)
│   │   └── userCreated.event.js
│   │
│   ├── middlewares/      # Express & Independent Middlewares
│   │   └── verify.js
│   │
│   └── routes/           # Route Recipes
│       └── health.js
│
├── index.js              # Entry Point (Start Server)
├── package.json
└── xrohr.config.js       # Main Configuration`}
            fileName="Directory Structure"
            language="bash" // "bash" or "text" usually gives good highlighting for trees
          />
        </div>
      ),
    },
    {
      title: "⚙️ Creating the Configuration File",
      content: (
        <div>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>
              <strong>XRohrJS</strong> automatically loads its configuration
              from a file named <strong>`xrohr.config.js`</strong>.
            </li>
            <li>
              Create the `xrohr.config.js` file in the <strong>root directory</strong> of your project.
            </li>
            <li>
              Copy and modify the following code example as needed for your
              specific environment:
            </li>
          </ol>
          <CodeDisplay
            code={`import { XRohrJS } from "@dan_koyuki/xrohrjs";

export default XRohrJS.XrohrConfig({
  // Server configuration options
  "server": {
    port: process.env.PORT || 3001,
    allowedOrigins: ["http://localhost:3000"], // CORS allowed origins
    allowedMethods: ["GET", "POST", "PUT", "DELETE"], // CORS allowed methods
    useDefaultCors: true, // Enable/disable default CORS settings
    useJsonParser: true, // Enable/disable JSON body parser
    useUrlEncoded: true // Enable/disable URL-encoded body parser
  },
  // Router configuration
  "router": {
    useDefaultRouterRegistration: true, // Auto-register routes from default directory
    apiPrefix: "/api", // Base path for all API routes
  },
  // Feature flags
  "sparkLite": {
    enabled: true // Enable/disable SparkLite logging/monitoring
  },
  // Axios integration settings
  "axios": {
    enabled: true,
    defaultTimeout: 10000, // 10 seconds timeout
    baseURL: "http://localhost:3000/api" // Default base URL for requests
  },
  // Memoria in-memory caching settings
  "memoria": {
    enabled: true
  }
})
            `}
            fileName="xrohr.config.js"
            language="javascript"
          />
        </div>
      ),
    },
    {
      title: "▶️ Starting the XRohrJS Server",
      content: (
        <div>
          <p className="mb-4">
            After configuring **`xrohr.config.js`**, you can start the
            application server. It is recommended to use an **Async IIFE**
            (Immediately Invoked Function Expression) to handle the top-level
            `await` for robust error handling during the startup process.
          </p>
          <CodeDisplay
            code={`import { XRohrJS } from "@dan_koyuki/xrohrjs";

// We use an async IIFE to handle the top-level await and errors
(async () => {
  try {
    console.log("Starting application...");
      
    // .create() loads all configs, routes, and services
    const client = await XRohrJS.create();
      
    // .start() begins listening on the port defined in your config
    client.start();
      
    // You could access other modules/clients here after startup
    // const spark = client.getSparkApp();
  } catch (error) {
    // This ensures any errors during startup are not hidden
    console.error("Failed to start XRohrJS application:", error);
    process.exit(1); // Exit with an error code
  }
}())`}
            fileName="server.js"
            language="javascript"
          />

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Alternative (Shorter Syntax)
          </h3>
          <p className="mb-4 text-neutral-400">
            If your environment supports **top-level await** directly (e.g., in
            a module context), you can use the shorter syntax, though the IIFE
            pattern is often preferred for centralized error handling.
          </p>
          <CodeDisplay
            code={`import { XRohrJS } from '@dan_koyuki/xrohrjs'

const client = await XRohrJS.create();
client.start();`}
            fileName="server_minimal.js"
            language="javascript"
          />
        </div>
      ),
    },
    {
      title: "🛣️ Creating Your First Route",
      content: (
        <div>
          <p className="mb-4">
            <strong>XRohrJS</strong> automatically imports and registers all
            route files found inside the <strong>`./src/routes`</strong>{" "}
            directory that end with
            <strong>`.js`</strong> or <strong>`.ts`</strong>.
          </p>
          <p className="text-neutral-400 mb-4">
            A single route file can contain multiple endpoints, all registered
            under the file's specified <strong>`basePath`</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Example: A Health Check Route
          </h3>
          <p className="text-neutral-400 mb-2">
            Create a file (e.g., `./src/routes/health.js`) using the following
            structure:
          </p>
          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs'

export default XrohrJS.Route({
  // Base path for all routes defined in this file
  basePath: "/health", 
  
  // For standard, user-defined routes, use "TemplateRecipe"
  type: "TemplateRecipe", 
  
  // Array of route definitions
  routes: [
    {
      name: "healthCheck", // Internal name for the route
      method: "GET",
      // Optional: Array of middleware names (must be defined in ./src/middlewares)
      middlewares: ["verify"],
      path: "/", // Endpoint path relative to the basePath (e.g., /api/health/)
      handlers: async (req, res) => {
        return res.json({ status: "OK" });
      }
    }
  ]
})`}
            fileName="health.js"
            language="javascript"
          />
        </div>
      ),
    },
    {
      title: "⚙️ Creating Middleware",
      content: (
        <div>
          <p className="mb-4">
            Middleware are functions that run <strong>before</strong> your main
            route handler. XRohrJS can load two types:{" "}
            <strong>`express`</strong> (for routes) and{" "}
            <strong>`Independent`</strong> (for data pipelines).
          </p>
          <p className="mb-4">
            The framework automatically loads all files from the
            <strong>`./src/middlewares`</strong> directory. The{" "}
            <strong>file name</strong> (e.g., "verify") is used as the key to
            access it.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Example: An 'express' Middleware
          </h3>
          <p className="text-neutral-400 mb-2">
            Create a file named <strong>`./src/middlewares/verify.js`</strong>.
            This will be our route-level authentication check.
          </p>
          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs';

// 1. Define the handler function (a standard Express middleware)
const verifyHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  console.log("Middleware 'verify' executed!");
  
  // Call next() to pass control to the next function
  next(); 
};

// 2. Export it as a MiddlewareTemplate object
// The 'name' should match the filename for clarity.
export default XrohrJS.Middleware({
    name: "verify",
    type: "express",
    handler: verifyHandler
});`}
            fileName="verify.js"
            language="javascript"
          />
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
