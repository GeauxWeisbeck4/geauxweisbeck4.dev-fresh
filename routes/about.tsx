import { Head } from "$fresh/runtime.ts";
import Navbar from "@/components/Navbar.tsx";


export default function AboutPage() {
    return (
        <>
          <Head>
            <title>GeauxWeisbeck4.dev | About Andrew</title>
          </Head>
          <Navbar />
          <div className="w-screen flex flex-col items-center justify-center h-auto">
            <div className="flex pb-20 mt-14">
                <div class="flex-1 p-4 mx-auto max-w-screen-md">
                    <h1 class="text-6xl font-bold mb-10 text-gray-900">About Andrew</h1>
                    <h2 class="text-3xl font-bold mt-2 mb-6 text-gray-600 max-w-xl">31 Year Old Full Stack Developer & Entrepreneur</h2>

                </div>
            </div>
          </div>
        </>
    )
}
