import React from "react";
import logo from "../../assets/whiteLogo.png";
import sign from "../../assets/sign.png";
const Main = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse bg-black justify-around pb-5">
      {/* left information  */}
      <div className="lg:w-3/6 flex flex-col items-center text-white">
        <h1 className="bla text-[50px] lg:text-[150px]">Welcome</h1>
        <div className="flex flex-col gap-2 text-center lg:text-start">
          <p className="text-lg lg:text-3xl">
            to{" "}
            <span className="text-xl lg:text-6xl text-red-500">
              OPAQUE MUSIC GROUP
            </span>{" "}
            is
          </p>
          <p className="text-lg lg:text-3xl">
            where music meets entrepreneurship.
          </p>
          <p className="text-sm lg:text-lg">
            Join us on this journey as we revolutionize the creators' economy
            and
          </p>
          <p className="text-sm lg:text-lg">
            help local music businesses reach unprecedented levels of success.
          </p>
        </div>

        <img
          className=" self-center lg:self-end w-96 h-36 object-cover object-center"
          src={sign}
          alt=""
        />
      </div>
      {/* right logo  */}
      <div className=" h-40 w-40 lg:w-1/6 lg:h-full flex items-center m-5 lg:m-0 self-center">
        <img className=" w-full object-cover" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Main;
