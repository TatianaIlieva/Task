import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return(
        <>
        <header className='header'>
            <Header />
        </header> 
        <section>
            <div className='container'>
                <Outlet />
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
    </>
    )
}