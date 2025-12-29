import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header />
            <main className="flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
