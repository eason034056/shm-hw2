import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

const ladderChecklist = [
  {
    id: 1,
    text: "Make sure feet are not broken or malfunctioning and that the slip-resistant pads are secure.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_1_2.png`,
  },
  {
    id: 2,
    text: "Keep the area around the bottom of the ladders clear.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_1_2.png`,
  },
  {
    id: 3,
    text: "Make sure the spreader braces are secure and working properly.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_3.png`,
  },
  {
    id: 4,
    text: "Inspect for cracks, bends, and splits on the side rails, rungs, and steps.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_4_5.png`,
  },
  {
    id: 5,
    text: "Ensure the ladder rungs, cleats, and steps are parallel, level, and uniformly spaced when the ladder is in position for use.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_4_5.png`,
  },
  {
    id: 6,
    text: "Make sure the portable ladders and fixed ladders are spaced 25~36 cm as measured between the centerlines of the rungs, cleats, and steps.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_6.png`,
  },
  {
    id: 7,
    text: "Make sure the step stools are spaced 20~31 cm as measured between centerlines of the rungs, cleats, and steps.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_7.png`,
  },
  {
    id: 8,
    text: "Keep the area around the top of ladders clear.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_8.png`,
  },
  {
    id: 9,
    text: "Ensure all bolts and rivets are secure.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_9.png`,
  },
  {
    id: 10,
    text: "Make sure the ladder is free of foreign materials such as oil and grease.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/ladder_10.png`,
  },
];
const usingChecklist = [
  {
    id: 1,
    text: "Do not tie two ladders together to make them longer.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_1.png`,
  },
  {
    id: 2,
    text: "Don’t carry tools in your hands.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_2.png`,
  },
  {
    id: 3,
    text: "Face the ladder when ascending or descending.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_3.png`,
  },
  {
    id: 4,
    text: "Wear clean, sturdy shoes with slip-resistant soles.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_4.png`,
  },
  {
    id: 5,
    text: "Maintain 3-point contact at all times",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_5.png`,
  },
  {
    id: 6,
    text: "Don’t use a ladder without locking the spreader or other device.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_6.png`,
  },
  {
    id: 7,
    text: "Don’t block a fire exit.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_7.png`,
  },
  {
    id: 8,
    text: "Don’t ‘walk’ a ladder (rocking from side to side to move).",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_8.png`,
  },
  {
    id: 9,
    text: "Set the ladder at 75 degrees when using portable ladders.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_9.png`,
  },
  {
    id: 10,
    text: "Avoid using a metal ladder near power lines or exposed energized electrical equipment.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_10.png`,
  },
  {
    id: 11,
    text: "Don’t climb using the two highest steps or the top of the platform.",
    completed: false,
    imageUrl: `${process.env.PUBLIC_URL}/pictures/usage_11.png`,
  },
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/ladder" element={<Tasks list={ladderChecklist} />} />
          <Route path="/using" element={<Tasks list={usingChecklist} />} />
          <Route index element={<Tasks list={ladderChecklist} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
