const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-[#332F2F] text-white footer footer-center p-10 rounded">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                ></svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                ></svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                ></svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © 2024 - All right reserved by Muhammad Hilman
              Firmansyah
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
