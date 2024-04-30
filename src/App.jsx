export default function App() {
  return (
    <main className="h-screen w-screen flex flex-col-reverse sm:flex-row justify-center items-center bg-gray-900 gap-12 px-4 sm:px-0">
      <section className="w-full sm:w-1/2">
        <h1 className="font-bold text-4xl sm:text-6xl text-white mb-4">
          <span className="bg-gradient-to-br text-transparent bg-clip-text from-blue-500 via-purple-500 to-pink-400">
            Vite
          </span>
          +
          <span className="bg-gradient-to-b text-transparent bg-clip-text from-blue-400 to-blue-600">
            React
          </span>
          <br />
          Next Generation <br /> Frontend Tooling
        </h1>

        <p className="font-semibold text-xl sm:text-4xl text-gray-400 mb-8">
          Get ready for a development environment <br /> that can finally catch
          up with you.
        </p>
        <a
          href="https://panntod.github.io/Project-Mandiri/linktree"
          className="px-6 py-3 bg-gray-900 border border-blue-600 text-blue-500 rounded-full hover:bg-blue-700 hover:text-slate-200 transition duration-300 ease-in-out transform hover:scale-105"
        >
          See Developer Profile
        </a>
      </section>
      <aside className="relative flex justify-center items-center w-full sm:w-auto">
        <figure className="z-10 w-32 sm:w-72 h-auto">
          <img
            src="/vite.svg"
            alt="vite's logo"
            className="object-contain"
            width={300}
            height={300}
          />
        </figure>
        <div className="absolute w-52 sm:w-96 h-52 sm:h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full blur-3xl" />
      </aside>
    </main>
  );
}
