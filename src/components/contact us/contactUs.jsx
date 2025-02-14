import React from "react";
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   HatenaShareButton,
//   InstapaperShareButton,
//   LineShareButton,
//   LinkedinShareButton,
//   LivejournalShareButton,
//   MailruShareButton,
//   OKShareButton,
//   PinterestShareButton,
//   PocketShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   TumblrShareButton,
//   TwitterShareButton,
//   ViberShareButton,
//   VKShareButton,
//   WhatsappShareButton,
//   WorkplaceShareButton,
// } from "react-share";
import {
  FacebookIcon,
  // RedditIcon,
  // TwitterIcon,
  // WhatsappIcon,
} from "react-share";
const Contact = () => {
  return (
    <div className="ml-auto mr-auto mt-10 cursor-pointer  border-2  rounded  w-6/12 ">
      <h1 className="text-center text-xl font-bold text-[23px]  mt-10">
        Contact Us
      </h1>
      <div className="flex flex-wrap justify-center items-center p-2">
        {/* <TwitterIcon size={32} round={true} className="m-4" /> */}
        <a
          href="https://www.facebook.com/profile.php?id=100084441451725"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon size={32} round={true} className="m-4" />
        </a>
        {/* <RedditIcon size={32} round={true} className="m-4" /> */}
        {/* <WhatsappIcon size={32} round={true} className="m-4" /> */}
      </div>
      <h3 className=" text-center text-base font-medium"> </h3>
    </div>
  );
};

export default Contact;
