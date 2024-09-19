import styles from './GachaButton.module.css';

type GachaButtonProps = {
  onClick: () => void;
};

const GachaButton = (props: GachaButtonProps) => {
  return (
    <div>
      <button className={styles.gachaButton} onClick={props.onClick}>
        ガチャを引く
      </button>
    </div>
  );
};

export default GachaButton;
