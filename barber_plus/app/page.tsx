import { FunctionComponent } from "react";
import style from "./page.module.scss";
import Layout from "./layout";
import Image from "next/image";
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
      </div>
    </Layout>
  );
};

export default Home;
