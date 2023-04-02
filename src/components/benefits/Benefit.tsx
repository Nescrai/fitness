import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}

type props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: props) => {
  return (
    <motion.div className=" mt-5 rounded-tl-3xl rounded-br-3xl border-2 border px-5 py-16 text-center border-inherit bg-black"
    variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="border-sky-500 rounded-full border-2 bg-sky-500 p-4">
            {icon}
        </div>
      </div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="my-3 text-white">{description}</p>
      <AnchorLink
        className="hover: text-sm font-bold text-red-500 text-sky-300 underline"
        onClick={() => setSelectedPage(SelectedPage.Classes)}
        href={`#${SelectedPage.Classes}`}
      ></AnchorLink>
    </motion.div>
  );
};

export default Benefit;
