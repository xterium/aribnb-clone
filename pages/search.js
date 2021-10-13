import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const search = ({ searchResults }) => {
  const {
    query: { location, startDate, endDate, noOfGuests },
  } = useRouter();

  return (
    <Layout>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays{" "}
            {startDate ? format(new Date(startDate), "dd MMMM yy") : "N/A"}-{" "}
            {endDate ? format(new Date(endDate), "dd MMMM yy") : "N/A"} for{" "}
            {noOfGuests === "1"
              ? `${noOfGuests} guest`
              : `${noOfGuests} guests`}
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
