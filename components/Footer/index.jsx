import Image from 'next/image'
import styles from './footer.module.css'
import instagram from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import phone from '../../public/phone.png'
import whatsapp from '../../public/whatsapp.png'

function Footer () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <aside className={styles.top}>
                    <section className={styles.location}>
                        <h3>Localização:</h3>
                        <p>Avenida Dois Dois zero - 2200</p>
                        <p>Centro - Boa Vista</p>
                    </section>
                    <section className={styles.phone}>
                        <h3>Telefone:</h3>
                        <div>
                            <div className={styles.image}>
                                <Image src={phone} height="25px" width="25px"/>
                            </div>    
                            <p>95 0000-0000</p>
                        </div>
                        <div>
                            <div className={styles.image}>
                                <Image src={phone} height="25px" width="25px"/>
                            </div>    
                            <p>95 0000-0000</p>
                        </div>
                        
                    </section>
                    <section className={styles.social}>
                        <h3>Conecte Conosco:</h3>
                        <a href='https://www.instagram.com/visintaineragency/' target='_blank' rel="noreferrer"><Image src={instagram} height="25px" width="25px" alt="instagram image"/></a>
                        <a href='https://wa.me/5595984077249' target='_blank' rel="noreferrer"><Image src={whatsapp} height="25px" width="25px" alt="whatsapp image"/></a>
                        <a href='https://www.facebook.com/VisintainerAgency' target='_blank' rel="noreferrer"><Image src={facebook} height="25px" width="25px" alt="facebook image"/></a>
                    </section>
                </aside>
            </div>
            <aside className={styles.bottom} id="contact">
                    <h3>Yugiro Advocacia</h3>
            </aside>
        </div>
    )
}
export default Footer;