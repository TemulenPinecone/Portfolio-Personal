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

export function Skills() {
  return (
    //   CONTAINER
    <div className="py-20">
      <div>
        <div className="flex justify-center mb-3">
          <p className="border rounded-lg w-fit bg-gray-200 text-gray-600 px-5">
            Skills
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <p className=" text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="">
          {/* ICONS */}
          <div className="flex flex-col gap-y-10 justify-between px-5">
            {/* 1st line */}
            <div className="flex justify-between">
              {/* JAVASCRIPT */}
              <div className="flex flex-col">
                <JavascriptIcon width={40} height={40} />
                <p className="text-gray-600">Javascript</p>
              </div>

              {/* TYPESCRIPT */}
              <div className="flex flex-col">
                <TypescriptIcon width={40} height={40} />
                <p className="text-gray-600">Typescript</p>
              </div>

              {/* REACT */}
              <div className="flex flex-col">
                <ReactIcon width={40} height={40} />
                <p className="text-gray-600">React</p>
              </div>

              {/* NEXT.JS */}
              <div>
                <NextJSIcon height={40} width={40} />
                <p className="text-gray-600">Next.js</p>
              </div>

              {/* NODE.JS */}
              <div>
                <NodeJSIcon width={40} height={40} />
                <p className="text-gray-600">Node.js</p>
              </div>

              {/* EXPRESS.JS */}
              <div>
                <ExpressIcon width={40} height={40} />
                <p className="text-gray-600">Express.js</p>
              </div>

              {/* NEST.JS */}
              <div>
                <NestJSIcon width={40} height={40} />
                <p className="text-gray-600">Nest.js</p>
              </div>

              {/* SOCKET.IO */}
              <div>
                <SocketIOIcon width={40} height={40} />
                <p className="text-gray-600">Socket.io</p>
              </div>
            </div>
            {/* 2nd line */}
            <div className="flex justify-between flex-row-reverse">
              {/* JAVASCRIPT */}
              <div className="flex flex-col">
                <JavascriptIcon width={40} height={40} />
                <p className="text-gray-600">Javascript</p>
              </div>

              {/* TYPESCRIPT */}
              <div className="flex flex-col">
                <TypescriptIcon width={40} height={40} />
                <p className="text-gray-600">Typescript</p>
              </div>

              {/* REACT */}
              <div className="flex flex-col">
                <ReactIcon width={40} height={40} />
                <p className="text-gray-600">React</p>
              </div>

              {/* NEXT.JS */}
              <div>
                <NextJSIcon height={40} width={40} />
                <p className="text-gray-600">Next.js</p>
              </div>

              {/* NODE.JS */}
              <div>
                <NodeJSIcon width={40} height={40} />
                <p className="text-gray-600">Node.js</p>
              </div>

              {/* EXPRESS.JS */}
              <div>
                <ExpressIcon width={40} height={40} />
                <p className="text-gray-600">Express.js</p>
              </div>

              {/* NEST.JS */}
              <div>
                <NestJSIcon width={40} height={40} />
                <p className="text-gray-600">Nest.js</p>
              </div>

              {/* SOCKET.IO */}
              <div>
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
