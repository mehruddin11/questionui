import data from './data';
import SingleQuestion from './singleelement';
function App() {
  return (
        <main>
        <div className ='container'>
        <h3> Question and Answer About Login </h3>
          <section>
          {
            data.map((question)=>{
              return <SingleQuestion key ={question.id}{...question} />
            })
          }
          </section>
        </div>
        </main>
    );
}

export default App;
