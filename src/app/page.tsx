import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import hashtag from "../../public/assets/hashtag.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id="main-home" className={styles.main}>
      <div className={styles.vertical_line}></div>
      <div className={styles.vertical_line}></div>
      <article className={styles.article}>
        <section className={styles.mission_container}>
            <h1>Hex Studio</h1>
            <h5>is a niche group of creatives rooted in creative problem solving & built on collaboration.
                We impact our locals, modern brands, and individuals by providing holistic solutions thorugh
                strategy, direction, design, and development.
            </h5>
        </section>
      </article>
      <article className={styles.article}>
        <Image className={styles.hashtag_logo} src={hashtag} alt="hexstudio logo" priority/>
      </article>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <div>
              <h1>Generative</h1>
            </div>
          </li>
          <li className={styles.li}>
            <div>
              <h1>Services</h1>
              <article>
                <ul className={styles.services_list}>
                  <li>Web Development</li>
                  <li>Digital Experiences</li>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Consultations</li>
                </ul>
              </article>
            </div>
          </li>
          <li className={styles.li}>
            <div>
              <h1>Work</h1>
            </div>
          </li>
          <li className={styles.li}>
            <div className={styles.about_container}>
              <h1>About</h1>
              <section>
                <h5>
                  To use the power of design to help our clients communicate their ideas. values, and products
                  in a way that is visually stunning and effective. We believe that design has the ability to shape the world around us,
                  and we strive to create work that is innovative, meaningful, and impactful. Our ultimate goal is to help
                  our clients succeed and make a positive difference in the world through digital innovation. 
                </h5>
              </section>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  )
}
