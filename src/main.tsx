import React, { useEffect, useState } from "react";
import "./tailwind.css";
import config from "../pulse.config";
import { useLoading } from "@pulse-editor/react-api";

export const Config = config;

export default function Main() {
  const [count, setCount] = useState<number>(0);
  const { isReady, toggleLoading } = useLoading();

  useEffect(() => {
    if (isReady) {
      toggleLoading(false);
    }
  }, [isReady, toggleLoading]);

  return (
    <div className="p-2">
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p className="text-blue-400">{count}</p>
    </div>
  );
}
