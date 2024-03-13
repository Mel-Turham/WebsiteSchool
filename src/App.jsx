import './App.css'
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus  photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='Contact us' title='Get in Touch' />
        <Contact />
        < Footer />
      </div>
    </main>
  )
}
export default App