import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavStore } from "../store";
import { shortenUrl } from "../api/apiFetch";


export const LinkForm = () => {
  const [urlLink, setUrlLink] = useState('')
  const { setDisplayLink, resetDisplayLink } = useNavStore()
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    resetDisplayLink()
    setErrorMessage('')
  },[resetDisplayLink])

  const handleLinkChange = ((e: ChangeEvent<HTMLInputElement>) => {
    setUrlLink(e.target.value)
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayLink();
    if (!urlLink) {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      try {
        const response = await shortenUrl(urlLink);
        console.log(response?.link);
      } catch (error) {
        console.error("Unfortunately, this happened:", error);
      }
    }
  };

  return (
    <section>
      <div className="flex justify-center mx-8 md:mx-24 lg:mx-32">
        <form
          onSubmit={handleSubmit}
          className="w-full translate-y-[50%] bg-scroll gap-5 rounded-xl font-poppins
          bg-primary-dark-violet bg-mobile-shorten-image bg-no-repeat bg-contain md:bg-cover
          md:bg-desktop-shorten-image p-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4 lg:mx-8">
            <div className="w-full flex flex-col md:w-3/4 lg:w-4/5">
               <input className={`rounded-lg p-4
                ${errorMessage ? 'md:mt-6 border-secondary-red border-2 placeholder-[#fca5a5] ::placeholder' : ''
                }`}
                type="text"
                value={urlLink}
                onChange={handleLinkChange}
                placeholder="Shorten a link here..."

              />
              <span
                className={`${errorMessage ? '' : 'hidden'} text-secondary-red text-md
                italic pb-4 md:pb-0`}
              >
                {errorMessage}
              </span>

            </div>

            <button
              className="bg-primary-cyan text-white rounded-lg w-full md:w-1/4 lg:w-1/5
              p-4 transition-colors duration-400 ease-in-out hover:bg-[#5eead4]"
              type="submit"
            >
              Shorten It!
            </button>


          </div>
        </form>
      </div>
    </section>
  );
};


