import { ChangeEvent, FormEvent, useState } from "react";
import { useNavStore } from "../store";
import { shortenUrl } from "../api/apiFetch";

export interface LinkObject {
  url: string;
  shortUrl: string;
  timeStamp: number;
}


export const LinkForm = () => {
  const [urlInput, setUrlInput] = useState('')
  const { setDisplayLink, linkObjects, setLinkObj } = useNavStore()
  const [errorMessage, setErrorMessage] = useState('')



  const handleLinkChange = ((e: ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value)
    setErrorMessage("")
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayLink();
    if (!urlInput) {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      try {
        const response = await shortenUrl(urlInput);
        if (response?.link) {
          const newLinkObj:LinkObject = {
            url: urlInput,
            shortUrl: response.link,
            timeStamp: Date.now(),
          };

          //ensure that there is a maximum of three objects in array
          if (linkObjects.length >= 3) {
            linkObjects.pop();
          }

          setLinkObj([newLinkObj]);

        }
        setUrlInput('')

      } catch (error) {
        console.error("Unfortunately, this happened:", error);
      }
    }
  };

  return (
    <>
      <div className="flex lg:px-8 justify-center mx-8 md:mx-24 lg:mx-32">
        <form
          onSubmit={handleSubmit}
          className="w-full translate-y-[50%] bg-scroll gap-5 rounded-xl font-poppins
          bg-primary-dark-violet bg-mobile-shorten-image bg-no-repeat bg-contain md:bg-cover
          md:bg-desktop-shorten-image p-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4 lg:mx-8">
            <div className="w-full flex flex-col md:w-3/4 lg:w-4/5">
              <label htmlFor='url'></label>
              <input
                className={`rounded-lg p-4 ${errorMessage ?
                'md:mt-6 border-secondary-red border-2 placeholder-[#fca5a5] ::placeholder' : ''}`}
                id='url'
                name='url'
                type="text"
                value={urlInput}
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
              className="bg-primary-cyan text-lg text-white rounded-lg w-full md:w-1/4 lg:w-1/5
              p-4 mt-2 md:mt-0 transition-colors duration-400 ease-in-out hover:bg-[#5eead4]"
              type="submit"
            >
              Shorten It!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


