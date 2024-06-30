"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";


const Dashboard = () => {
  const [challenges, setChallenges] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchChallenges() {
            const res = await fetch('/api/challenges');
            const data = await res.json();
            setChallenges(data);
            setLoading(false);
        }
        fetchChallenges();
    }, []);

    const handleSelectChallenge = (challenge) => {
        setSelectedChallenge(challenge);
    };

  const handleNextChallenge = () => {
    const currentIndex = challenges.findIndex(
      (challenge) => challenge === selectedChallenge
    );
    const nextIndex = (currentIndex + 1) % challenges.length;
    setSelectedChallenge(challenges[nextIndex]);
  };

  const handlePrevChallenge = () => {
    const currentIndex = challenges.findIndex(
      (challenge) => challenge === selectedChallenge
    );
    const prevIndex = (currentIndex - 1 + challenges.length) % challenges.length;
    setSelectedChallenge(challenges[prevIndex]);
  };

  return (
    <main className="flex relative lg:justify-between w-full p-0 lg:h-[100vh] pb-12">
      <div className="w-[25%] hidden lg:flex">
        <Sidebar
          challenges={challenges}
          onSelectChallenge={handleSelectChallenge}
        />
      </div>
      <div className="flex-1 lg:overflow-y-auto mt-10 mr-12 lg:pb-12 w-[70%] ml-8">
        <p className="text-2xl pb-4 ">Challenge Details</p>
        {(
          <div className="flex flex-col space-y-2">
            {selectedChallenge ? (
              <>
                <h2 className="text-lg pb-1">{selectedChallenge.title}</h2>
                <p className="pt-2">{selectedChallenge.description}</p>
                <h3>Example Solutions</h3>
                {selectedChallenge.example_solutions? (selectedChallenge.example_solutions.map((solution, index) => (
                  <div key={index}>
                    <h4>{solution.language}</h4>
                    <pre className="bg-green-800 p-2 rounded-md text-white font-mono">
                      {solution.code}
                    </pre>
                  </div>) 
                )) : ( <p>No example solutions</p>)}
              </>
            ) : (
              <p>No challenge selected</p>
            )}
          </div>
        )}
        <div className="flex items-center w-full justify-between mt-6 lg:hidden">
          <Button
            variant="primary"
            className="mt-4 bg-green-700 w-[90px]"
            onClick={handlePrevChallenge}
          >
            <span>Prev</span>
          </Button>
          <Button
            variant="primary"
            className="mt-4 bg-green-700 w-[90px]"
            onClick={handleNextChallenge}
          >
            <span>Next</span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
