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
      <Lesson header="Conditional rendering"></Lesson>
      <Lesson header="Rendering lists">
        <p>While I use map function to render a component, JSX directly inside map function needs key attribute.</p>
        <p>
          Keys tell React which array item is assigned to given component. It's important when when array items can move
          due to sorting, filtering etc.
        </p>
        <p>Keys shouldn't be generated on fly. Ideally it's should be included in data (like id)</p>
        <h3>Rules of keys:</h3>
        <ol>
          <li>Each key among siblings must be unique!</li>
          <li>Key cannot change! Keys cannot be generated during rendering!</li>
        </ol>
        <p>If I don't provide any key. React will use item index instead. (That's what most of devs do)</p>
      </Lesson>
      <Lesson header={"Keeping components pure"}>
        <h3>Rules of pure functions:</h3>
        <ul>
          <li>It doesnt change any object or variable that existed before it was called</li>
          <li>For the same input it returns the same output</li>
        </ul>
        <p>React is designed that way it assumes that every component is a pure function.</p>
        <p>
          That's why StrictMode is used in development process. One of thing it does is to double render components to
          check if functions are pure.
        </p>
      </Lesson>
      <Lesson header={"Your UI as a tree"}>
        <p>There are two types of trees</p>
        <ol>
          <li>Rendering tree</li>
          <li>Dependency tree</li>
        </ol>
        <h3>Rendering tree shows render process as a tree.</h3>
        <h3>Dependency tree shows how components imports other components.</h3>
        <p>Understanding trees might be helpful while debugging or working on app performance.</p>
      </Lesson>
      <Lesson header="Responding to events">
        <p>
          To write a event handler function. It's usually written inside a component, and it's name starts with 'handle'
          and it's followed by name of an event.
        </p>
        <p>Because event handlers are written in components, they get access to props.</p>
        <p>I can pass event handlers from parent component to the child components.</p>
        <p>
          When I make my own component, I can name event handler prop whatever I want. By convention it should start
          from 'on'.
        </p>
        <p>
          There is something like event propagation. Event handler then catch all events up to the tree. It can be
          prevented by e.stopPropagation()
        </p>
      </Lesson>
      <Lesson header="State: A Component's Memory">
        <p>useState returns two types of values</p>
        <ol>
          <li>State variable - which ratain the data between renders</li>
          <li>
            State setter function - which allows us to change state value. Calling it also re-renders a component.
          </li>
        </ol>
        <p>
          useState is the first hook. Hooks are available only while React is rendering. Hooks have to be called at the
          top level of our component or inside our own hooks.
        </p>
        <p>
          React's useState knows which state to return because hooks rely on call order on every render. That's why it's
          important to stick to the rule of calling states only on the top level of a component. Because of that hooks
          always be called in the same order.
        </p>
        <p>
          React internally holds an array of state pairs (state variables and state setter functions) and it iterates
          over it while rendering.
        </p>
        <p>
          States are local to component instance. So If I render a component twice, each of component will have separate
          state and it will work independently
        </p>
      </Lesson>
    </>
  );
}

export default App;
