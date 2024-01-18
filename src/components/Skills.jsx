import {
  JavascriptIcon,
  NestJSIcon,
  NextJSIcon,
  ReactIcon,
  SocketIOIcon,
  TypescriptIcon,
  NodeJSIcon,
  ExpressIcon,
} from "./icons";
// import { JavascriptIcon } from "./icons/Javascript";
// import { TypescriptIcon } from "./icons/TypescriptIcon";
// import { ReactIcon } from "./icons/ReactIcon";
// import { NextJSIcon } from "./icons/NestJSIcon";
// import { NodeJSIcon } from "./icons/NodeJSIcon";
// import { ExpressIcon } from "./icons/ExpressIcon";
// import { NestJSIcon } from "./icons/NestJSIcon";
// import { SocketIOIcon } from "./icons/SocketIOIcon";

function Skills() {
  return (
    //   CONTAINER
    <div className="container bg-white">
      <div className="container">
        <div className="flex justify-center">
          <p className="border rounded-lg w-fit bg-gray-200 text-gray-600 px-5">
            Skills
          </p>
        </div>
        <div className="flex justify-center">
          <p className=" text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="">
          {/* ICONS */}
          <div>
            {/* 1st line */}
            <div className="flex justify-between">
              {/* JAVASCRIPT */}
              <div className="flex flex-col items-center">
                <JavascriptIcon width={40} height={40} />
                <p className="text-gray-600">Javascript</p>
              </div>

              {/* TYPESCRIPT */}
              <div className="flex flex-col items-center">
                <TypescriptIcon width={40} height={40} />
                <p className="text-gray-600">Typescript</p>
              </div>

              {/* REACT */}
              <div className="flex flex-col items-center">
                <ReactIcon width={40} height={40} />
                <p className="text-gray-600">React</p>
              </div>

              {/* NEXT.JS */}
              <div className="flex flex-col items-center">
                <NextJSIcon height={40} width={40} />
                <p className="text-gray-600">Next.js</p>
              </div>

              {/* NODE.JS */}
              <div className="flex flex-col items-center">
                <NodeJSIcon width={40} height={40} />
                <p className="text-gray-600">Node.js</p>
              </div>

              {/* EXPRESS.JS */}
              <div className="flex flex-col items-center">
                <ExpressIcon width={40} height={40} />
                <p className="text-gray-600">Express.js</p>
              </div>

              {/* NEST.JS */}
              <div className="flex flex-col items-center">
                <NestJSIcon width={40} height={40} />
                <p className="text-gray-600">Nest.js</p>
              </div>

              {/* SOCKET.IO */}
              <div className="flex flex-col items-center">
                <SocketIOIcon width={40} height={40} />
                <p className="text-gray-600">Socket.io</p>
              </div>
            </div>
            {/* 2nd line */}
            <div className="flex justify-between flex-row-reverse">
              {/* JAVASCRIPT */}
              <div className="flex flex-col items-center">
                <JavascriptIcon width={40} height={40} />
                <p className="text-gray-600">Javascript</p>
              </div>

              {/* TYPESCRIPT */}
              <div className="flex flex-col items-center">
                <TypescriptIcon width={40} height={40} />
                <p className="text-gray-600">Typescript</p>
              </div>

              {/* REACT */}
              <div className="flex flex-col items-center">
                <ReactIcon width={40} height={40} />
                <p className="text-gray-600">React</p>
              </div>

              {/* NEXT.JS */}
              <div className="flex flex-col items-center">
                <NextJSIcon height={40} width={40} />
                <p className="text-gray-600">Next.js</p>
              </div>

              {/* NODE.JS */}
              <div className="flex flex-col items-center">
                <NodeJSIcon width={40} height={40} />
                <p className="text-gray-600">Node.js</p>
              </div>

              {/* EXPRESS.JS */}
              <div className="flex flex-col items-center">
                <ExpressIcon width={40} height={40} />
                <p className="text-gray-600">Express.js</p>
              </div>

              {/* NEST.JS */}
              <div className="flex flex-col items-center">
                <NestJSIcon width={40} height={40} />
                <p className="text-gray-600">Nest.js</p>
              </div>

              {/* SOCKET.IO */}
              <div className="flex flex-col items-center">
                <SocketIOIcon width={40} height={40} />
                <p className="text-gray-600">Socket.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
