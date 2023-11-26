import {
  Banner,
  Focus,
  Form,
  Hero,
  Planning,
  Pricing,
  Quotes,
} from "../containers/home/";

function Home() {
  return (
    <main>
      <Hero />
      <Planning />
      <Quotes />
      <Focus />
      <Banner />
      <Pricing />
      <Form />
    </main>
  );
}

export default Home;
