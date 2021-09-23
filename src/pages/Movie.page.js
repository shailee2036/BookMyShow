import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_UbSTBmGjwMwIiv",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const  Movie = () => {
return (
<>


<MovieHero />
<button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
  Book tickets
</button>

</>
);
};
export default Movie;
