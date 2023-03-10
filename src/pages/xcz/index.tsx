import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import { Table, Button, Avatar } from "antd";
import styles from "./index.less";
import ypxz from "@/assets/xcz/ypxz.png";
import wdty from "@/assets/xcz/wdty.png";
import zpsh from "@/assets/xcz/zpsh.png";
import fwzn from "@/assets/xcz/fwzn.png";
import bzzx from "@/assets/xcz/bzzx.png";
import tx from "@/assets/xcz/tx.png";
const Xcz = () => {
  const columns = [
    {
      title: "事项",
      key: "事项",
      dataIndex: "事项",
      render: (_: any, { img, title }: any) => (
        <div className={styles.box}>
          <img src={img} alt="" />
          <div className={styles.titleBox}>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      ),
    },
    {
      title: "操作",
      key: "操作",
      render: () => <Button className={styles.btn}>前往</Button>,
    },
  ];
  const data = [
    {
      key: "ypxz",
      img: ypxz,
      title: "乐谱下载",
    },
    {
      key: "wdty",
      img: wdty,
      title: "我的童谣",
    },
    {
      key: "zpsh",
      img: zpsh,
      title: "作品审核",
    },
    {
      key: "fwzn",
      img: fwzn,
      title: "服务指南",
    },
    {
      key: "bzzx",
      img: bzzx,
      title: "帮助中心",
    },
  ];
  return (
    <PageContain>
      <OldManBtn isShowBackBtn={true} />
      <div className={styles.conBox}>
        <div className={styles.title}>
          <div className={styles.icon} />
          <span>芯创作</span>
        </div>
        <div className={styles.userBox}>
          <Avatar size={80} src={tx} />
          <div className={styles.nameBox}>
            <div className={styles.name}>清风一夏</div>
            <div className={styles.level}>普通用户</div>
          </div>
        </div>
        <Table
          className={styles.table}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </PageContain>
  );
};
export default Xcz;
