import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Section() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-11/12 md:w-10/12 items-end justify-center relative mx-auto flex flex-col">
      {isLoading ? (
        <Skeleton className="w-6/12 h-2/5 absolute top-40 left-0" />
      ) : (
        <div className="bg-gray-400 shadow-card w-6/12 h-2/5 absolute left-0"></div>
      )}
      <div className="h-full w-3/5">
        <div className="w-full h-2/5  mb-4">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bpZA0trSN5Y?si=yZrgzz4PYhHtvvaz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="w-1/2 h-2/5  mx-auto">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1612531726554-4fd9f157132d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              alt="Loaded content"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
