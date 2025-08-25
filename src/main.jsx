import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import Events from "./components/Events/Events.jsx";
import EventDetail from "./components/Events/EventDetail.jsx";
import Members from "./components/Members/Members.jsx";
import About from "./components/About/About.jsx";
import MemberProfile from "./components/Members/MemberProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />

      <Route path="members" element={<Members />} />
      <Route path="/members/:id" element={<MemberProfile />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
