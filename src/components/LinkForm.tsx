
export const LinkForm = () => {
  return (
    <section>
      <div className="flex justify-center mx-8 md:mx-24 lg:mx-32">
        <form className="w-full translate-y-[50%] bg-scroll gap-5 rounded-xl
          bg-primary-dark-violet bg-mobile-shorten-image bg-no-repeat bg-contain md:bg-cover md:bg-desktop-shorten-image p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <input className="w-full md:w-3/4 lg:w-4/5 rounded-lg p-4"
              placeholder="Shorten a link here..." />
            <button className="w-full md:w-1/4 lg:w-1/5 rounded-lg bg-primary-cyan p-4 transition-colors
             duration-400 ease-in-out hover:bg-[#5eead4] text-white font-poppins font-bold">
              Shorten It!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


