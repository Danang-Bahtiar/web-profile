export default function SectionHeader({ children }) {
  return (
    <h2 className="text-2xl font-bold font-mono text-white mt-4 mb-4 pb-2 border-b-2 border-cyan-800 flex flex-row items-center gap-3">
      {children}
    </h2>
  );
}