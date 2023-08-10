import data from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <div>
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
