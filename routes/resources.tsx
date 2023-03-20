import { Head } from "$fresh/runtime.ts";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GeauxWeisbeck4.dev | Resources Page</title>
      </Head>
      <Navbar />
      {/* Hero Section */}
        <div class="relative overflow-hidden">
            <div class="max-w-screen-xl mx-auto">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Resources</h1>
                </div>
            </div>
            <Footer />
        </div>

    </>
  );
}
