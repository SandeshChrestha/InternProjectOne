export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-5xl font-extrabold text-white">
        Tailwind v4 is Working!
      </h1>

      <p className="text-gray-300 text-lg max-w-md text-center">
        This is a simple demo showing Tailwind v4 utilities like flexbox,
        spacing, typography, colors, and hover effects.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-colors">
          Primary Button
        </button>

        <button className="px-6 py-3 bg-gray-700 text-gray-100 font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-colors">
          Secondary Button
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-red-500 h-24 w-24 rounded-lg shadow-lg hover:scale-105 transform transition-transform"></div>
        <div className="bg-green-500 h-24 w-24 rounded-lg shadow-lg hover:scale-105 transform transition-transform"></div>
        <div className="bg-yellow-500 h-24 w-24 rounded-lg shadow-lg hover:scale-105 transform transition-transform"></div>
      </div>
    </div>
  );
}
