
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import GymSharkLogo from "../../assets/GymSharkLogo.png"
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Page from "./Page";
import ActionButton from "../../shared/ActionButton"




type props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: props) => {
  const flexBetween = "flex item-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1500px)")
  const [isMenuToggled, setIsMenuToggled] = useState(false)
 const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow"
 

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween}  w-full gap-96 `}>
            <div className="h-14 w-14 my-4">
              <img alt="logo" src={GymSharkLogo} />
              GYMSHARK
            </div>
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-10 text-bg my-8`}>
                  
                   
                   < Page page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  
                  
                    < Page page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                   
                    < Page page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  
                    < Page page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  
                    < Page page="Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                 
                    < Page page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    
                </div>
                <div className={`${flexBetween} gap-8 my-6`}>
                    <p className="my-2">Sign In</p>
                    <ActionButton  setSelectedPage={setSelectedPage}>Join Class Now</ActionButton>
                </div>
            </div>
            ) : (
              <button className="rounded-full h-10 w-10 bg-sky-500 p-2 my-8" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars4Icon className="h-5 w-6 text-while" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w=[300px] bg-sky-500 drop-shadow-xl">
            <div className="flex justify-end p-8">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-white mx-8" />
              </button>
            </div>
            <div className="mx-16 mr-10 flex flex-col gap-6 text-white">
                    < Page page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    < Page page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    < Page page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    < Page page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    < Page page="Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    < Page page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
