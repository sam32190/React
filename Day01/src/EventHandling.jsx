// function FootBall() {

//   event handler function
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return <button onClick={shoot}> Take the shot! </button>;
// }

// export default FootBall;

function FootBall() {
  // event handler function
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}> Take the shot! </button>;
}

export default FootBall;
