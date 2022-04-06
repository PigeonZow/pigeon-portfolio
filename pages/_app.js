import '../styles/globals.css'
import dynamic from "next/dynamic";

// if (typeof window !== "undefined") {
//   // animation functions onload
//   document.addEventListener("DOMContentLoaded", function() {
//     // add fade-ins
//     let replacers = document.querySelectorAll('.fade-in');
//     console.log(replacers.length)
//     if (replacers.length > 0) {
//       for (const replacement in replacers) {
//         console.log("testing")
//         replacement.classList.remove('opacity-0');
//         replacement.classList.add('opacity-100');
//       }
//     }
//     // add translates rising up
//   });
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
