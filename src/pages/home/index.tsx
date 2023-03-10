import styles from "./index.less";
import OldManBtn from "@/components/OldManBtn";
import PageContain from "@/components/PageContain";
import xcz from "@/assets/home/xcz.png";
import xsq from "@/assets/home/xsq.png";
import xzs from "@/assets/home/xzs.png";
import { history } from "umi";
export default function HomePage() {
  const ListImg = [
    { img: xzs, url: "/xzs" },
    { img: xsq, url: "/xsq" },
    { img: xcz, url: "/xcz" },
  ];
  return (
    <PageContain>
      <OldManBtn />
      <div className={styles.conBox}>
        <div className={styles.title}>
          <div className={styles.icon} />
          <span>常用办事</span>
        </div>
        <div className={styles.imgListBox}>
          {ListImg.map((item, index) => {
            return (
              <img
                onClick={() => {
                  history.push(item.url);
                }}
                className={styles.showImg}
                key={index}
                src={item.img}
              />
            );
          })}
        </div>
      </div>
    </PageContain>
  );
}
