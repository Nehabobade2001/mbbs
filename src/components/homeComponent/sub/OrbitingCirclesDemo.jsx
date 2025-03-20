// import OrbitingCircles from "../../components/magicui/orbiting-circles";
import React from "react";
import OrbitingCircles from "../../magicui/orbiting-circles";

const images = [
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
  "https://media.istockphoto.com/id/1134001966/photo/happy-young-woman-smiling.jpg?s=612x612&w=0&k=20&c=twa6A6YS_QwaPZd0HAz-ApnQSdU00Pfinfhx_s3J1b4=",
  "https://media.istockphoto.com/id/498847043/photo/portrait-of-young-woman-at-outdoors.jpg?s=612x612&w=0&k=20&c=xre1it2-MCZkwla6R5gNitGJeQFXn-y_GkxLR_EHFcc=",
  "https://media.istockphoto.com/id/1185766243/photo/portrait-of-a-teenager-girl-in-an-avenue.jpg?s=612x612&w=0&k=20&c=m4tXoAdzkAFLZggXDNO6aZ9ymz8jYU_OJQQ8WDjbPe0=",
  "https://media.istockphoto.com/id/1361279823/photo/smiling-young-man-of-indian-origin-holding-a-laptop-shows-thumbs-up-gesture.jpg?s=612x612&w=0&k=20&c=IX-y6PsxcA09pfOQ1ZwbXYGAB0ClmIMaWOZqCUE20q4=",
  "https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=612x612&w=0&k=20&c=aQw5YhGl99hL1O77thwpQTmqVE7bc8rCX9H0gTeoX_k=",
  "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
  "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs=",
  "https://media.istockphoto.com/id/1798593742/photo/portrait-of-smiling-female-student-dressed-in-hijab-holding-book-while-standing-over-gray.jpg?s=612x612&w=0&k=20&c=DRSX75VloCjJfsIcDgFXbPFhVYk52SoZGkqFU3el6jw=",
  "https://media.istockphoto.com/id/1837264454/photo/photo-of-pretty-girl-using-laptop-on-wooden-floor-stock-photo.jpg?s=612x612&w=0&k=20&c=SKlVzdU-TN52iGfPoUeYM-ob4C5vnFeqgAAupVyhJGA=",
  "https://media.istockphoto.com/id/1355790481/photo/portrait-of-a-smiling-young-boy-of-indian-ethnicity-holding-a-tablet-phone-in-hand.jpg?s=612x612&w=0&k=20&c=yZctp1CGmFfsa6RnMsS8Bt-N312GilKLqPOVi9u_bDY=",
  "https://media.istockphoto.com/id/1147289240/photo/portrait-of-a-smiling-student-at-the-city-street.jpg?s=612x612&w=0&k=20&c=9-L5boel1w6eQZsZJDXjXpLMTkCopgSue6vycZzP3r4=",
  "https://media.istockphoto.com/id/485696132/photo/casual-woman-portrait-wearing-glasses.jpg?s=612x612&w=0&k=20&c=B7morikqtrIA7f_oQRBDUYpqW_v7lieO9YbLIOmdAZA=",
  "https://media.istockphoto.com/id/696198644/photo/young-man-with-a-winning-gesture.jpg?s=612x612&w=0&k=20&c=0dl3F1xpmLe7lYZivaQF_cFK5MifTZsxE5RkO-PuL2I=",
  "https://media.istockphoto.com/id/2157016242/photo/happy-college-student-boy-with-backpack-posing-at-university-campus.jpg?s=612x612&w=0&k=20&c=Oa9b4wmRqwzeQIhwMLsjQJxL1LKADdyJ70mazw3fJ4o=",
  "https://media.istockphoto.com/id/2161610292/photo/portrait-of-young-woman-wear-trendy-smart-casual-outfit-isolated-on-white-background-stock.jpg?s=612x612&w=0&k=20&c=A-zMfaS1T8_z7QrvHRechq-IV87VNCBlqOY4N00zUqk=",
  "https://media.istockphoto.com/id/2159129658/photo/smiling-young-indian-man-student-in-casual-attire-looking-at-camera-against-red-studio.jpg?s=612x612&w=0&k=20&c=ZHexmo0KWnuZhj-9X-wET5GTDEs4umJ5BzItjqglZTA=",
  "https://media.istockphoto.com/id/2154546065/photo/young-student-girl-with-notepad-giving-expressions-smiling-pointing-sad-happy-etc.jpg?s=612x612&w=0&k=20&c=eknaXaZt_KDUmjA4PjV4NMcaLtDYePqn9BRAwdzW9sU=",
  "https://media.istockphoto.com/id/2111533052/photo/young-woman-taking-selfie-portrait-pov-shot-of-a-beautiful-asian-indian-girl-taking-her.jpg?s=612x612&w=0&k=20&c=L_7OK-3OMA4SWsujH4-b-jTZwX_k5dgZJwytqalPF0k=",
  "https://media.istockphoto.com/id/1842247191/photo/young-indian-student-woman-wearing-backpack-and-holding-books-over-isolated-green-screen.jpg?s=612x612&w=0&k=20&c=bydzcIMA3m23VyRJ6mXUqHLO7kaZAKxwxklJC-E0WO0=",
  "https://media.istockphoto.com/id/1864864052/photo/cheerful-indian-girl-showing-smart-phone-with-blank-screen-and-victory-gesture.jpg?s=612x612&w=0&k=20&c=xTkZPTJf_2UVxbQKD-HJmvtZwXhMlrGRvk8NMjxQ8Ps=",
  "https://media.istockphoto.com/id/1828874105/photo/young-cheerful-indian-man-outdoor-background.jpg?s=612x612&w=0&k=20&c=60aoWq1qag-ob1PSCwkEG0W5fM9i2_4Oj5i-T49GotA=",
  "https://media.istockphoto.com/id/1486726433/photo/portrait-of-a-smiling-girl-of-indian-ethnicity-holding-a-tablet-phone-in-hand-and-showing.jpg?s=612x612&w=0&k=20&c=tgq4G6MX_jKcmFZuCkyWTYIKH1nIZkO_fO9uVMXdU4k=",
  "https://media.istockphoto.com/id/2052831246/photo/portrait-of-attractive-cheerful-girl-touching-specs-looking-at-camera-copy-space-isolated.jpg?s=612x612&w=0&k=20&c=GvwyGKSP8kZLO-AblIoSJ03HjQQ7bUM5r1qhaRimTDo=",
  "https://media.istockphoto.com/id/1134003578/photo/smiling-woman-wearing-eyeglasses-outdoor.jpg?s=612x612&w=0&k=20&c=obFbEWz4lii-wrWBVVExIRAW0T_-JjQdQICgUkU567M=",
  "https://media.istockphoto.com/id/1582437741/photo/photo-of-a-beautiful-indian-girl-student-holding-a-book-and-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=TNHp7sO0-os4laxDIlQ0HvVDDEylZOwNbtS_rPPp3rY=",
  "https://media.istockphoto.com/id/1761651907/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=612x612&w=0&k=20&c=r8Irxa_UBoux5qhQ5SzeAIBxJ7bpRX2nRSjxePWF7QI=",
  "https://media.istockphoto.com/id/1532786768/photo/happy-girl-of-indian-ethnicity-holding-a-tablet-computer-in-hand.jpg?s=612x612&w=0&k=20&c=0InwcfonUjkJvMprxVkCB3qKCeTUBZa2SMBfGGe8wY8=",
  "https://media.istockphoto.com/id/1278547903/photo/smiling-young-man-of-indian-origin-holding-a-laptop-in-his-hand.jpg?s=612x612&w=0&k=20&c=nlens2PQoA2iHuelANPjfHzH-U7MFTa05tadzuR2OfM=",
  "https://media.istockphoto.com/id/1129847339/photo/teeanger-girl-stock-images.jpg?s=612x612&w=0&k=20&c=17k96gF36mkDsQhQxyISfVYV5T5fsF-mAJYwGJem6fk=",
  "https://media.istockphoto.com/id/488153142/photo/happy-guy.jpg?s=612x612&w=0&k=20&c=FDhJ90bUyuhLmfpTnK0H_mZZSx6hkCAWVn3DymNdt0o=",
  "https://media.istockphoto.com/id/1363289812/photo/headshot-of-16-year-old-schoolgirl-standing-outdoors.jpg?s=612x612&w=0&k=20&c=FwlspSsqfE0hfKBSuyA1vPQtY4Lj7TrCkvpaVE_tB90=",
  "https://media.istockphoto.com/id/871471058/photo/portrait-of-good-looking-asian-man-over-gray-background.jpg?s=612x612&w=0&k=20&c=kD1IPzwIQpFtcckvrakun1kFDFmbMW7vdVRTM-JWm-8=",
  "https://media.istockphoto.com/id/480641163/photo/young-indian-student-holding-books-indoors.jpg?s=612x612&w=0&k=20&c=942mn_7rqt-waHVQQE505jUaUKkTAzS6LmRpG16SO0I=",
  "https://media.istockphoto.com/id/1262283573/photo/happy-young-indian-teen-girl-woman-wearing-headphones-looking-at-camera-studying-listening.jpg?s=612x612&w=0&k=20&c=e3xcanPddBXTy-BK77ldZkaXgZe-Sg9IeyQZ-6MHNlU=",
  "https://media.istockphoto.com/id/1020086216/photo/portrait-of-a-young-smiling-nurse-with-copyspace.jpg?s=612x612&w=0&k=20&c=wQyg2lDhXeMGcesBnFTVrfVnm8F8m-U2Lo5LSUbJ2yA=",
  "https://media.istockphoto.com/id/1047871786/photo/young-man-with-laptop-on-color-background-studio-portrait.jpg?s=612x612&w=0&k=20&c=El_ZabwZM2HlBpU_yptFgol90uEIHRJOdYEM4dVmjRY=",
  "https://media.istockphoto.com/id/844091508/photo/happy-young-attractive-smiling-woman-scientist-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=VVjRZ0HMcIovFJVLt8TgbwQYvWN5JCv8sd_TRSLzAB0=",
  "https://media.istockphoto.com/id/1160297742/photo/smiling-happy-indian-young-woman-college-university-school-student-wear-glasses-holding-book.jpg?s=612x612&w=0&k=20&c=2v9fHAztFFKKI3s6cK-TEK1-RjLPzN4dYyQO3cZlXnA=",
  "https://media.istockphoto.com/id/1034373588/photo/portrait-of-a-beautiful-teen-with-perfect-smile.jpg?s=612x612&w=0&k=20&c=AebKum-QIQ9wgo4tVpNh7NzZDYSbZbDqXZzrKNBCIiM=",
];
const imagesSmall = [
  "https://media.istockphoto.com/id/1842247191/photo/young-indian-student-woman-wearing-backpack-and-holding-books-over-isolated-green-screen.jpg?s=612x612&w=0&k=20&c=bydzcIMA3m23VyRJ6mXUqHLO7kaZAKxwxklJC-E0WO0=",
  "https://media.istockphoto.com/id/1864864052/photo/cheerful-indian-girl-showing-smart-phone-with-blank-screen-and-victory-gesture.jpg?s=612x612&w=0&k=20&c=xTkZPTJf_2UVxbQKD-HJmvtZwXhMlrGRvk8NMjxQ8Ps=",
  "https://media.istockphoto.com/id/1828874105/photo/young-cheerful-indian-man-outdoor-background.jpg?s=612x612&w=0&k=20&c=60aoWq1qag-ob1PSCwkEG0W5fM9i2_4Oj5i-T49GotA=",
  "https://media.istockphoto.com/id/1486726433/photo/portrait-of-a-smiling-girl-of-indian-ethnicity-holding-a-tablet-phone-in-hand-and-showing.jpg?s=612x612&w=0&k=20&c=tgq4G6MX_jKcmFZuCkyWTYIKH1nIZkO_fO9uVMXdU4k=",
  "https://media.istockphoto.com/id/2052831246/photo/portrait-of-attractive-cheerful-girl-touching-specs-looking-at-camera-copy-space-isolated.jpg?s=612x612&w=0&k=20&c=GvwyGKSP8kZLO-AblIoSJ03HjQQ7bUM5r1qhaRimTDo=",
  "https://media.istockphoto.com/id/1134003578/photo/smiling-woman-wearing-eyeglasses-outdoor.jpg?s=612x612&w=0&k=20&c=obFbEWz4lii-wrWBVVExIRAW0T_-JjQdQICgUkU567M=",
  "https://media.istockphoto.com/id/1582437741/photo/photo-of-a-beautiful-indian-girl-student-holding-a-book-and-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=TNHp7sO0-os4laxDIlQ0HvVDDEylZOwNbtS_rPPp3rY=",
  "https://media.istockphoto.com/id/1761651907/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=612x612&w=0&k=20&c=r8Irxa_UBoux5qhQ5SzeAIBxJ7bpRX2nRSjxePWF7QI=",
  "https://media.istockphoto.com/id/1532786768/photo/happy-girl-of-indian-ethnicity-holding-a-tablet-computer-in-hand.jpg?s=612x612&w=0&k=20&c=0InwcfonUjkJvMprxVkCB3qKCeTUBZa2SMBfGGe8wY8=",
  "https://media.istockphoto.com/id/1278547903/photo/smiling-young-man-of-indian-origin-holding-a-laptop-in-his-hand.jpg?s=612x612&w=0&k=20&c=nlens2PQoA2iHuelANPjfHzH-U7MFTa05tadzuR2OfM=",
  "https://media.istockphoto.com/id/1129847339/photo/teeanger-girl-stock-images.jpg?s=612x612&w=0&k=20&c=17k96gF36mkDsQhQxyISfVYV5T5fsF-mAJYwGJem6fk=",
  "https://media.istockphoto.com/id/488153142/photo/happy-guy.jpg?s=612x612&w=0&k=20&c=FDhJ90bUyuhLmfpTnK0H_mZZSx6hkCAWVn3DymNdt0o=",
  "https://media.istockphoto.com/id/1363289812/photo/headshot-of-16-year-old-schoolgirl-standing-outdoors.jpg?s=612x612&w=0&k=20&c=FwlspSsqfE0hfKBSuyA1vPQtY4Lj7TrCkvpaVE_tB90=",
  "https://media.istockphoto.com/id/871471058/photo/portrait-of-good-looking-asian-man-over-gray-background.jpg?s=612x612&w=0&k=20&c=kD1IPzwIQpFtcckvrakun1kFDFmbMW7vdVRTM-JWm-8=",
  "https://media.istockphoto.com/id/480641163/photo/young-indian-student-holding-books-indoors.jpg?s=612x612&w=0&k=20&c=942mn_7rqt-waHVQQE505jUaUKkTAzS6LmRpG16SO0I=",
  "https://media.istockphoto.com/id/1262283573/photo/happy-young-indian-teen-girl-woman-wearing-headphones-looking-at-camera-studying-listening.jpg?s=612x612&w=0&k=20&c=e3xcanPddBXTy-BK77ldZkaXgZe-Sg9IeyQZ-6MHNlU=",
  "https://media.istockphoto.com/id/1020086216/photo/portrait-of-a-young-smiling-nurse-with-copyspace.jpg?s=612x612&w=0&k=20&c=wQyg2lDhXeMGcesBnFTVrfVnm8F8m-U2Lo5LSUbJ2yA=",
  "https://media.istockphoto.com/id/1047871786/photo/young-man-with-laptop-on-color-background-studio-portrait.jpg?s=612x612&w=0&k=20&c=El_ZabwZM2HlBpU_yptFgol90uEIHRJOdYEM4dVmjRY=",
  "https://media.istockphoto.com/id/844091508/photo/happy-young-attractive-smiling-woman-scientist-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=VVjRZ0HMcIovFJVLt8TgbwQYvWN5JCv8sd_TRSLzAB0=",
  "https://media.istockphoto.com/id/1160297742/photo/smiling-happy-indian-young-woman-college-university-school-student-wear-glasses-holding-book.jpg?s=612x612&w=0&k=20&c=2v9fHAztFFKKI3s6cK-TEK1-RjLPzN4dYyQO3cZlXnA=",
  "https://media.istockphoto.com/id/1034373588/photo/portrait-of-a-beautiful-teen-with-perfect-smile.jpg?s=612x612&w=0&k=20&c=AebKum-QIQ9wgo4tVpNh7NzZDYSbZbDqXZzrKNBCIiM=",
];
const delays = [];
let value = 70;

while (value >= 0) {
  delays.push(value);
  value -= 1.5;
}

const delaySmall = [];
let valSmall = 70;

while (valSmall >= 0) {
  delaySmall.push(valSmall);
  valSmall -= 3;
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[50%] w-full flex-col items-center justify-center overflow-visible rounded-lg z-0">
      {images.map((image, index) => {
        const isReverse = index % 2 === 0;
        const radius = isReverse ? 290 : 380;
        const halfImageClass = isReverse
          ? "w-[100%] h-[100%]"
          : "w-full h-full";

        return (
          <OrbitingCircles
            key={index}
            className={`${
              isReverse ? "size-[50px]" : "size-[60px]"
            } border-none bg-transparent`}
            radius={radius}
            duration={60}
            delay={delays[index]}
            reverse={isReverse}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              loading="lazy"
              className={`${halfImageClass} object-cover rounded-full shadow-xl`}
            />
          </OrbitingCircles>
        );
      })}

      {imagesSmall.map((image, index) => {
        const halfImageClass =
          index % 2 === 0 ? "w-[100%] h-[100%]" : "w-full h-full";

        return (
          <OrbitingCircles
            key={index}
            className={`size-[35px] border-none bg-transparent`}
            radius={200}
            duration={60}
            delay={delaySmall[index]}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              loading="lazy"
              className={`${halfImageClass} object-cover rounded-full shadow-xl`}
            />
          </OrbitingCircles>
        );
      })}
    </div>
  );
}
