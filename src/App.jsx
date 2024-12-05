import Accordion from "./components/Accordion";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Todo from "./components/Todo";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import {accordionData} from "./utils/content"

 const App = () => {
  return (
    <div>
     {/* <Counter /> */}
     {/* <Todo/> */}
     {/* <Meals/> */}
     {/* <Calculator /> */}
     {/* <ToggleBackgroundColor /> */}
     {/* <HiddenSearchBar /> */}
     {/* <Testimonials /> */}
     <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
