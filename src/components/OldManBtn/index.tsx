import fh from "@/assets/xinshow/fh.png";
import { Button } from "antd";
import styles from "./index.less";
import { history } from "umi";
const OldManBtn = ({ isShowBackBtn }: any) => {
  const oldManPattern = () => {
    document.documentElement.style.fontSize = 13 + "px";
  };
  return (
    <div className={styles.box}>
      <div className={styles.back}>
        {isShowBackBtn ? (
          <Button
            onClick={() => {
              history.back();
            }}
            className={styles.textBtn}
            type="text"
          >
            <img src={fh} alt="" />
            返回上一级
          </Button>
        ) : null}
      </div>
      <div className={styles.btnBox}>
        <span>网站无障碍</span>
        <Button className={styles.btn} onClick={() => oldManPattern()}>
          进入老年模式
        </Button>
      </div>
    </div>
  );
};

export default OldManBtn;
