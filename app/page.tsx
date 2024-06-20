import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import PreviousWork from "@/components/PreviousWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
     <div >
      <Hero />
      <AboutUs />
      <PreviousWork />
      <Services />
      <Testimonials />
     </div>
    </main>
  );
}
