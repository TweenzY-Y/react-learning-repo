import Lesson from "./components/Lesson";

function App() {
  return (
    <Lesson header="Your first component">
      <p>
        Components are used to divide website for reusable blocks. That design pattern also changes the way of
        implementing actual website design into code. React components can be mixed with styles and
        <strong> JavaScript</strong> logic in one place.
      </p>
      <h3>Defining a component</h3>
      <p>Defining a component can be described by 3 steps</p>
      <ol>
        <li>Exporting component</li>
        <li>Defining a component as a JavaScript function</li>
        <li>Adding a JSX markup as a return of a function</li>
      </ol>
      <p>
        I can keep multiple components in one file when they are strongly related to each other and small enough. I can
        always move component into separate file.
      </p>
      <p>I should never nest component declarations! All component declarations should be at top level.</p>
    </Lesson>
  );
}

export default App;
