const MovieCard=(props)=>{
    const { Title, Poster, Year, Type } = props.movie;

    return(
        <div  className=".movie-card" style={{
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "200px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
}}>
            <b>{Title}</b><br></br>
            <img src={Poster} alt={Title}  style={{ width: "100%", borderRadius: "8px" }}/>
            <p>{Year}</p>
            <p>Type: {Type}</p>


        </div>
    )
}
 
export default MovieCard;