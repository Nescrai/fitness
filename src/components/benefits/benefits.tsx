import { ClockIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import DaveGym from "../../assets/DaveGym.jpg";
import { GiWeightLiftingUp } from "react-icons/gi"
import { BsClipboard2Check } from "react-icons/bs"

const benefits: Array<BenefitType> = [
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "PROGRESSION",
    description:
      "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    icon: <GiWeightLiftingUp className="h-6 w-6" />,
    title: "WORKOUT",
    description:
      "With a variety of workouts to choose from, you`ll have everything you need to get into the best shape of your life.",
  },
  {
    icon: <BsClipboard2Check className="h-6 w-6" />,
    title: "NUTRITIONS",
    description:
      "Our team will work with you to create a personalized meal plan that helps you reach you specific health goals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-lg text-black">
            We provide class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCR */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={DaveGym}
          />
          {/* DESC */}
          <div>
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <HText>
                   Take Your Health And Body To Next Level
                </HText>
              </div>
            </motion.div>
            {/* DESCRIP */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-black text-lg">
                Take your health and body to the next  level with our comprehensive program designed to help you reach your fitness goals.
              </p>
              <p className="mb-5 text-black text-lg">
                Do what you need to do.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
