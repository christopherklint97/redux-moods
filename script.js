(function () {
  // declaring the moods
  const happy = "ɷ◡ɷ";
  const sad = "⊙︿⊙";
  const angry = "⋋_⋌";
  const confused = "(°_°)";
  const normal = "(◕‿◕✿)";

  // setting the initial state
  const INITIAL_STATE = { mood: normal };

  // creating the mood reducer for Redux
  function moodReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "HAPPY":
        return { ...state, mood: happy };
      case "SAD":
        return { ...state, mood: sad };
      case "ANGRY":
        return { ...state, mood: angry };
      case "CONFUSED":
        return { ...state, mood: confused };
      default:
        return state;
    }
  }

  // initializing Redux store
  const store = Redux.createStore(moodReducer);

  // storing variables from DOM
  const happyBtn = document.getElementById("happy");
  const sadBtn = document.getElementById("sad");
  const angryBtn = document.getElementById("angry");
  const confusedBtn = document.getElementById("confused");
  const showFace = document.getElementById("face");

  // add event listeners
  happyBtn.addEventListener("click", () => {
    store.dispatch({ type: "HAPPY" });
    showFace.innerText = store.getState().mood;
  });
  sadBtn.addEventListener("click", () => {
    store.dispatch({ type: "SAD" });
    showFace.innerText = store.getState().mood;
  });
  angryBtn.addEventListener("click", () => {
    store.dispatch({ type: "ANGRY" });
    showFace.innerText = store.getState().mood;
  });
  confusedBtn.addEventListener("click", () => {
    store.dispatch({ type: "CONFUSED" });
    showFace.innerText = store.getState().mood;
  });
})();
