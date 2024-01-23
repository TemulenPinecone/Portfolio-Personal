import { useTheme } from "@/context/ThemeContext";

export default AboutMe;

function AboutMe() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  const bgClass = `px-10 py-20 ${
    theme == `light` ? `bg-gray-50` : `bg-gray-950`
  }`;

  const txtClass = `font-extralight ${
    theme == `light` ? `text-gray-600` : `text-gray-100`
  }`;

  const txtBlack = `text-3xl font-bold pb-[2%] ${
    theme == `light` ? `text-black` : `text-gray-100`
  }`;

  const aboutMe = `rounded-lg text-sm font-light px-3 py-1 ${
    theme == `light` ? `text-gray-600 bg-gray-200` : `text-gray-50 bg-gray-600`
  }`;

  const borderClassName = `border-l-8 border-b-8 ${
    theme == `light`
      ? `border-l-white border-b-white`
      : `border-l-black border-b-black`
  }`;

  return (
    <div className={bgClass}>
      <div>
        {/* ABOUT ME */}
        <div className="flex justify-center pb-10 ">
          <p className={aboutMe}>About me</p>
        </div>

        <div className="flex flex-row gap-5">
          <div className="w-[50%] flex justify-center">
            <div className="w-[60%] relative z-20 ">
              <div className="relative border-l-gray-400 border-b-gray-400 border-l-8 border-b-8">
                <img
                  className={borderClassName}
                  src="https://cdn.fstoppers.com/styles/full/s3/photos/2019/02/857ebd7658e56c84a4dc65cc4453a305.jpg?itok=rpCL6_UU"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-[50%]">
            <p className={txtBlack}>Curious about me? Here you have it:</p>
            <div className={txtClass}>
              <p className="pb-[2%]">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="pb-[2%]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="pb-[2%]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="pb-[2%]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="pb-[2%]">Finally, some quick bits about me.</p>
              <div className="flex justify-between pb-[2%]">
                <div>
                  <li className="pb-[2%]">B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div>
                  <li className="pb-[2%]">Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
