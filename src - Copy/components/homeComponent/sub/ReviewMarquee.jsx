// import { cn } from "../../lib/utils";
// import Marquee from "../../components/magicui/marquee";
import React from "react";
import Marquee from "../../magicui/marquee";
import { cn } from "../../../lib/utils";

const imagesSmall = [
  "https://media.istockphoto.com/id/1842247191/photo/young-indian-student-woman-wearing-backpack-and-holding-books-over-isolated-green-screen.jpg?s=612x612&w=0&k=20&c=bydzcIMA3m23VyRJ6mXUqHLO7kaZAKxwxklJC-E0WO0=",
  "https://media.istockphoto.com/id/1864864052/photo/cheerful-indian-girl-showing-smart-phone-with-blank-screen-and-victory-gesture.jpg?s=612x612&w=0&k=20&c=xTkZPTJf_2UVxbQKD-HJmvtZwXhMlrGRvk8NMjxQ8Ps=",
  "https://media.istockphoto.com/id/1828874105/photo/young-cheerful-indian-man-outdoor-background.jpg?s=612x612&w=0&k=20&c=60aoWq1qag-ob1PSCwkEG0W5fM9i2_4Oj5i-T49GotA=",
  "https://media.istockphoto.com/id/1486726433/photo/portrait-of-a-smiling-girl-of-indian-ethnicity-holding-a-tablet-phone-in-hand-and-showing.jpg?s=612x612&w=0&k=20&c=tgq4G6MX_jKcmFZuCkyWTYIKH1nIZkO_fO9uVMXdU4k=",
  "https://media.istockphoto.com/id/2052831246/photo/portrait-of-attractive-cheerful-girl-touching-specs-looking-at-camera-copy-space-isolated.jpg?s=612x612&w=0&k=20&c=GvwyGKSP8kZLO-AblIoSJ03HjQQ7bUM5r1qhaRimTDo=",
  "https://media.istockphoto.com/id/1134003578/photo/smiling-woman-wearing-eyeglasses-outdoor.jpg?s=612x612&w=0&k=20&c=obFbEWz4lii-wrWBVVExIRAW0T_-JjQdQICgUkU567M=",
];

const reviews = [
  {
    name: "Shoumya Joshi",
    username: "@jack",
    body: "The NEET Predictor tool was a game changer. It gave me the confidence to apply to the right colleges.",
    img: imagesSmall[0],
  },
  {
    name: "Vidushi Roy",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: imagesSmall[1],
  },
  {
    name: "Harsh Sinha",
    username: "@john",
    body: "The psychometric assessment helped me understand my strengths, and the counseling sessions guided me through the admission process seamlessly.",
    img: imagesSmall[2],
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: imagesSmall[3],
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: imagesSmall[4],
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: imagesSmall[5],
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl p-8 ",
        // light styles
        " bg-white hover:border shadow-2xl shadow-white border"
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-start gap-4 ">
        <div className="h-10 w-10 o object-cover object-center">
          <img
            className="rounded-full h-full w-full object-cover object-center"
            alt=""
            src={img}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm pt-5">{body}</blockquote>
    </figure>
  );
};

export function ReviewMarquee() {
  return (
    <div className="absolute  h-[40%] w-full flex-col overflow-hidden rounded-lg bg-gray-50 z-40 ">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
