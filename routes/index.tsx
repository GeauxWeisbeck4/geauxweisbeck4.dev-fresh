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

              {/* Social Media and Blog Links */}
              <ul className="flex items-center justify-center pt-6 pr-12">
              <li><a href="https://deno.land/" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670759249/icons8-deno-48_rmukkg.png" class="bg-slate-100 rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://github.com/geauxweisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761166/icons8-github-48_ckl4vv.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://geauxweisbeck4.medium.com/" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761369/icons8-medium-monogram-48_y3um7o.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://fosstodon.org/@GeauxWeisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670757884/icons8-mastodon-is-an-online_-self-hosted-social-media_-and-social-networking-service.-48_vmobth.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://dribbble.com/GeauxWeisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-dribbble-48_yqiegl.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.linkedin.com/in/geauxweisbeck4/" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-linkedin-48_1_a1uefn.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.twitch.tv/geauxweisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761017/icons8-twitch-48_fesyin.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.reddit.com/r/GeauxWeisbeck4dev/" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-reddit-48_1_p5stmk.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.youtube.com/channel/UC8S2Rk7U83DnGaT3EibIREw" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760394/icons8-youtube-squared-48_i7kktn.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.patreon.com/GeauxWeisbeck4dev" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760853/icons8-patreon-48_itcrdz.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://www.buymeacoffee.com/GeauxWeisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760771/icons8-buy-me-a-coffee-help-creators-receive-support-from-their-audience-48_mbvtqt.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
                <li><a href="https://ko-fi.com/geauxweisbeck4" class="hover:text-sky-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760771/icons8-ko-fi-48_p353av.png" class="rounded-md hover:bg-sky-300 mr-4" /></a></li>
              </ul>

              <nav class="mt-8 mb-4">
                <a class="inline-flex items-center justify-center border-4 border-gray-900 rounded-lg w-60 h-12 mr-4 mt-2 bg-green-400 hover:bg-green-700 text-white font-bold px-2 py-2" href="/contact">
                  Contact me
                </a>
                <a class="inline-flex items-center justify-center border-4 border-gray-900 rounded-lg w-60 h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold mt-2 px-2 py-2" href="/projects">
                  My Resume
                </a>
              </nav>
              <p className="logo mr-20">
                <img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,q_auto:best,w_412/v1677220638/avatar_fvxxbc.png" alt="Andrew Weisbeck Avatar" />
              </p>
            </div>
          </div>


      </div>


    </>
  );
}
