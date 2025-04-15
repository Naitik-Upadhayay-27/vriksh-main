"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="container">
        <div className="loading-container">
          <div className="loading__blocks">
            <i className="line line--bottom"></i>
            <i className="line line--left"></i>
            <i className="line line--right"></i>
            <i className="line line--roof-left"></i>
            <i className="line line--roof-right"></i>
          </div>
          <span className="text-gray-600 font-medium">Loading</span>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100px;
          margin: 0 auto;
        }

        .loading-container {
          display: inline-block;
        }

        .loading-container > span {
          font-size: 10px;
          text-align: center;
          display: inline-block;
        }

        .loading__blocks {
          position: relative;
          width: 26px;
          height: 20px;
          margin: 0 auto;
        }

        .line {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 26px;
          border-top: 3px solid #183e70;
          border-radius: 2px;
        }

        .line--left {
          animation: leftWall 1.2s ease-out infinite;
        }

        .line--right {
          animation: rightWall 1.2s ease-out infinite;
        }

        .line--roof-left {
          width: 26px;
          animation: roofLeft 1.2s ease-out infinite;
        }

        .line--roof-right {
          width: 26px;
          animation: roofRight 1.2s ease-out infinite;
        }

        @keyframes leftWall {
          10% {
            transform: rotate(0);
          }
          20%,
          100% {
            transform: rotate(-90deg);
            transform-origin: top left;
          }
        }

        @keyframes rightWall {
          20% {
            transform: rotate(0);
          }
          40%,
          100% {
            transform: rotate(90deg);
            transform-origin: top right;
          }
        }

        @keyframes roofLeft {
          40% {
            transform: rotate(0);
            left: 0;
            bottom: 0;
          }
          60%,
          100% {
            transform: rotate(-35deg);
            transform-origin: bottom left;
            left: -7px;
            bottom: 100%;
          }
        }

        @keyframes roofRight {
          60% {
            transform: rotate(0);
            left: 0;
            bottom: 0;
          }
          80%,
          100% {
            transform: rotate(35deg);
            transform-origin: bottom right;
            left: 7px;
            bottom: 100%;
          }
        }
      `}</style>
    </div>
  );
}
