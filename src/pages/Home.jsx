import Image from '../assets/mer.png';
import Cards from "../components/cards.jsx";
import Banner from '../components/banner.jsx';
import Title from '../appartements.json';
import Cover from '../appartements.json';
 
function Home() {
  return (
    <main>
        <section>
          <Banner Image={Image} Text={"Chez vous, partout et ailleurs"}/>
        </section>
        <section>
          <Cards  Cover={Cover} Title={Title} />
          <Cards/>
          <Cards />
        </section>
    </main>

  );
}
export default Home;  
