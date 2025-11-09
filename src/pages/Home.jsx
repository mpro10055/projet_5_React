import mer from '../assets/mer.png';
import '../styles/Home.scss';
 
function Home() {
  return (
    <main>
        <section>
            <div class="image-container">
                <img class="mer" src={mer} alt="vue sur la mer" />
            </div>

        </section>
    </main>

  );
}
export default Home;