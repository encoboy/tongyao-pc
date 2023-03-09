import styles from "./index.less";
const PageContain = ({ children }: any) => {
  return (
    <div className={styles.pageBox}>
      <div className={styles.page}>{children}</div>
    </div>
  );
};
export default PageContain;
