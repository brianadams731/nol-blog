import BlogCategory from '../components/BlogCategory.js';
import TextBanner from '../components/TextBanner.js';
import Welcome from '../components/Welcome.js';
import AffirmationSign from "../components/AffirmationSign.js";
import Intro from "../components/Intro.js";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Welcome />
      <TextBanner text='"Lorem ipsum dolor sit amet, consecteuer adipiscing elit, sed daiam nonummy."' />
      <BlogCategory />
      <AffirmationSign />
      <Intro />
    </>
  )
}
