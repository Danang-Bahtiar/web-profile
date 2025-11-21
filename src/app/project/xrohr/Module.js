// components/Docs.js

import CodeDisplay from "@/component/layout/codeDisplay";
// Assuming the component for a single expandable item is named AccordionItem
// or the list container is named FAQAccordion as per the previous example.
// Using AccordionItem as per original import, but typically it would be FAQAccordion.
import AccordionItem from "@/component/layout/docs";

export default function Module() {
  const documentationData = [
    {
      title: "🌊 Defining API Calls (Rheos)",
      content: (
        <div>
          <p className="mb-4">
            The <strong>Rheos</strong> module manages external API interactions.
            Instead of writing raw Axios calls throughout your code, you define
            them as configuration objects.
          </p>
          <p className="mb-4">
            XRohrJS automatically loads all API call definitions from the
            <strong>`./src/axiosCalls`</strong> directory that end with{" "}
            <strong>`.axios.js`</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Creating an AxiosCall
          </h3>
          <p className="text-neutral-400 mb-2">
            Create a file (e.g., `./src/axiosCalls/getUser.axios.js`) and use
            the
            <strong>`XrohrJS.AxiosCall`</strong> factory to define the request
            config.
          </p>

          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs';

export default XrohrJS.AxiosCall({
  // Unique name to identify this call (used when executing it)
  name: "fetchUserData",
  
  // Standard HTTP method
  method: "GET",
  
  // Endpoint relative to the baseURL defined in xrohr.config.js
  endpoint: "/users/12345",
  
  // Optional: Headers specifically for this request
  headers: {
    "Authorization": "Bearer <token>"
  },

  // Optional: Resilience Settings
  timeout: 5000, // 5 seconds
  
  // Priority Level (1-10). 
  // Note: Priority 1 is reserved strictly for Health Checks.
  priority: 2, 
  
  // If true, Rheos will attempt to use the backup 'subURL' 
  // if the main 'baseURL' fails.
  tryWithSubURL: true 
});`}
            fileName="getUser.axios.js"
            language="javascript"
          />

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Key Properties
          </h3>
          <ul className="list-disc pl-6 text-neutral-400 space-y-2">
            <li>
              <strong>priority</strong>: Determines the execution order when
              multiple calls are queued. Level <strong>1</strong> is the highest
              and is reserved for endpoint health checks.
            </li>
            <li>
              <strong>tryWithSubURL</strong>: A key resilience feature. If
              enabled, Rheos will automatically retry the request using the
              secondary URL configured in your `xrohr.config.js` if the primary
              fails.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "⚡ Handling Events (SparkLite)",
      content: (
        <div>
          <p className="mb-4">
            <strong>SparkLite</strong> is an event-driven module that allows
            different parts of your application to communicate without being
            tightly coupled.
          </p>
          <p className="mb-4">
            XRohrJS automatically loads all event definitions from the
            <strong>`./src/events`</strong> directory that end in{" "}
            <strong>`.event.js`</strong> or <strong>`.event.ts`</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Defining an Event Listener
          </h3>
          <p className="text-neutral-400 mb-2">
            Create a file (e.g., `./src/events/userCreated.event.js`) using the
            <strong>`XrohrJS.SparkEvent`</strong> factory.
          </p>
          <p className="text-neutral-400 mb-4">
            <strong>Unique Feature:</strong> The listener receives a{" "}
            <code>callback</code> function. If you call this callback with data,
            the publisher can <code>await</code> the result!
          </p>

          <CodeDisplay
            code={`import { XrohrJS } from '@dan_koyuki/xrohrjs';

export default XrohrJS.SparkEvent({
  eventName: "USER_CREATED",
  
  // The listener receives the data payload AND a callback
  listener: async (data, callback) => {
    console.log(\`New user created: \${data.username}\`);

    // Perform async operations (e.g., send welcome email)
    await sendEmail(data.email);

    // If a callback exists, we can send a response back to the publisher
    if (callback) {
      callback({ success: true, timestamp: Date.now() });
    }
  }
});`}
            fileName="userCreated.event.js"
            language="javascript"
          />

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            Publishing an Event
          </h3>
          <p className="text-neutral-400 mb-2">
            You can publish events from anywhere in your app (like a Route
            handler) using the SparkLite instance.
          </p>

          <CodeDisplay
            code={`// Inside a route handler or service
const spark = client.getSparkApp();

// Standard fire-and-forget
spark.Publish("USER_CREATED", { username: "Dan", email: "test@test.com" });

// OR: Await the response (Request/Response pattern)
const result = await spark.Publish("USER_CREATED", { username: "Dan" });
console.log(result); // Output: { success: true, timestamp: ... }`}
            fileName="someController.js"
            language="javascript"
          />
        </div>
      ),
    },
    {
      title: "🧠 In-Memory Caching (Memoria)",
      content: (
        <div>
          <p className="mb-4">
            <strong>Memoria</strong> is a lightweight, in-memory data store
            included with XRohrJS. It uses JavaScript `Map` objects to provide
            extremely fast read/write access.
          </p>
          <p className="mb-4">
            It is designed to be a transient replacement for services like Redis
            during development or for data that doesn&apos;t need to persist after a
            server restart.
          </p>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            1. Creating a Memoria Store
          </h3>
          <p className="text-neutral-400 mb-2">
            Initialize a store dynamically using{" "}
            <strong>`client.createMemoria()`</strong>. You simply provide a name
            for the collection and the field to use as the{" "}
            <strong>primary key</strong>.
          </p>
          <p className="text-neutral-500 text-sm mb-4 italic">
            *Note: Full schema validation is currently on the roadmap for a
            future release.
          </p>

          <CodeDisplay
            code={`// Define the primary key field name
const primaryKey = "id";

// Create the store named "users"
// Signature: createMemoria(name, primaryKey)
const response = client.createMemoria("users", primaryKey);

if (response.status === "Success") {
  console.log("User cache created!");
} else {
  console.error("Failed to create cache:", response.error);
}`}
            fileName="startup.js"
            language="javascript"
          />

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">
            2. Using the Store
          </h3>
          <p className="text-neutral-400 mb-2">
            Once created, you can retrieve the store and perform operations.
            <strong>Memoria automatically handles key extraction</strong> when
            setting records.
          </p>

          <CodeDisplay
            code={`// Retrieve the main Memoria manager
const memoriaApp = client.getMemoriaApp();
const userStore = memoriaApp.get("users");

// --- Operations ---

// 1. Add or Update a Record (setRecord)
// Just pass the data object. Memoria extracts the key ("id") automatically.
userStore.setRecord({ 
  id: "u_123", 
  name: "Dan", 
  role: "Admin" 
});

// 2. Retrieve a Record (getRecord)
const user = userStore.getRecord("u_123");
console.log(user.name); // "Dan"

// 3. Remove a Record
userStore.removeRecord("u_123");

// 4. Get All Records (returns a Map)
const allUsers = userStore.getAll();`}
            fileName="userService.js"
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
