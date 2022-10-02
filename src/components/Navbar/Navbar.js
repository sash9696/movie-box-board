import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ showSignInButton, logOut }) {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  console.log(user);
  const goToSignInPage = () => {
    loginWithRedirect();
  };

  const goToLandingPage = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div className="navbar_container">
      <img
        className="navbar_logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAB2CAMAAADle2GlAAAAaVBMVEX39/cAAAD////6+vqnp6fb29teXl5jY2OioqJ6enrj4+O/v78VFRVaWlre3t6ysrIpKSlzc3O5ubnFxcVSUlI3NzeJiYmCgoJISEgbGxvr6+shISFNTU08PDxra2uTk5PQ0NAwMDALCwsRZmvyAAAEbUlEQVR4nO2ZiW6rOhBAmbHBmCUGzGq2kP//yDuQNCHdoyeg0vNR3WLHEUfex3Uci8VisVgsFovFYrFYNofhzNEWn8Pw5Fdy1A6yo1U+wFAVADBRKoO/1n7MDORVGUc3AIn+W3rMiUnuMg87nx7gb+mhgDptaj/uqxFyD8D9Q2MPNVS6jGChNex8yf9K4zFaSGKo1Ag3YgdHOB/YeMvKxq5PQVbGEKMDd0bMKB3mxk68qnjAkBldVaHRAAF/2BU0DL2j2g5dAZDSCiJVVSqDbJ6nffewa+iz/iA76rZ5yTDp8meWmO2a6WF3KQ6zYy60U6OGREZTA4bdfPX4sJucHvInO7aba56iWSQixuKBXYU7DB52FYbPswLdfJ8FkJ3h5NRXC2/OLG/teoblvWP9sYbB3HWYQz0f7jKHaYydszcPesrmtyKnt7MU1nTm7RsmX1aZXezS1fSME3rrvBpjAWlZP9mBv/gwvC418V52010jLmA0bjjGRQMf6JZWNd5tpuwy7miT0urePAMUxUevK9G8n2TJLdeaPfSWWdF/ZfSE8ofLI7fTxptXjvsru2f4Pl17hjpu5ct2Ox0LaKmljeplu3in7QLP+ctutEbvY8dogdPV63o7TdqAzkzmdTu9hx2qyD9l1eVnnXf4e0wLFvws8kYjRn5f8+Q+k3Z5V/QLuQHnLdg5+cM8xeNd5LAGod3xRzeA/PoFUjRnv+6DXQaeFPS+8y/spocPe4vhtoaFtDaw30zaZJfWeq83/8Lf9OxhETd2P8olp+Psym/Npi7lu2wOX9ipb+30sVe07NtJGx3XqVfMl0d2oj+wVxcw+8ZuOPxyEU1ZqsB/59Xm6RgedK3N1lz/OzHdvaauVGfjLFd7X7KhnDm57mmdXDdYNtxLV/mha4LgdCt+V+teFGwnhz7EQwLCayYhoBcddKIGTxSRNyTT4EEh8qWIal2EaFvhXQoRQ01FuZhgEI3Y0i4ymEbI8goROGpa1hTQwlw7WAg07YgunCkqCjAtEPMYnWTEE9UK4YQlhd/C29IOuO5AqykOQ5B6hJECjCwUidJNrxWkmoMfjnOtNgunXmfNXDTqEnztgQ7rbe2GVMr0mtKUttpifkzfiugYnK6ykmK3RKa3GnNKtu7ZFWq+SFxD8/epggbwnioMm7ZdtD6xzXdfT8ECJgDrCix8dzPGth13r9mhtbN21s7aWTtrZ+1esTOrkOFqtw40kvmMssovZ5R1hY1Pn77KMnVNKpMA+T1LKWwAuJo/uhVVFNlmc/ataOvTp0xAptGUSuikB6LqIJXFhbKtHKCrBhAyXmqlMmorGdVUHNMxVMgCpNz29NkYlA1FDCXFFQrPSxCBONY4xxVO62NAAcSZulf2VItOnomPhmppCjXGaOvTJ4y8B+63NecgeAUVT8HneeTzS8F98HgJpZJUq75w3k6KilQJks9FHXA+bXh5zFxOqOXnffqs6JPicMNwm+F/Zjs5i8VisVgsFovFYrFYLJb/Mf8A0EBKBHt1HqQAAAAASUVORK5CYII="
        alt="logo"
      />

      {showSignInButton === false ? (
        <>
          <h4 className="user_name"> Hi {user.name} </h4>
          <button onClick={goToLandingPage} className="navbar_button">
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={goToSignInPage} className="navbar_button">
          Sign In
        </button>
      )}
    </div>
  );
}
