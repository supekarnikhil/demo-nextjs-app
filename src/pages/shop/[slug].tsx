import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const CtaSection = dynamic(() => import("@/components/CtaSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const StatSection = dynamic(() => import("@/components/StatSection"));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"));

const getSectionsComponent = ({ id, __component, ...rest }:any) => {
    let Sections;

    if (__component === "sections.hero"){
            Sections = HeroSection;
    }
    if (__component === "sections.pricing"){
            Sections = PricingSection;
    }
    if (__component === "sections.stats"){
            Sections = StatSection;
    }
    if (__component === "sections.cta"){
            Sections = CtaSection;
    }
    if (__component === "sections.testimonials"){
            Sections = TestimonialSection;
    }
  
    return Sections ? <Sections key={`index-${id}`} {...rest} /> : null;
  };

export default function Shop({sections}: any) {
    return (
        <>
            {sections.map(getSectionsComponent)}
        </>
    );
}

export const getServerSideProps = async (ctx:any) => {
    const slug = ctx.query.slug;
    const res = await fetch(
        `${process.env.CMS_BASE_URL}/api/shops?filters[slug]=${slug}&populate=deep`,
        {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + process.env.CMS_TOKEN
            }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const result = await res.json();
    return {
        props: {
            sections: result.data[0].attributes.sections
        }
    }
}