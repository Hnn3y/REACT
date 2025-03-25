function Lesson (){
    const animals = ["Lion","Cow", "Snake", "Chicken"]

    return( 
        <div className="container"> 
        <svg>
          <circle cx="20" cy="75" r="30" stroke="blue" strokeWidth="2"  />
        </svg>
        <form>
          <input type="text"/>
        </form>
        <h1>
            Animals:
          </h1> 
          <ul>
            {animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
             })}
          </ul>
        </div>
    );
    
}

export default Lesson;