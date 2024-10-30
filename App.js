// /**
// <div id="parent">
//   <div id="child">
//      <h1>H1 tag</h1>
    //  <h2>h2 TAG</h2>
//    </div>
// </div>

// */

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",
        {id:"child"},
        [
        React.createElement("h1",{},"H1 tag"),
        React.createElement("h2",{},"H2 tag")
        ]
    ),
]
)






// const heading=React.createElement("h1",{id:"heading" ,xyx:"abcd"}," Hello World From React !!");
// console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);