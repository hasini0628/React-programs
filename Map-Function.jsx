function App(){
  let subjects = [
  "React",
  "JavaScript",
  "Python",
  "HTML",
  "CSS"
];
   return(
    <div> 
      <h1>My favorite subjects</h1>
      {subjects.map((subject,index)=>(
        <h2 key={index}>{subject}</h2>
      ))}
    </div> 
  )
};
export default App;
