import { Fragment } from "react";

import Footer from "../components/Footer.jsx";
import EmailForm from "../components/EmailForm.jsx";

const About = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-2">About</h1>
            <EmailForm />
            <Footer />
        </Fragment>
        
    );
};

export default About;