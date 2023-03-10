import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import { Table, Tag, Button } from "antd";
import styles from "./index.less";
import { useState } from "react";
import gdbm from "@/assets/xsq/gdbm.png";
import hdbd from "@/assets/xsq/hdbd.png";
import hdjy from "@/assets/xsq/hdjy.png";
import hdsq from "@/assets/xsq/hdsq.png";
import { history } from "umi";
const Xsq = () => {
  const columns = [
    {
      title: "事项",
      key: "事项",
      dataIndex: "事项",
      render: (_: any, { img, title, subTitle }: any) => (
        <div className={styles.box}>
          <img src={img} alt="" />
          <div className={styles.titleBox}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
          </div>
        </div>
      ),
    },
    {
      title: "操作",
      key: "操作",
      render: () => (
        <Button
          onClick={() => {
            history.push("/tableList");
          }}
          className={styles.btn}
        >
          前往
        </Button>
      ),
    },
  ];
  const data = [
    {
      key: "gdbm",
      img: gdbm,
      title: "活动报名",
      subTitle: "童谣赛事线上线下活动报名，针对普通用户、创作骨干等",
    },
    {
      key: "hdbd",
      img: hdbd,
      title: "活动剪影",
      subTitle: "童谣活动的详细介绍汇总",
    },
    {
      key: "hdjy",
      img: hdjy,
      title: "活动报道",
      subTitle: "关于童谣活动的媒体报道汇总",
    },
    {
      key: "hdsq",
      img: hdsq,
      title: "活动申请",
      subTitle: "群众对活动进行申请",
    },
  ];
  return (
    <PageContain>
      <OldManBtn isShowBackBtn={true} />
      <div className={styles.conBox}>
        <div className={styles.title}>
          <div className={styles.icon} />
          <span>芯社区</span>
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
export default Xsq;
