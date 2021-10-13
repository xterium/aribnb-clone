import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, liveanywhereData }) {
  return (
    <>
      <Head>
        <title>Aribnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-8 md:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex pb-3 -mb-3 pl-3 -ml-3 gap-x-8 overflow-x-scroll scrollbar-hide">
            {liveanywhereData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className="relative py-16 cursor-pointer">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Whishlists curated by Airbnb"
            buttonText="Get inspired"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const liveanywhereData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveanywhereData,
    },
  };
}
