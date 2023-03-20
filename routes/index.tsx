import { Head } from "$fresh/runtime.ts";
import Navbar from "@/components/Navbar.tsx";
import Features from "@/components/Features.tsx";
import Projects from "@/components/Projects.tsx";
import Blogpost from "@/components/Blogpost.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GeauxWeisbeck4.dev | Home Page of Andrew Weisbeck</title>
      </Head>
      <Navbar />
      {/* Hero Section */}
      <div class="w-screen flex flex-col items-center justify-center h-auto">
        <div class="flex pb-20 mt-14">
            <div class="flex-1 p-4 mx-auto max-w-screen-md">
              <h1 class="text-6xl font-bold mb-10 text-gray-900">Andrew Weisbeck</h1>
              <h2 class="text-3xl font-bold mt-2 mb-6 text-gray-600 max-w-xl">Full Stack Developer, Entrepreneur, and Content Creator</h2>
              <p class="text-left text-md max-w-xl mb-4 text-gray-400">I am a self-taught developer with a passion for learning and a desire to help others. Currently managing my freelance business, blogging, and creating a web developer course for entrepreneurs who want to learn the basics of web development.</p>
              <p class="text-left text-md max-w-xl mb-4 text-gray-400">Seeking collaboration opportunities and always taking new clients. Interested in working together? Let's figure out a time to chat!</p>


              {/* Social Media and Blog Links */}
              <ul class="flex items-center justify-center pt-6 pr-12">
                <li><a href="https://deno.land/" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670759249/icons8-deno-48_rmukkg.png" class="bg-slate-100 rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://github.com/geauxweisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761166/icons8-github-48_ckl4vv.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://geauxweisbeck4.medium.com/" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761369/icons8-medium-monogram-48_y3um7o.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://fosstodon.org/@GeauxWeisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670757884/icons8-mastodon-is-an-online_-self-hosted-social-media_-and-social-networking-service.-48_vmobth.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://dribbble.com/GeauxWeisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-dribbble-48_yqiegl.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.linkedin.com/in/geauxweisbeck4/" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-linkedin-48_1_a1uefn.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.twitch.tv/geauxweisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670761017/icons8-twitch-48_fesyin.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.reddit.com/r/GeauxWeisbeck4dev/" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760394/icons8-reddit-48_1_p5stmk.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.youtube.com/channel/UC8S2Rk7U83DnGaT3EibIREw" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760394/icons8-youtube-squared-48_i7kktn.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.patreon.com/GeauxWeisbeck4dev" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760853/icons8-patreon-48_itcrdz.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://www.buymeacoffee.com/GeauxWeisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,w_32/v1670760771/icons8-buy-me-a-coffee-help-creators-receive-support-from-their-audience-48_mbvtqt.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
                <li><a href="https://ko-fi.com/geauxweisbeck4" class="hover:text-blue-300"><img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,h_32/v1670760771/icons8-ko-fi-48_p353av.png" class="rounded-md hover:bg-blue-300 mr-4" /></a></li>
              </ul>

              <nav class="mt-8 mb-4">
                <a class="inline-flex items-center justify-center border-4 border-gray-900 rounded-lg w-60 h-12 mr-4 mt-2 bg-green-400 hover:bg-green-600 text-white font-bold" href="/services">
                  Hire Me
                </a>
                <a class="inline-flex items-center justify-center border-4 border-gray-900 rounded-lg w-60 h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold mt-2" href="/projects">
                  My Resume
                </a>
              </nav>

            </div>
            <p class="logo mr-20">
              <img class="ml-40 rounded-full" src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/c_scale,q_auto:best,w_412/v1677220638/avatar_fvxxbc.png" alt="Andrew Weisbeck Avatar" />
            </p>
          </div>
        </div>
    <div/>
          {/* Featured Services */}
          <div class="pt-12">
            <Features />
          </div>
          {/* Call to Action */}
          <div class="dark:bg-gray-900 mt-12">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white pt-8">Full-Stack & Jamstack Development Services</h1>
            <div class="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
              <div class="flex flex-col items-center max-w-lg mx-auto text-center">
                <h2 class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                Web development
                </h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!</p>

            <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white transition-colors duration-300 bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start now
            </a>
        </div>

        <div class="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                App development
            </h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!</p>

            <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-700 transition-colors duration-300 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Start now
            </a>
        </div>
    </div>
</div>


          {/* Featured Projects */}
          <div class="pt-12">
            <Projects />
          </div>


          {/* Featured Blog Posts */}
          <div class="pt-12">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">From the Blog</h1>
            <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Some featured posts to check out, straight from the blog</p>
            <Blogpost />
          </div>
          {/* Contact Form */}
          <section class="p-20">
<div class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 pt-8">
    <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Geaux Weekly</span> Newsletter</h2>

            <p class="mt-2 text-sm text-gray-50 dark:text-gray-50 md:text-gray-50">Each week you'll get updates, deals, n</p>
        </div>
    </div>

    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
            </div>
        </form>
    </div>
</div>
</section>
          <div class="pt-12">
            <Footer />
          </div>

    </>
  );
}
