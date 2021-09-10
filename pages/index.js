import BlogCategory from '../components/BlogCategory'
import TextBanner from '../components/TextBanner'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome />
      <TextBanner text='"Lorem ipsum dolor sit amet, consecteuer adipiscing elit, sed daiam nonummy."' />
      <BlogCategory />
    </div>
  )
}
