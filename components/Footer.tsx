// components/Footer.tsx
import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center">
      <div>
        <h3 className="text-base mb-1">Sooriaya Publishers</h3>
        <p className="opacity-50">Colombo 10</p>
      </div>
      {/* socials */}
      <div className="text-5xl flex justify-center gap-16 text-gray-600">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />{" "}
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://twitter.com/srf007" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />{" "}
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=1329705260"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
