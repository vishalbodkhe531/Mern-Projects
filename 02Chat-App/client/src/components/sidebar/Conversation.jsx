import React from "react";
import ConversationMap from "./ConversationMap";

function Conversation() {
  return (
    <>
      <div className="flex  gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer mt-4 w-[22rem]">
        <div className="avatar online">
          <div className="rounded-full h-12">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Ram Naik</p>
            <span>
              <img
                src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093"
                className="h-6"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
