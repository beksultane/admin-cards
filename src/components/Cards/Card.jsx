import styles from './Card.module.css'

export const Card = () => {

  return (
    <div className={styles.block_katalog}>
      <h2 className={styles.title}>Категории</h2>
      <section className={styles.hero_section}>
        <div className={styles.card_grid}>
          <a className={styles.card} href="#">
            <div className={`${styles.card__background} ${styles.bg_img1}`}></div>
            <div className={styles.card__content}>
              <p className={styles.card__category}>Категория</p>
              <h3 className={styles.card__heading}>Фрукты</h3>
              <h4 className={styles.card__heading}>Früchte</h4>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div className={`${styles.card__background} ${styles.bg_img2}`}></div>
            <div className={styles.card__content}>
              <p className={styles.card__category}>Категория</p>
              <h3 className={styles.card__heading}>Кухня</h3>
              <h4 className={styles.card__heading}>Die Küche</h4>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
