import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

function Layout({ children }) {
    return (
        <>
            {/* <!-- dar mode toggler --> */}

            <input type="checkbox" id="darkMode" />
            <div className="wrapper">
                <label htmlFor="darkMode">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </label>
                {/* <!-- navbar --> */}
                <Navbar />
                <main className="main">{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
