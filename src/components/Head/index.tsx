import { Divider } from "antd";
import logo from "@/assets/home/logo.png";
import tyxst from "@/assets/home/tyxst.png";
import styles from "./index.less";
const Head = () => {
  return (
    <div className={styles.box}>
      <div className={styles.boxItem}>
        <img className={styles.logoImg} src={logo} />
        <Divider style={{ height: "40px" }} type="vertical" />
        <img className={styles.textImg} src={tyxst} />
      </div>
    </div>
  );
};
export default Head;
