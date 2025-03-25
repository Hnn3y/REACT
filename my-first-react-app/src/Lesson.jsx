function Lesson (){
    return(
        <div className="container"> 
        <svg>
          <circle cx="20" cy="75" r="30" stroke="blue" strokeWidth="2"  />
        </svg>
        <form>
          <input type="text"/> 
          <h1>
            Animals:
          </h1> 

          <ul>
            <li>Lion</li>
            <li>Cow</li>
            <li>Snake</li>
            <li>Lizard</li>
            <li>Chicken</li>
          </ul>
        </form>
        </div>
    );
    
}

export default Lesson;