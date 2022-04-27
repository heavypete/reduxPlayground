import { myCreateStore, Action, State } from "./store";
import React from "react";
import { createRoot } from "react-dom/client";

import { counter } from "./reducer";
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
const store = myCreateStore<State, Action>(counter);

function App(props: { count: any }): React.ReactElement {
  return (
    <div>
      <div>
        {" "}
        REDUX TEST
        <button
          onClick={() => {
            store.dispatch({
              type: "INCREMENT",
            });
          }}
        >
          Increase
        </button>
      </div>
      <div>{JSON.stringify(props)}</div>
      {props.count}
    </div>
  );
}

root.render(<App count={store.getState()} />);
