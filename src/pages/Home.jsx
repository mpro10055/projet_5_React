import Image from '../assets/mer.png';
import Cards from "../components/cards.jsx";
import Banner from '../components/banner.jsx';
import data from '../data/appartements.json';


function Home() {
  return (
    <main> 
          <Banner Image={Image} Text={"Chez vous, partout et ailleurs"}/>
        <section className='FullCards'>
          {data.map((item) => (
            <Cards key={item.id} Cover={item.cover} Title={item.title} />
          ))}
        </section>
    </main>

  );
}


export default Home;  
