import { Head } from "$fresh/runtime.ts";
import Navbar from "@/components/Navbar.tsx";
import Footer from '@/components/Footer.tsx';



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
                    <p class="text-left text-md max-w-xl mb-4 text-gray-400">Currently homeless in Raleigh, NC - looking to change that as soon as possible. I know it's not normal to come to a web developer's page and see that he is homeless, but that is my current reality. If you would like to help, feel free to stop by <a href="/donation">my donation page</a> and contribute there - we have merchandise for sale to help fund our next home. Thank you in advance.</p>
                    <p class="text-left text-md max-w-xl mb-4 text-gray-400">Now back to your regularly scheduled programming...</p>


                </div>
                <p class="logo mr-20">
                  <img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1662777703/andrewlisa.jpg" class="rounded-full w-80 h-80 ml-20" alt="andrew and lisa" />
                </p>

            </div>

            {/* Skills section */}

            <div className="flex flex-col items-center justify-center h-auto">
              <div className="flex pb-20 mt-14">
                <div class="flex-1 p-4 mx-auto max-w-screen-md">
                  <h1 class="text-6xl font-bold mb-10 text-gray-900">Skills</h1>
                  <h2 class="text-3xl font-bold mt-2 mb-6 text-gray-600 max-w-xl">Languages</h2>
                  <p class="text-left text-md max-w-xl mb-4 text-gray-400">JavaScript, TypeScript, HTML, CSS, Python, PHP, C#, C++, Java, SQL, NoSQL</p>
                  <h2 class="text-3xl font-bold mt-2 mb-6 text-gray-600 max-w-xl">Frameworks</h2>
                  <p class="text-left text-md max-w-xl mb-4 text-gray-400">React, Next.js, Vue, Nuxt.js, Angular, Express, Laravel, Django, Flask, ASP.NET, Spring Boot, Bootstrap, TailwindCSS, Material UI, Semantic UI, jQuery, Node.js, Svelte, Sapper, Gatsby, GraphQL, Apollo, Prisma, MongoDB, MySQL, PostgreSQL, SQLite, Redis, AWS, GCP, Azure, Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, GitHub, GitLab, BitBucket, Heroku, Netlify, Vercel, DigitalOcean, Linode, Cloudflare, Cloudinary, Stripe, PayPal, Braintree, Twilio, SendGrid, Mailgun, Mailchimp, Algolia, Sentry, Rollbar, New Relic, Datadog, Grafana, Prometheus, Kibana, ElasticSearch, LogDNA, LogRocket</p>
                </div>
              </div>
            </div>

            {/* Education + Work History */}
            <div className="flex flex-col items-center justify-center h-auto">
              <div className="flex pb-20 mt-14">
                <div class="flex-1 p-4 mx-auto max-w-screen-md">
                  <h1 class="text-6xl font-bold mb-10 text-gray-900">Education + Work History</h1>
                  <h2 class="text-3xl font-semibold mb-6 text-gray-700">GeauxWeisbeck4.dev</h2>
                  <h4 class="text-2xl mb-4 text-gray-600">January 2021 - Present</h4>
                  <p class="text-xl mb-4 text-gray-600">Freelance Full-Stack Developer, Marketing Consultant, and Web Designer</p>
                  <ul>
                    <li>Create Jamstack websites and applications using content management systems and static site generators such as 11ty, Next.js, Fresh, and Astro.</li>
                    <li>Offer marketing services by utilizing social media, SEO best practices, and other organic content channels to increase conversion rates for small business clients.</li>
                    <li>Develop backend of applications and connect them to front end frameworks that include React, Svelte, Vue, and Ember.</li>
                    <li>Guide clients through a full design process that includes UX research, UI planning, brand development, empathizing with unique audiences, and converting research into components and layouts for websites and applications.</li>
                    <li>Provide technical support for clients and troubleshoot issues that arise during the development process.</li>
                  </ul>
                  <hr />
                  <h2 class="text-3xl font-semibold mb-6 text-gray-700">Tar Heel Dev Studio</h2>
                  <h4 class="text-2xl mb-4 text-gray-600">March 2022 - Current</h4>
                  <p class="text-xl mb-4 text-gray-600">Owner and Full Stack Developer</p>
                  <ul>
                    <li>Created a web development agency that services clients in the Tri-City Area.</li>
                    <li>Offer web development, marketing, and graphic design services to small business clients.</li>
                    <li>Manage a space for creative project planning and implementation for web developers, designers, artists, and other creative professionals.</li>
                    <li>Produce design systems, components, and other templates for individuals and small businesses.</li>
                    <li>Consult businesses to help them improve bottom line profit margins and guide individuals to find their greater purpose when managing their business.</li>
                  </ul>
                  <hr />
                  <h2 class="text-3xl font-semibold mb-6 text-gray-700">Iron Range Cyber</h2>
                  <h4 class="text-2xl mb-4 text-gray-600">June 2021 - November 2021</h4>
                  <p class="text-xl mb-4 text-gray-600">SOC Analyst</p>
                  <ul>
                    <li>Monitored endpoints, performed security event triage, and responded to incidents while coordinating with team members and management to document and report incidents.</li>
                    <li>Scanned machines with Nessus and accessed our GUI to gain visibility into our client's networks in order to locate threat vulnerabilities and monitor activity.</li>
                    <li>Assisted clients by implementing best security practices to make recommendations, create monthly reports, and respond to any needs by effectively communicating via phone or email within 24 hours of any request.</li>
                    <li>Authored monthly security analysis reports with 100% accurate reporting on security information such as incidents per month, locations of incidents, which software was most effective, and recommendations that could save companies millions of dollars in cybersecurity safety from ransomware attacks.</li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}
