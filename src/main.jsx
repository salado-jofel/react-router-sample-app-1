import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./_css/global.css";
import { RouterProvider } from "react-router-dom";
import routes from "./_routes/routes";
import { Provider } from "react-redux";
import { store } from "./_store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="bg-blue-100 h-screen w-full p-4">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  </StrictMode>
);
