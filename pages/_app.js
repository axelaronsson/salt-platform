import '../styles/globals.css';

const getCookie = key => {
  if (process.browser) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}
}
function MyApp({ Component, pageProps }) {
  const userToken = getCookie('token');
  return <Component userToken={userToken}  {...pageProps} />
}

export default MyApp
