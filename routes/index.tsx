import { Head } from "$fresh/runtime.ts";
import Navbar from "@/components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GeauxWeisbeck4.dev | Home Page of Andrew Weisbeck</title>
      </Head>
      <Navbar />
      {/* Hero Section */}
      <div className="w-screen flex flex-col items-center justify-center h-auto">
        <div className="flex pb-20 mt-14">
            <div class="flex-1 p-4 mx-auto max-w-screen-md">
              <h1 class="text-6xl font-bold mb-10 text-gray-900">Andrew Weisbeck</h1>
              <h2 class="text-3xl font-bold mt-2 mb-6 text-gray-600 max-w-xl">Full Stack Developer, Entrepreneur, and Content Creator</h2>
              <p class="text-left text-md max-w-xl mb-4 text-gray-400">I am a self-taught developer with a passion for learning and a desire to help others. Currently managing my freelance business, blogging, and creating a web developer course for entrepreneurs who want to learn the basics of web development.</p>
              <p class="text-left text-md max-w-xl mb-4 text-gray-400">Seeking collaboration opportunities and always taking new clients. Interested in working together? Let's figure out a time to chat!</p>
              {/* Small Hero Navigation bar */}
              <ul className="flex items-center justify-center pt-4 divide-x-2 divide-solid pr-12">
                <li><a href="https://tarheeldevstudio.com" target="_blank" class="text-emerald-400 hover:text-orange-500 font-bold no-underline pr-4">Tar Heel Digital</a></li>
                <li><a href="https://geauxweisbeck4.substack.com" target="_blank" class="text-emerald-400 hover:text-orange-500 font-bold no-underline pr-4">MEAN Stack Dev</a></li>
                <li><a href="https://rebelsadvocate.dev" target="_blank" class="text-emerald-400 hover:text-orange-500 font-bold no-underline pr-4">Rebel's Advocate</a></li>
                <li><a href="https://andrewsdigital.garden" target="_blank" class="text-emerald-400 hover:text-orange-500 font-bold no-underline pr-4">My Digital Garden</a></li>
              </ul>

            </div>
          </div>


      </div>


    </>
  );
}
