

// Common Css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/order_section.css";
import "../styles/common_component.css";


import "../styles/landing-17/landing_seventeen.css";



function MyApp({ Component, pageProps }) {
  return (
    <>
     
      {/* <SSRProvider> */}
          <Component {...pageProps} />
      {/* </SSRProvider> */}
    </>
  );
}

export default MyApp;
