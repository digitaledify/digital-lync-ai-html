"use client"
import { getEventByLink } from "@/utils/events"
import HeroSection from "@/components/resources/hero-section"
import { notFound, useParams } from "next/navigation"
import AboutSection from "@/components/resources/about-section"
import AudienceSection from "@/components/resources/audience-section"
import BenefitsSection from "@/components/resources/benefits-section"
import FaqSection from "@/components/resources/faq-section"
import HighlightsSection from "@/components/resources/highlights-section"
import JobRolesSection from "@/components/resources/job-roles-section"
import TeamSlider from "@/components/resources/TeamSlider"
import StartNowModal from "@/components/StartNowModal"
import { useState } from "react"

const EventDetailPage = () => {
    const params = useParams();
    const link = params?.link as string;
    const event = getEventByLink(link)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!event) {
        notFound()
    }

    return (
        <div className="event-detail-page bg-[#f7faff]">
            <HeroSection event={event} setIsOpen={setIsOpen} />
            <AboutSection event={event} setIsOpen={setIsOpen} />
            <BenefitsSection event={event} setIsOpen={setIsOpen} />
            <TeamSlider event={event} />
            <AudienceSection event={event}  />
            <HighlightsSection event={event} setIsOpen={setIsOpen} />
            <JobRolesSection event={event} setIsOpen={setIsOpen} />
            <FaqSection event={event} />
            {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default EventDetailPage
