import styles from './clients.module.css'
import Image from 'next/image'
import client from '../../public/client.jpg'

function Clients () {
    return (
        <div className={styles.container}>
            <div className={styles.center} id="client">
                <section>
                    <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                        <Image src={client} alt="Escritorio" layout='fill' objectFit='cover'/>
                    </div>
                </section>
                <aside className={styles.aside}>
                    <h2>O que dizem sobre nós?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo. Atque aliquid corrupti quam molestiae eligendi velit quo hic, ratione repellendus, ipsa quisquam mollitia quod laboriosam autem, nisi nostrum.</p>
                    <h4>Ronnie James Dio - Agencia Infinite</h4>
                    <button>Entre em contato</button>
                </aside>            
            </div>
        </div>
    )
}
export default Clients;