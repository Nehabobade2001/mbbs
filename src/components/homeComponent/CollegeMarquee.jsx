import { cn } from "../../lib/utils";
// import Marquee from "../magicui/marquee";
import React from "react";
import Marquee from "../magicui/marquee";
import img from "./assets/img.jpg";
import img2 from "./assets/img1.png";
import img3 from "./assets/img2.jpg";
import img4 from "./assets/img3.png";
import img5 from "./assets/img6.png";
import img6 from "./assets/img5.png";

const reviews = [
  {
    name: "NEET",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: img,
  },
  {
    name: "JEE",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: img2,
  },
  {
    name: "CAT",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: img3,
  },
  {
    name: "UPSC",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: img4,
  },
  {
    name: "SSC",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: img5,
  },
  {
    name: "ILTS",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: img6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2 ",
        // light styles
        "border-gray-950/[.1] bg-white shadow-custom-inset ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] "
      )}
    >
      <div className="relative flex w-full object-cover object-center flex-row items-center justify-center">
        <img
          className="h-full w-full object-cover object-center"
          alt="college"
          src={img}
        />
      </div>
    </figure>
  );
};

export function CollegeMarquee() {
  return (
    <div className="relative w-full flex-col overflow-hidden bg-[#243771] z-10 shadow-white shadow-2xl">
      <Marquee className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
