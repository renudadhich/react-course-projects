var app = {
  title: "Indecision app",
  subtitle: "this is the sub title of my app !!",
  options: [],
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const chooseoption = app.options[randomNum];
  alert(chooseoption);
};
var appRoot = document.getElementById("app");
const renderApp = () => {
  var template = (
    <div>
      <h1>{app.title}!</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are options" : "no options"}</p>
      <button onClick={onRemoveAll}>Remove all</button>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        {" "}
        What Should I do?
      </button>
      <ol>
        {app.options.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" id="" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
