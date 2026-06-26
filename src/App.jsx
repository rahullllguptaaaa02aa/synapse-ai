import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import StaticPageSections from './sections/StaticPageSections.jsx';
import PricingSection from './sections/PricingSection.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <StaticPageSections />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
