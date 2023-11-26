// Icons
import dumbbell from "../../assets/icons/dumbbell.svg";
import plan from "../../assets/icons/plan.svg";
import trophy from "../../assets/icons/trophy.svg";

function FeatureSection() {
  return (
    <section className="bg-black pt-28" id="features">
      <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto text-white">
            <h2 className="text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-7xl dark:text-white">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl px-3">
                You win
              </span>
              , we win
            </h2>
            <p className="text-xl leading-none text-gray-800 font-bebas-neue sm:text-2xl dark:text-white pt-4">
              Our vision extends beyond immediate trading success; it's about
              fostering a world where informed and ethical trading practices
              contribute significantly to prosperity, today and for generations
              to come.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 sm:flex-row max-w-3xl">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <img src={dumbbell}></img>
          </div>
          <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md text-white">
            <h2 className="text-2xl sm:text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue dark:text-white">
              Targeting Weaknesses
            </h2>
            <p className="text-sm leading-none text-gray-800 font-bebas-neue dark:text-white">
              We focus on identifying and addressing the weaknesses in our
              clients' trading approaches. By offering personalized solutions,
              we aim to transform challenges into opportunities for growth and
              improvement.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-3xl sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <img src={plan}></img>
          </div>
          <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md text-white">
            <h2 className="text-2xl sm:text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue dark:text-white">
              <span className="text-pink-500">Proven</span> Trading Plans
            </h2>
            <p className="text-sm leading-none text-gray-800 font-bebas-neue dark:text-white">
              Offering established trading plans and models, we equip our
              clients with strategies that have a track record of success. These
              plans are designed to align with diverse trading objectives and
              market conditions.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-3xl sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
          <img src={trophy}></img>
          </div>
          <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md text-white">
            <h2 className="text-2xl sm:text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue dark:text-white">
              Mentorship Support
            </h2>
            <p className="text-sm leading-none text-gray-800 font-bebas-neue dark:text-white">
              Additionally our Stoic Trader Bootcamp offers continuous
              mentorship support, ensuring clients have access to expert advice
              and guidance. This support is crucial in navigating the
              complexities of trading and making disciplined decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
