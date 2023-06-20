import { FunctionComponent } from "react";
import style from "./page.module.scss";
import Layout from "./layout";
import Image from "next/image";
import Groupe from "./conponents/group/Groupe";
const Home: FunctionComponent = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.container_profil}>
          <div className={style.profil}>
            <div className={style.image}>
              <Image
                src="/images/profil.png"
                width={96}
                height={96}
                alt="image de profil"
              />
            </div>
            <div className={style.name}>
              <p>@BarberPlus</p>
            </div>
            <div className={style.icons}></div>
          </div>
        </div>
        <div className={style.container_groupe}>
          <Groupe
            imageSrc="/images/google.png"
            socialMediaLink="https://lien-de-mon-reseau-social.com"
            text="Illuminez Google avec vos étoiles et partagez votre expérience !"
          />
          <Groupe
            imageSrc="/images/snap.png"
            socialMediaLink="https://lien-de-mon-reseau-social.com"
            text="Venez explorer la magie de Snapchat dès maintenant !"
          />
          <Groupe
            imageSrc="/images/instagram.png"
            socialMediaLink="https://lien-de-mon-reseau-social.com"
            text="Immergez-vous dans l'univers captivant d'Instagram, rejoignez-nous aujourd'hui !"
          />
          <Groupe
            imageSrc="/images/tik-tok.png"
            socialMediaLink="https://lien-de-mon-reseau-social.com"
            text="Plongez dans l'énergie contagieuse de TikTok, rejoignez-nous maintenant !"
          />
          <Groupe
            imageSrc="/images/facebook.png"
            socialMediaLink="https://lien-de-mon-reseau-social.com"
            text="Découvrez la communauté vibrante de Facebook, rejoignez-nous dès maintenant !"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
