// import React from 'react';
// import router from 'react-router';

// import Home from './components/Home';
// import Goals from './components/Goals';
// import Survey from './components/Survey';


// // Inclue the React library
// // var React = require("react");

// // Include the react-router module
// // var router = require("react-router");

// // Include the Route component for displaying individual routes
// var Route = router.Route;

// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// const routes = (
// 	<Route path="/" component={Home}>
// 		<IndexRoute component={IndexPage}/>
// 		<Route path="goals/" component={Goals}/>
// 		<Route path="survey/" component={Survey}/>
// 	</Route>
// );

// export default routes; 



// // Reference the high-level components
// var Main = require("../components/Main");
// var Home = require("../components/children/Home");
// var Goals = require("../components/children/Goals");
// var GoalList = require("../components/children/grandchildren/GoalList");
// var ListItems = require("../components/children/grandchildren/ListItems");

// // Export the Routes
// module.exports = (

//   // The high level component is the Router component
//   <Router history={hashHistory}>

//     <Route path="/" component={Main}>

//       {/* If user selects Home then show the appropriate component*/}
//       <Route path="Home" component={Home} >

//       <Route path="Goals" component={Goals} />

//         {/* Goals has its own Grandchildren options */}
//         <Route path="GoalList" component={GoalList} />
//         <Route path="ListItems" component={ListItems} />

//         <IndexRoute component={GrandChild1} />

//       </Route>

//       {/* If user selects Child2 then show the appropriate component*/}
//       <Route path="Goals" component={Goals} />

//       {/* If user selects any other path... we get the Home Route */}
//       <IndexRoute component={Main} />

//     </Route>
//   </Router>
// );