import ImageCloud from "./ImageCloud";

const profileImageUrls = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
];

export default function ProfileImageCloud() {
  return (
    <div>
      <h1>User Profile Image Cloud</h1>
      <ImageCloud imageUrls={profileImageUrls} />
    </div>
  );
}
