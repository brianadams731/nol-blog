import BlogCategory from '../components/BlogCategory.js';
import TextBanner from '../components/TextBanner.js';
import Welcome from '../components/Welcome.js';
import AffirmationSign from "../components/AffirmationSign.js";
import Intro from "../components/Intro.js";

import {motion} from "framer-motion";

export default function Home({variants}) {
  return (
    <motion.div initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key="home" variants={variants}>
      <Welcome />
      <TextBanner text='"What separates an ordinary woman from an Extraordinary one, is the belief that she is ordinary."' attribute="- Jody Williams" />
      <BlogCategory />
      <AffirmationSign />
      <Intro />
    </motion.div>
  )
}
