export default function Navbar() {
    return (
        <div class="bg-[#2192FF] w-screen text-gray-600 max-h-max">
          <header>
            <nav className="relative flex flex-wrap items-center px-20 justify-between justify-items-center list-none py-2">
              <div className="container-fluid w-full flex flex-wrap items-center">
                <h1 className="text-3xl text-gray-900 hover:text-white hover:underline font-bold text-center pt-4 mb-4"><a href="https://geauxweisbeck4.dev">@GeauxWeisbeck4</a></h1>
                    <ul className="flex pl-40 mr-auto text-white">
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">Home</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/about" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">About</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/blog" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">Blog</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/projects" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">Projects</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/resources" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">Resources</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/donate" className="text-xl text-white hover:underline hover:text-gray-700 font-semibold hover:font-bold">Donate</a>
                        </li>
                    </ul>
                    <a href="/contact" className="inline-flex items-center justify-center border-4 border-gray-900 rounded-lg w-40 h-12 mr-4 mt-2 bg-green-400 hover:bg-green-700 text-white font-bold">Contact Me</a>
              </div>
            </nav>
          </header>
        </div>
    )
}


