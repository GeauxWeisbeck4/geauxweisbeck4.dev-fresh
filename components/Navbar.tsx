export default function Navbar() {
    return (
        <div class="w-screen text-gray-600 max-h-max">
          <header>
            <nav className="relative flex flex-wrap items-center px-20 justify-between justify-items-center list-none py-2">
              <div className="container-fluid w-full flex flex-wrap items-center">
                <h1 className="text-3xl text-green-500 font-bold text-center pt-4 mb-4"><a href="https://geauxweisbeck4.dev">@GeauxWeisbeck4</a></h1>
                    <ul className="flex pl-40 mr-auto">
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-gray-300 font-semibold">Home</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-gray-300 font-semibold">About</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/blog" className="text-xl text-gray-300 font-semibold">Blog</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-gray-300 font-semibold">Projects</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-gray-300 font-semibold">Resources</a>
                        </li>
                        <li className="p-2 ml-4">
                            <a href="/" className="text-xl text-gray-300 font-semibold">Docs</a>
                        </li>
                    </ul>
                    <a href="/contact" className="border-solid rounded-md border-2 border-gray-300 px-3 font-bold">Contact Me</a>
              </div>
            </nav>
          </header>
        </div>
    )
}


