import "./reset.scss";

import style from "./layout.module.scss";
import Nav from "./conponents/Nav/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={style.container}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
