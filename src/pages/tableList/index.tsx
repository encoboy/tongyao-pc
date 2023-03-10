import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import styles from "./index.less";
import { Table, Pagination, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const TableList = () => {
  const columns = [
    {
      title: "活动标题",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
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
      name: "John Brown",
      time: "2022-10-12",
    },
    {
      key: "2",
      name: "Jim Green",
      time: "2022-10-12",
    },
    {
      key: "3",
      name: "Joe Black",
      time: "2022-10-12",
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
