import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";


const Home = () => {
  return (
    <>
      <Head>
        <title>Ace Your Frontend Interview - Get Your Dream Job - Codes Devs</title>
        <meta
          name="description"
          content="Ace your frontend interview and get your dream job with our comprehensive guide and resources by Codes Devs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Ebook Benefits"
        title="Unlock Frontend Interview Success with Codes Devs">
        Tired of feeling unprepared, undervalued, or simply ignored during and after interviews? Enter the comprehensive guide designed specifically for frontend developers. With Codes Devs, you’re not just getting an ebook – you're investing in a successful frontend career.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a Video"
        title="Discover the Value of Codes Devs">
        Seal the deal with our bonus books! Gain insider expertise on salary negotiation and a complete blueprint to transform your resume into an irresistible magnet for hiring managers.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="What people say about the guide">
        {/* Testimonials provide authenticity and trust. Use this section to highlight the transformative experiences of your readers. */}
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Answers to Your Queries">
        Address potential questions here to boost conversions and reduce support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
