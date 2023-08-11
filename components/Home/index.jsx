import DetailSection from "./sections/DetailSection"
import DonationSection from "./sections/DonationSection"
import Footer from "./sections/Footer"
import HeroSection from "./sections/HeroSection"
import PlanSection from "./sections/PlanSection"
import UpdateSection from "./sections/UdateSection"

const Home = () => {
    return (
        <>
            <HeroSection/>
            <DonationSection/>
            <PlanSection/>
            <DetailSection/>
            <UpdateSection/>
            <Footer />
        </>
    )
}

export default Home

