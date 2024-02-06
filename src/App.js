import TaskList from "./components/TaskList";
const items = [
  {
    id: 1,
    text: "Задание 1",
  },
  {
    id: 2,
    text: "Задание 2",
  },
  {
    id: 3,
    text: "Задание 3",
  },
];
function App() {
  return (
    <div className="App">
      <TaskList tasks={items}/>
    </div>
  );
}

export default App;
