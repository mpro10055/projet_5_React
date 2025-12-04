import Image from '../assets/mer.png';
import Cards from '../components/Cards.jsx';
import Banner from '../components/banner.jsx';
import data from '../data/appartements.json';

function Home() {
  return (
    <main>
      <Banner
        Image={Image}
        Text={'Chez vous, partout et ailleurs'}
        alt="vue sur la mer"
      />
      <section className="FullCards">
        {data.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
