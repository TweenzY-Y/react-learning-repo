import Lesson from "./components/Lesson";

function App() {
  return (
    <>
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
          I can keep multiple components in one file when they are strongly related to each other and small enough. I
          can always move component into separate file.
        </p>
        <p>I should never nest component declarations! All component declarations should be at top level.</p>
      </Lesson>
      <Lesson header="Importing and exporting components">
        <p>I can export components by default export or by named export.</p>
        <p>
          Most dev teams stick with one type of exporting components to avoid confusion. I'd stick with default
          exporting. I started with that and it feels natural for me.
        </p>
      </Lesson>
      <Lesson header="Writing markup with JSX">
        <p>Rules of JSX:</p>
        <ol>
          <li>Must return a single root element</li>
          <li>Close all tags!</li>
          <li>Most of attributes are camelCase</li>
        </ol>
      </Lesson>
      <Lesson header="JavaScript in JSX with curly braces">
        <p>
          I can use JavaScript inside JSX by using curly braces. That let's me to dynamically specify a JSX values based
          on JavaScript variables.
        </p>
        <p>Using curly braces can be done in two ways:</p>
        <ol>
          <li>As text: directly in JSX tag</li>
          <li>As JSX tag's attribute</li>
        </ol>
      </Lesson>
      <Lesson header="Passing props to a component">
        <p>If I pass all props from parent deep into tree I should be using spread syntax</p>
        <img src="./ss1.png"></img>
        <p>Props are immutable.</p>
      </Lesson>
    </>
  );
}

export default App;
