import styles from './navbar.module.css'
import Image from 'next/image'
import balance from '../../public/balance.png'

function Navbar () {
    return (
        <div className={styles.container}>
            <navbar className={styles.navbar}>
                <a href="#home">
                    <div className={styles.logo}>
                        <Image src={balance} height="35" width="35"/>
                    </div>
                </a>
                <div className={styles.list}>
                    <ul>
                        <li><a href="#services">Area de Atuação</a></li>
                        <li><a href="#about">Sobre Nós</a></li>
                        <li><a href="#localization">Localização</a></li>
                        <li><a href="#contact">Contatos</a></li>
                    </ul>
                </div>
            </navbar>
        </div> 
    )
}
export default Navbar;
