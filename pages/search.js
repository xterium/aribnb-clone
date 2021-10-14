import Layout from "../components/Layout";
import { useRouter } from "next/router";
import useDateFormatter from "../components/hooks/useDateFormatter";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/Mapbox";

const search = ({ searchResults }) => {
  const {
    query: { location, startDate, endDate, noOfGuests },
  } = useRouter();

  if (!location || !startDate || !endDate || !noOfGuests) {
    return (
      <Layout>
        <h1 className="flex text-xl max-w-md mx-auto py-56">
          No hosts available, try a different search
        </h1>
        ;
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="flex relative">
        <section className="flex-grow pt-14 px-6 h-100 overflow-y-scroll scrollbar-hide">
          <p className="text-sm flex gap-2">
            <span className="hidden md:inline-flex">300+ Stays </span>
            <span className="date-orange">{useDateFormatter(startDate)}</span>
            <span className="date-orange">{useDateFormatter(endDate)}</span>
            <span className="hidden md:inline-flex">
              for{" "}
              {noOfGuests === "1"
                ? `${noOfGuests} guest`
                : `${noOfGuests} guests`}
            </span>
          </p>
          <h1 className="text-3xl font-bold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant Book</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col gap-y-10 my-5">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img + item.location}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                start={item.start}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>
        {/* <section className="hidden xl:inline-flex"> */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
    </Layout>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
