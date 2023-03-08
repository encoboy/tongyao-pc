import styles from "./index.less";
export default function HomePage() {
  const oldManPattern = () => {
    document.documentElement.style.fontSize = 13 + "px";
  };
  return (
    <div
      style={{
        backgroundColor: "#f4f6f9",
        height: "1000px",
        marginTop: "70px",
        paddingLeft: "200px",
      }}
    >
      <div className={styles.text}>首页</div>
      <div style={{ fontSize: "1rem" }}>222</div>
      <button
        onClick={() => {
          oldManPattern();
        }}
      >
        老年模式
      </button>
    </div>
  );
}
