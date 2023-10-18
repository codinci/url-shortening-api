
export const LinkForm = () => {
  return (
    <section>
      <div className="flex justify-center mx-32">
        <form className="w-full translate-y-[50%] bg-scroll gap-5 rounded-xl
          bg-primary-dark-violet bg-shorten-image p-8">
          <div className="flex justify-between gap-4 mx-4">
            <input className="w-4/5 rounded-lg p-4"
              placeholder="Shorten a link here..." />
            <button className="w-1/5 rounded-lg bg-primary-cyan p-4
             text-white font-poppins font-bold">
              Shorten It!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


