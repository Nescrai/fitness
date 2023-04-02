import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import NameLogo from "../../assets/NameLogo.jpg"
import Gymshark from "../../assets/Gymshark.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";



type props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
        {/* image and main header */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x: 0 } }}>
                    <div className="relative">
                        <div className="before:absolute">
                            <img alt="home-page-text" src={NameLogo} />
                        </div>
                    </div>
                    <p className="mb-8 font-bold text-lg">
                       MAKE YOUR BODY FIT & PERFECT 
                    </p>
                </motion.div>
                {/* ACTIONS */}
                <motion.div className="mt-8 flex item-center gap-8 md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.5, duration: 1 }}
                variants= {{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-red-500 underline hover: text-sky-300"
                    onClick={() => setSelectedPage(SelectedPage.Classes)}
                    href={`#${SelectedPage.Classes}`}
                    >

                    </AnchorLink>
                </motion.div>
            </div>
            {/* image */}
            <div>
                <img alt="home-pageGraphic" src={Gymshark} />
            </div>
        </motion.div>
        {/* sponsors */}
    </section>
    )
}



export default Home;