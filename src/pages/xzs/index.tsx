import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import { Checkbox, Col, Row, Pagination, ConfigProvider } from "antd";
import styles from "./index.less";
import { useState } from "react";
import zhCN from "antd/es/locale/zh_CN";
const Xzs = () => {
  const [btnIndex, setBtnIndex] = useState(0);
  const optionsTyList = [
    "热门作品",
    "全部分类",
    "闽南语",
    "欧语",
    "蛮语",
    "金乡话",
    "满城话",
    "黎语",
    "普通话",
    "其他",
  ];
  const btnList = ["视频", "音频", "文字", "图片"];
  const onChange = (checkedValues: any) => {
    console.log("checked = ", checkedValues);
  };
  const onChangePagin = (pageNumber: any) => {
    console.log("Page: ", pageNumber);
  };
  return (
    <PageContain>
      <OldManBtn isShowBackBtn={true} />
      <div className={styles.conBox}>
        <div className={styles.title}>
          <div className={styles.icon} />
          <span>芯展示</span>
        </div>
        <div className={styles.container}>
          <div className={styles.optionsBox}>
            <div className={styles.title}>选择童谣</div>
            <Checkbox.Group
              defaultValue={["热门作品"]}
              className={styles.group}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onChange={onChange}
            >
              {optionsTyList.map((item, index) => {
                return (
                  <Row className={styles.optonsRow} key={index}>
                    <Col span={18}>
                      <Checkbox value={item}>
                        <span className={styles.text}>{item}</span>
                      </Checkbox>
                    </Col>
                  </Row>
                );
              })}
            </Checkbox.Group>
          </div>
          <div className={styles.audioList}>
            <div className={styles.btnBoxList}>
              {btnList.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setBtnIndex(index);
                    }}
                    className={
                      index == btnIndex ? styles.btnItemSelect : styles.btnItem
                    }
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className={styles.dataListBox}>
              {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).map(
                (item, index) => {
                  return (
                    <div className={styles.dataItem} key={index}>
                      <div className={styles.dataImg}></div>
                      <div className={styles.dataTitle}>阿娒驮头梳（蛮话）</div>
                    </div>
                  );
                }
              )}
            </div>
            <div className={styles.paginBox}>
              <ConfigProvider locale={zhCN}>
                <Pagination
                  showQuickJumper
                  defaultCurrent={2}
                  total={500}
                  onChange={onChange}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </PageContain>
  );
};
export default Xzs;
