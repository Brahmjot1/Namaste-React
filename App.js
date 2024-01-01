// const heading = React.createElement(
//     "h1",
//     { id: "heading", class: "headingClass" },
//     "Hello world React!!"
// );

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
         "div",
         { id: "child" },
         [
        [React.createElement("h1", { id: "h1Tag" }, "Hello World h1"),
        React.createElement("h2", { id: "h1Tag" }, "Hello World h2")]
        ,
        [React.createElement("h1", { id: "h1Tag" }, "Hello World h1"),
        React.createElement("h2", { id: "h1Tag" }, "Hello World h2")]
         ]
        )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);