 
function Banner ({Image,Text}) {
  return (
        <section>
            <div className="image-container">
                <img className="banner" src={Image} alt="vue sur la mer" />
                <h1>{Text}</h1>
            </div>
        </section>
  );
}

export default Banner;