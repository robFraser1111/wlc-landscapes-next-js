import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-01.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServiceDecking from "../public/service-decking-01.jpg";
import ServiceLandscaping from "../public/service-landscaping-01.jpg";
import ServicePaving from "../public/service-paving-01.jpg";
import ServicePoolFencing from "../public/service-pool-fencing-01.jpg";

export default function Paving() {

    const images = [ServiceDecking, ServiceLandscaping, ServicePaving, ServicePoolFencing];
    

    return (
        <div className={"container"}>

            <Head>
                <title>WLC Landscapes</title>
                <meta name="description" content="Melbourne Paving" />
            </Head>

            <Header bg={ Hero } title={"Paving"} />

            <main>

                <ServiceOverview 
                    serviceOverview={`We offer the best service and the highest quality materials and workmanship to achieve the landscape you desire. \n Whether it be for poolside paving, entertainment areas, driveways, or gardens big or small. We can work wonders with any material, whether it's concrete, bluestone, granite, sandstone, slate, limestone or bricks we create versatile styles from contemporary, natural, or something completely unique to you!`} 
                    serviceIncludes={
                        [
                            "Pool areas", 
                            "Patios", 
                            "Driveways", 
                            "Paths", 
                            "Garden edges"
                        ]
                    }
                />

                <Gallery images={images}/>

                {/* <h2 id={"contact"} className={"sub-heading"}>Request a free quote</h2>

                <ContactForm /> */}

            </main>
            
            <Footer />

        </div>
    );

}