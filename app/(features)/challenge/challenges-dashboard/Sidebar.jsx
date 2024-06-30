import React from "react";
import SidebarButton from "./sidebarButton";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Sidebar = ({challenges, onSelectChallenge}) => {


  return (
    <aside className="w-[250px] max-w-xs z-40  mt-8 ml-6">
      <h2 className=" text-2xl pb-4 font-bold">Challenges</h2>
      <div className="h-full px-3 max-h-[70vh] overflow-y-auto scroll-smooth">
        <ul className=" flex flex-col text-xl">
          {
          challenges.map((challenge) => (
            <li><SidebarButton key={challenge.title} challengeName={challenge.title} onClick={() => onSelectChallenge(challenge)} />
            </li>
          ))
        }
        <Separator className="h-2"/>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
