import styles from './about.module.css'
import Image from 'next/image'
import back1 from '../../public/back1.jpg'

function About () {
    return (
        <div className={styles.container}>
            <div className={styles.center} id="about">
                <aside className={styles.aside}>
                    <h2>Quem Somos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo. Atque aliquid corrupti quam molestiae eligendi velit quo hic, ratione repellendus, ipsa quisquam mollitia quod laboriosam autem, nisi nostrum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo. Atque aliquid corrupti quam molestiae eligendi velit quo hic, ratione repellendus, ipsa quisquam mollitia quod laboriosam autem, nisi nostrum.</p>
                    <button>Entre em contato</button>
                </aside>
                <section>
                    <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                        <Image src={back1} alt="Escritorio" layout='fill' objectFit='cover'/>
                    </div>
                </section>             
            </div>
        </div>
    )
}
export default About; 