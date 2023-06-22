"use client";
import { FunctionComponent, useState } from "react";
import style from "./page.module.scss";
import Layout from "./layout";
import Image from "next/image";
import Groupe from "./conponents/group/Groupe";
// Cette fonction est utilisée pour copier le texte dans le presse-papier
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
const Home: FunctionComponent = () => {
  const [phoneNum, setPhoneNum] = useState("0187902203"); // Insérez le numéro de téléphone que vous voulez copier
  const [emailAddress, setEmailAddress] = useState("example@example.com"); // Insérez le numéro de téléphone que vous voulez copier
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.container_profil}>
          <div className={style.profil}>
            <div className={style.image}>
              <Image
                src="/images/profil.jpeg"
                width={96}
                height={96}
                alt="image de profil"
              />
            </div>
            <div className={style.name}>
              <p>@BarberPlus</p>
            </div>
            <div className={style.icons}>
              <a href={`tel:${phoneNum}`}>
                <Image
                  src="/images/mobile.png"
                  width={24}
                  height={24}
                  alt="numero de telephone"
                />
              </a>
              <a href={`mailto:${emailAddress}`}>
                <Image
                  src="/images/enveloppe.png"
                  width={24}
                  height={24}
                  alt="adresse email"
                />
              </a>
              <a href="https://goo.gl/maps/SKempqMUrSJxUoBB6">
                <Image
                  src="/images/espace-reserve.png"
                  width={24}
                  height={24}
                  alt="adresse"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={style.container_groupe}>
          <Groupe
            imageSrc="/images/google.png"
            socialMediaLink="https://g.page/r/Cfb8QO6xI8q4EB0/review"
            text="Google"
          />
          <Groupe
            imageSrc="/images/snap.png"
            socialMediaLink="https://t.snapchat.com/JlFLHXQr"
            text="Snapchat"
          />
          <Groupe
            imageSrc="/images/instagram.png"
            socialMediaLink="https://instagram.com/barber_plus91?igshid=MzRlODBiNWFlZA=="
            text="Instagram"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
