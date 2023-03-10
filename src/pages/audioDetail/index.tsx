import PageContain from "@/components/PageContain";
import OldManBtn from "@/components/OldManBtn";
import styles from "./index.less";
import yy from "@/assets/xinshow/yy.png";
import tongyao from "@/assets/tongyao.png";
import bf from "@/assets/xinshow/bf.png";

const AudioDetail = () => {
  return (
    <PageContain>
      <OldManBtn isShowBackBtn={true} />
      <div className={styles.box}>
        <div className={styles.audioBox}>
          <div className={styles.audio}>
            <img className={styles.fengm} src={tongyao} alt="" />
            <div className={styles.iconBox}>
              <img src={yy} alt="" />
              <span>音频</span>
            </div>
            <img className={styles.stopBtn} src={bf} alt="" />
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>天呜呜（闽南语）</div>
            <div className={styles.type}>方言分类：闽南语</div>
            <div className={styles.source}>来源：《苍南童谣》</div>
            <div className={styles.iconBox}>
              <img src={yy} alt="" />
              <div>乐谱</div>
            </div>
          </div>
        </div>
        <div className={styles.jianjie}>
          <div className={styles.title}>童谣简介</div>
          <div className={styles.container}>
            此童谣流传于讲闽南语的地方，凡是讲闽南语的地方就有“天乌乌”这首儿歌，此首儿歌是闽南语童谣的代表作，但是讲闽南语的不同地
            方有各自不同的版本，目前已搜集到14个版本。儿歌“天乌乌”是由劳动人民集体创作而成，表达了劳动人民在劳作时的愉快意境。在快
            要下阵雨前，阿公拿着锄头去疏通田间的水沟，无意间抓到一条鱼，于是产生怎么吃和吃后发生的情景，形成了很具趣味性的笑料。
          </div>
        </div>
      </div>
    </PageContain>
  );
};
export default AudioDetail;
