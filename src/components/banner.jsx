 
function Banner ({Image,Text}) {
  return (
        <section>
            <div class="image-container">
                <img class="banner" src={Image} alt="vue sur la mer" />
                <h1>{Text}</h1>
            </div>
        </section>
  );
}

export default Banner;