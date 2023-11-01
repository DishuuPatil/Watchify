
import Card from "./Card";

export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {results.map((result) => (
          <Card key={result.id} result={result}/>        
        ))}
    </div>
  );
}
{/*In div, changed display to grid system using diff classnames and for different screen sizes.
Here we are passing result data to card component. */}