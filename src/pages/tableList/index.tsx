import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import styles from "./index.less";
import { Table, Pagination, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const TableList = () => {
  const columns = [
    {
      title: "活动标题",
      dataIndex: "text",
      key: "text",
      render: (text: any) => <div>{text}</div>,
    },
    {
      title: "发布时间",
      dataIndex: "time",
      key: "time",
    },
  ];
  const data = [
    {
      key: "1",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
    {
      key: "2",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
    {
      key: "3",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
    {
      key: "4",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
    {
      key: "5",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
    {
      key: "6",
      text: "我是小小讲解员”培训活动",
      time: "2022-10-12 09:02:01",
    },
  ];

  const onChange = (pageNumber: any) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <PageContain>
      <OldManBtn isShowBackBtn={true} />
      <div className={styles.box}>
        <div className={styles.title}>
          <div className={styles.icon} />
          <span>活动剪影</span>
        </div>
        <Table
          pagination={false}
          className={styles.table}
          columns={columns}
          dataSource={data}
          rowClassName={(record, index) => {
            let isHui = index % 2 == 0;
            return isHui ? styles.row_hui : "";
          }}
        />
        <ConfigProvider locale={zhCN}>
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            className={styles.pagination}
          />
        </ConfigProvider>
      </div>
    </PageContain>
  );
};
export default TableList;
