// Images
import heroImage from "../../../assets/img/logo_on_phone.png";

function LandingPageHeroSection() {
  return (
    <section class="relative h-screen overflow-hidden bg-white dark:bg-black">
      <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto ">
          <div class="text-3xl px-2 font-black text-gray-800 uppercase dark:text-white -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            SACapital
          </div>
        </div>
      </header>
      <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-black">
        <div class="container relative flex px-6 py-12 mx-auto">
          <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5 pt-28">
            <h1 class="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Our 🧠
              <span class="text-5xl sm:text-6xl">Your success</span>
            </h1>
            <p class="text-sm text-gray-700 sm:text-base dark:text-white">
              Guiding traders with unparalleled market insights and a rich
              network of professionals. Pioneering the future of finance.
            </p>
            <div class="flex mt-8">
              <a
                href="https://whop.com/sacapital-resources"
                target="_blank"
                class="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-sm hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#features"
                class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-sm"
              >
                Read more
              </a>
            </div>
          </div>
          <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <div className="flex flex-grow justify-center align-top">
              <img src={heroImage} class="max-w-xs m-auto md:max-w-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPageHeroSection;
