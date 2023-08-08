import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17802395/pexels-photo-17802395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            deserunt aliquam voluptatum, fugiat quas quis veritatis inventore
            tempore labore quam optio ipsa, ea soluta recusandae a ad voluptas
            quod ipsum. Quis neque, omnis laudantium sapiente facilis enim.
            <br />
            <br />
            consectetur esse animi quod repellat. Et iure magni iusto nesciunt
            architecto possimus nemo porro blanditiis consequuntur rem odit
            omnis, ipsum animi? Veritatis vero exercitationem neque ex pariatur
            culpa natus dolorum id! Alias, mollitia?s
            <br />
            <br />
            consectetur esse animi quod repellat. Et iure magni iusto nesciunt
            architecto possimus nemo porro blanditiis consequuntur rem odit
            omnis, ipsum animi? Veritatis vero exercitationem neque ex pariatur
            culpa natus dolorum id! Alias, mollitia?s
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            deserunt aliquam voluptatum, fugiat quas quis veritatis inventore
            tempore labore quam optio ipsa, ea soluta recusandae a ad voluptas
            quod ipsum. Quis neque, omnis laudantium sapiente facilis enim.
            <br />
            <br />
            consectetur esse animi quod repellat. Et iure magni iusto nesciunt
            architecto possimus nemo porro blanditiis consequuntur rem odit
            omnis, ipsum animi? Veritatis vero exercitationem neque ex pariatur
            culpa natus dolorum id! Alias, mollitia?s
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Dynamic Websites
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
