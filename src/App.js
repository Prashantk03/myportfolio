"use client";
import "./App.css";
import pic from "./pic.jpg";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";
import changeHeaderColor from "./script";

const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prashant-kumar-b8a2b9228/",
    icon: FaLinkedin,
  },
  { name: "X", href: "https://x.com/Prashan07486579", icon: FaTwitter },
  { name: "Instagram", href: "", icon: FaInstagram },
  { name: "Github", href: "https://github.com/Prashantk03", icon: FaGithub },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header id="header" className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-customGray"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold leading-6 text-customGray flex items-center hover:text-customBlue"
              >
                <item.icon />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-customBlack opacity-70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-customGray"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customGray  hover:text-customBlue"
                    >
                      <item.icon />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600  ring-gray-900/10 hover:ring-gray-900/20"></div>
        </div>
        <div className="text-center flex items-center justify-center">
          <img
            className="relative rounded-2xl shadow-2xl w-32 h-32  /* Default for small screens (Mobile S) */
             sm:w-40 sm:h-40  /* Mobile M (Small screens) */
             md:w-48 md:h-48  /* Medium screens */
             lg:w-60 lg:h-60  /* Large screens */
             xl:w-72 xl:h-72  /* Extra large screens */
             object-cover"
            src={pic}
            alt="My profile picture"
          />
          <div className="flex flex-col">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl ml-4">
              Hi! I am{" "}
              <p
                id="name"
                className="animate-slide-in translate-x-0 transition-transform duration-300 ease-in-out"
              >
                Prashant...
              </p>
            </h1>
            <strong className="mt-2 animate-bounce">
              Full stack developer
            </strong>
          </div>
        </div>
        <div className="text-center mt-60 border-2 border-black rounded-lg">
          <p className="mt-4 font-bold text-customEblue">About me</p>
          <p className="ml-4 mr-4 mb-4 mt-2 ">
            Hello! I'm Prashant, a final-year B.Tech student and a full-stack
            developer. Alongside my studies, I've developed a strong foundation
            in web development, focusing on building dynamic, responsive
            applications. My goal is to combine academic knowledge with hands-on
            experience to deliver high-quality digital solutions.
          </p>
        </div>

        <section class="py-16 mt-60 bg-customBlack overflow-hidden relative">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-customGray">
              Skills & Expertise
            </h2>
            <p class="mt-4 text-center text-customGray">
              Some of the technologies I work with.
            </p>
          </div>

          <div class="relative overflow-hidden whitespace-nowrap mt-10">
            <div class="flex animate-scrollleft space-x-6 w-[200%]">
              <div class="skill-button">HTML</div>
              <div class="skill-button">CSS</div>
              <div class="skill-button">JavaScript</div>
              <div class="skill-button">React.js</div>
              <div class="skill-button">Angular</div>
              <div class="skill-button">Tailwind CSS</div>
              <div class="skill-button">NodeJS</div>

              <div class="skill-button">HTML</div>
              <div class="skill-button">CSS</div>
              <div class="skill-button">JavaScript</div>
              <div class="skill-button">React.js</div>
              <div class="skill-button">Angular</div>
              <div class="skill-button">Tailwind CSS</div>
              <div class="skill-button">NodeJS</div>
            </div>

            <div class="mt-6 flex animate-scrollright space-x-6 w-[200%]">
              <div class="skill-button">Python</div>
              <div class="skill-button">Django</div>
              <div class="skill-button">ExpressJS</div>
              <div class="skill-button">MongoDB</div>
              <div class="skill-button">Git</div>
              <div class="skill-button">GitHub</div>
              <div class="skill-button">EJS</div>

              <div class="skill-button">Python</div>
              <div class="skill-button">Django</div>
              <div class="skill-button">ExpressJS</div>
              <div class="skill-button">MongoDB</div>
              <div class="skill-button">Git</div>
              <div class="skill-button">GitHub</div>
              <div class="skill-button">EJS</div>
            </div>
          </div>
        </section>

        <div class="py-10 mt-60 bg-customBlack overflow-hidden relative">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 class="text-3xl font-bold  text-customGray flex items-center gap-2">
              <FaBriefcase className="w-6 h-6 text-customGray" />
              Experience and Certification
            </h2>
            <p class="mt-4 text-customGray">
              <div class="font-bold text-lg">Full-stack developer</div>
              GeeksforGeeks . Internship<br/>
              Jul 2024 - Oct 2024<br/>
              <a
                class="text-customEblue hover:text-customBlue"
                href="https://media.geeksforgeeks.org/certificates/1728480497/dfab8253612664a63332cd650211921f.pdf"
              >
                View Certification
              </a>
            </p>
          </div>
        </div>
        <div class="py-10 mt-60 bg-customBlack overflow-hidden relative">
          <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold  text-customGray inline-flex items-center gap-2">
              PROJECTS
            </h2>
            <p class="mt-4 text-customGray">
              <div class="font-bold text-lg">Health Tracker</div>
              Created a web application to track the workout related task. This project is Created with Angular 15+<br/> 
              Github Link - <a href="https://github.com/Prashantk03/Health-tracker" class="text-customEblue hover:text-customBlue">https://github.com/Prashantk03/Health-tracker</a><br/>
              Vercel Link - <a href="https://health-tracker-vert.vercel.app/" class="text-customEblue hover:text-customBlue">https://health-tracker-vert.vercel.app/</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
