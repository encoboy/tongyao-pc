import styles from "./index.less";
import { Divider } from "antd";
import guowei from "@/assets/home/guowei.png";
import red from "@/assets/home/red.png";
import jiucuo from "@/assets/home/jiucuo.png";
import oldhua from "@/assets/home/oldhua.png";
const Footer = () => {
  const topData = [
    "中央人民政府",
    "地方政府网站",
    "省级部门网站",
    "各市、区(县)网站",
    "其他",
  ];
  return (
    <div className={styles.box}>
      <div className={styles.boxItem}>
        <div className={styles.topBox}>
          {topData.map((item, index) => {
            return (
              <div key={index} className={styles.topItem}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.containerBox}>
          <div className={styles.conItem}>
            <div className={styles.title}>联系方式</div>
            <div>
              <span>本服务提供单位：</span>
              <span>苍南县文联</span>
            </div>
            <div>
              <span>本服务支持电话：</span>
              <span>0577-68801106</span>
            </div>
            <div>
              <span>浙江政务服务网技术支持电话：</span>
              <span>0571-88808880</span>
            </div>
            <div>
              <span>政务咨询投诉举报电话：12345</span>
              <span>邮政编码：310025</span>
            </div>
            <div>
              <span>网站主办单位地址：</span>
              <span>浙江省杭州市省府路8号一号楼</span>
            </div>
          </div>
          <div className={styles.conItem}>
            <div className={styles.title}>相关站点</div>
            <div>
              <span>浙江省政府门户网站</span>
              <span style={{ marginLeft: "30px" }}>浙江省民呼我为统一平台</span>
            </div>
            <div>
              <span>浙江省</span>
              <span style={{ marginLeft: "100px" }}>
                长三角政务服务"一网通办"
              </span>
            </div>
            <div>
              <span>浙江·数据开放</span>
            </div>
          </div>
          <div className={styles.conItem}>
            <div style={{ width: "220px" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.policInfo}>
        <div className={styles.top}>
          <span>把本站设为首页</span>
          <Divider style={{ backgroundColor: "white" }} type="vertical" />
          <span>关于浙江政务服务网</span>
          <Divider style={{ backgroundColor: "white" }} type="vertical" />
          <span>网站声明</span>
        </div>
        <div className={styles.twoLine}>
          <div className={styles.textBox}>主办单位：浙江省人民政府办公厅</div>
          <div className={styles.textBox}>
            <img src={guowei} alt="" />
            <span>备案：浙ICP备12000333号-2</span>
          </div>
          <div className={styles.textBox}>
            <img src={guowei} alt="" />
            <span>浙公网安备：33010602004556</span>
          </div>
        </div>
        <div className={styles.threeLine}>
          <div>中文域名：浙江政务服务政务</div>
          <div>网站标识码：33000000069</div>
          <div>建议使用1366*768</div>
          <div>分辨率/IE9.0或以上浏览器访问达到最佳效果</div>
        </div>
      </div>
      <div className={styles.bigImgBox}>
        <img className={styles.bigImg1} src={red} alt="" />
        <img className={styles.bigImg2} src={jiucuo} alt="" />
        <img className={styles.bigImg3} src={oldhua} alt="" />
      </div>
    </div>
  );
};
export default Footer;
