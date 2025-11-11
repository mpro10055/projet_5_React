import {Link} from "react-router-dom";


 function Cards({Cover,Title}) {
    return ( 
      <Link to= "/Annonces">  
      <div className="Cards">
        <img className="pictures" src={Cover} alt="" /> 
        <h2 className="cardstexte">{Title}</h2>
      </div>
</Link> 
    )}
 export default Cards;