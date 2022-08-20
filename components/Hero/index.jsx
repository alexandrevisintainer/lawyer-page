import styles from './hero.module.css'
import Image from 'next/image'
import Navbar from '../Navbar'

function Hero () {
    return (
        <div className={styles.container} id="home">
            <Navbar />
            <div className={styles.center}>
                <h1>Yugiro Advocacia</h1>
                <p>Resolvemos seus problemas de forma rapida</p>
                <button>Entre em contato</button>
            </div>
        </div>
    )
}
export default Hero;