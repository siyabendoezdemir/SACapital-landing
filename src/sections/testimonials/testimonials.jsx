function TestimonialsSection() {
  return (
    <section className="bg-black pt-14">
      <h1 className="text-4xl text-center font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-7xl dark:text-white">
        Client
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mx-3 px-3">
          Reviews
        </span>
      </h1>
      <div class="relative flex justify-center items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl bg-white">
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              "I've never found a group as valuable as SACapital. The mentors
              helped me understand more about myself and were always helpful
              providing me with knowledge that I couldn't find anywhere else.
              Thanks to all the legends that made this."
            </p>
            <h2 class="mt-4 text-xs font-semibold tracking-widest text-purple-600 uppercase">
              Seuseli
              <span href="#" class="font-semibold text-gray-400 lg:mb-0 ml-1">
                - Discord Member
              </span>
            </h2>
          </div>
          <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl bg-white">
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              "I am confident that anyone that is willing to put in the work
              will grow their portfolio of knowledge and understanding of the
              industry theres no easy way to become consistently profitable but
              at least this bootcamp has allowed me to understand the "why"
              looking forward to growing and making my dreams a reality thank
              you to the team"
            </p>
            <h2 class="mt-4 text-xs font-semibold tracking-widest text-purple-600 uppercase">
              Driftmeister
              <span href="#" class="font-semibold text-gray-400 lg:mb-0 ml-1">
                - STB Member
              </span>
            </h2>
          </div>
          <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl bg-white">
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              "I feel like I have finally found a true support network and
              sometimes that all you need in this market to excel. I truly
              believe that with these people on my side I can fulfill all my
              dreams and visions in due time."
            </p>
            <h2 class="mt-4 text-xs font-semibold tracking-widest text-purple-600 uppercase">
              TradesByGin
              <span href="#" class="font-semibold text-gray-400 lg:mb-0 ml-1">
                - STB Member
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
