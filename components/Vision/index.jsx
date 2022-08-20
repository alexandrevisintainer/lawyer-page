import styles from './vision.module.css';
import Image from 'next/image'
import mission from '../../public/mission.png'
import vision from '../../public/vision.png'
import value from '../../public/value.png'

function Vision () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <article className={styles.cards}>
                    <section className={styles.card}>
                        <div className={styles.image}>
                            <Image src={mission} height="60" width="60"/> 
                        </div>
                        <h3>Missão</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta autem, repellat ab blanditiis nobis nisi consequuntur provident necessitatibus pariatur alias voluptate.</p>
                    </section>
                    <section className={styles.card}>
                        <div className={styles.image}>
                            <Image src={vision} height="60" width="60"/>
                        </div>
                        <h3>Visão</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nobis nisi necessitatibus pariatur alias voluptatem, delectus voluptate hic ipsa cupiditate fugiat?</p>
                    </section>
                    <section className={styles.card}>
                        <div className={styles.image}>
                            <Image src={value} height="60" width="60"/>
                        </div>
                        <h3>Valores</h3>                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti repellat ab blanditiis nobis nisi delectus voluptate hic ipsa cupiditate fugiat?</p>
                    </section>
                </article>
            </div>
        </div>
    )
}
export default Vision;