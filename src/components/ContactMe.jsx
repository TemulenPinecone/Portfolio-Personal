import { CopyIcon } from "./icons/CopyIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { MessageIcon } from "./icons/MessageIcon";
import { PhoneIcon } from "./icons/PhoneIcon";

export const ContactMe = () => {
  return (
    <div className="flex flex-col items-center text-gray-600 pb-5">
      {/* GET IN TOUCH */}
      <div className="flex justify-center pb-1">
        <p className="border rounded-lg w-fit bg-gray-200 px-5">Get in touch</p>
      </div>
      <div className="flex text-center w-[500px]">
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>

      {/* EMAIL */}
      <div className="flex mt-5 items-center gap-3">
        <div>
          <MessageIcon width={25} height={25} />
        </div>
        <div className="text-2xl text-black text-medium">
          <p>JosephT@gmail.com</p>
        </div>
        <div>
          <CopyIcon width={30} height={30} />
        </div>
      </div>

      {/* PHONE */}
      <div className="flex mt-5 items-center content-center gap-3">
        <div className="flex items-center">
          <PhoneIcon width={25} height={25} />
        </div>
        <div className="text-2xl text-black text-medium">
          <p>+976-9595-3927</p>
        </div>
        <div>
          <CopyIcon width={30} height={30} />
        </div>
      </div>

      {/*  */}
      <div className="mt-5">
        <p>You may also find me on these platforms!</p>
        <div>
          <div className="flex items-center justify-center">
            <GitIcon width={40} height={40} />
            <TwitterIcon width={30} height={30} />
            <FigmaIcon width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
