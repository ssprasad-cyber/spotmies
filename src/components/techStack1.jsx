"use client";
import React from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Wrapper from "./reusableComponent/wrapper";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiSolidity,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiIpfs,
  SiWeb3Dotjs,
  SiHyperledger,
  SiJavascript,
  SiStellar,
} from "react-icons/si";
import { Fade } from "react-reveal";
import './tech.css'
import { color } from "framer-motion";
import { MdBorderColor } from "react-icons/md"; 
import { BsHexagonFill   } from 'react-icons/bs';


export default function TechStack1() {
  // add truffle,Ganache
  // const technologies = [
  //   {
  //     icon: <FaReact color="#61DBFB" />,
  //     name: "React",
  //   },
  //   {
  //     icon: <FaNodeJs color="#3C2073A" />,
  //     name: "Node JS",
  //   },
  //   {
  //     icon: <SiFlutter color="#02569B" />,
  //     name: "Flutter",
  //   },
  //   {
  //     icon: <SiMongodb color="#4DB33D" />,
  //     name: "MongoDB",
  //   },
  //   {
  //     icon: <SiSolidity color="#363636" />,
  //     name: "Solidity",
  //   },
  //   {
  //     icon: <SiNextdotjs color="#000000" />,
  //     name: "Next JS",
  //   },
  //   {
  //     icon: <SiDjango color="#092E20" />,
  //     name: "Django",
  //   },
  //   {
  //     icon: <SiPython color="#3776AB" />,
  //     name: "Python",
  //   },
  //   {
  //     icon: <SiMysql color="#4479A1" />,
  //     name: "MySQL",
  //   },
  //   {
  //     icon: <SiAmazonaws color="#232F3E" />,
  //     name: "AWS",
  //   },
  //   {
  //     icon: <SiIpfs color="#65C2CB" />,
  //     name: "IPFS",
  //   },
  //   {
  //     icon: <SiWeb3Dotjs color="#F162022" />,
  //     name: "Web3 JS",
  //   },
  //   {
  //     icon: <SiHyperledger color="#2F3134" />,
  //     name: "Hyperledger",
  //   },
  //   {
  //     icon: <SiJavascript color="#F7DF1E" />,
  //     name: "Javascript",
  //   },
  //   {
  //     icon: <SiStellar color="#020B5E5" />,
  //     name: "Stellar",
  //   },
  // ];

  
   

  return (
    <Wrapper
      title={"Techstack we're working with"}
      className="bg-bg3 min-h-fit"
    >
      <div className="mt-5 px-0 md:px-5">
        <Fade bottom>
          <div>
            <div className="flex justify-center items-center p-8 lg:pl-20">
            <BsHexagonFill  className="ml-12 mr-12 text-2xl "  color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            </div>
            <div className="flex  justify-center items-center ml-18 p-6 pl-40 lg:pl-20">
              <img className="ml-20 mr-20" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/react.png " width="47px" alt="" />
              <img className="ml-20 mr-20" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/node%20js.png" width="47px" alt="" />
              <img className="ml-20 mr-20" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/flutter.png" width="47px" alt="" />
              <img className="ml-20 mr-20" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/mongoDB.png" width="47px" alt="" />
            
            </div>
            <div className="flex justify-center items-center p-6  lg:pl-20">
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/solidity.png" width="47px" alt="" />
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/nextjs.png" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/django.png" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/python.png" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/mysql.png" width="51px" alt="" />
              <img className="ml-12 mr-12"src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/aws.png" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/ips.png " width="47px" alt="" />
            </div>
            <div className="flex justify-center items-center p-6 mr-18 p-6 pr-40  lg:pl-20">
              <img className="ml-20 mr-20 " src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/web3.png" width="47px" alt="" />
              <img className="ml-20 mr-20 " src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/Hyperledger.png" width="47px" alt="" />
              <img className="ml-20 mr-20 " src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/javascprit.png" width="47px" alt="" />
              <img className="ml-20 mr-20 " src="https://raw.githubusercontent.com/ssprasad-cyber/images/main/spotmies%20images/stellar.png" width="47px" alt="" />
            
            </div>
            <div className="flex justify-center items-center p-8 lg:pl-20">
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            <BsHexagonFill  className="ml-12 mr-12 text-2xl" color="#2F3134" />
            </div>
          </div>
        </Fade>
      </div>
    </Wrapper>
  );


}
