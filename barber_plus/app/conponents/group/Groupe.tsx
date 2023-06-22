import { FunctionComponent } from "react";
import styles from "./groupe.module.scss";
import Image from "next/image";

interface GroupeProps {
  imageSrc: string;
  socialMediaLink: string;
  text: string;
}

const Groupe: FunctionComponent<GroupeProps> = ({
  imageSrc,
  socialMediaLink,
  text,
}) => {
  return (
    <a href={socialMediaLink} className={styles.container}>
      <div className={styles.logo}>
        <Image src={imageSrc} width={50} height={50} alt="logo" />
      </div>
      <div className={styles.description}>
        <p>{text}</p>
      </div>
      <div></div>
    </a>
  );
};

export default Groupe;
