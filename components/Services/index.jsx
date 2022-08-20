import styles from './services.module.css';
import Image from 'next/image'
import group from '../../public/group.png'
import mace from '../../public/mace.png'
import briefcase from '../../public/briefcase.png'
import document from '../../public/document.png'

function Services () {
    return (
        <div className={styles.container}>
            <div className={styles.center} id="services">
                <div className={styles.title}>
                    <h2>ÁREAS DE ATUAÇÃO</h2> 
                </div>
                <article className={styles.cards}>
                    <div className={styles.card1}>
                        <div className={styles.image}>
                            <Image src={group} alt="people image" height="50" width="50" />
                        </div>
                        <h3>Cível</h3>
                        <p>Contratos, Família, Consumidor
                        Sucessão, Bens, Cobranças
                        Obrigações, Empresarial ...</p>
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.image}>
                            <Image src={mace} alt="mace image" height="50" width="50"/>
                        </div>
                        <h3>Criminal</h3>
                        <p>Defesa Técnica,<br/>
                        Júri,<br/>
                        Sustentações Orais ...</p>
                    </div>
                    <div className={styles.card3}>
                        <div className={styles.image}>
                            <Image src={briefcase} alt="briefcase image" height="50" width="50"/>
                        </div>
                        <h3>Trabalhista</h3>
                        <p>Reclamações Trabalhistas,
                        Consultoria Técnica,
                        Defesa Técnica para Empresas...</p>
                    </div>
                    <div className={styles.card4}>
                        <div className={styles.image}>
                            <Image src={document} alt="document image" height="50" width="50"/>
                        </div>
                        <h3>Correspondente</h3>
                        <p>Distribuições, Audiências, Acompanhamentos, Diligências, Documentos, etc...</p>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default Services;