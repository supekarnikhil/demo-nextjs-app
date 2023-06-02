import { GetServerSidePropsContext } from "next/types";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const CtaSection = dynamic(() => import("@/components/CtaSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const StatSection = dynamic(() => import("@/components/StatSection"));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"));

type Props = {
    sections: any;
}

const getSectionsComponent = ({ id, __component, ...rest }: any) => {
    let SectionsComponent;

    if (__component === "sections.hero"){
            SectionsComponent = HeroSection;
    }
    if (__component === "sections.pricing"){
            SectionsComponent = PricingSection;
    }
    if (__component === "sections.stats"){
            SectionsComponent = StatSection;
    }
    if (__component === "sections.cta"){
            SectionsComponent = CtaSection;
    }
    if (__component === "sections.testimonials"){
            SectionsComponent = TestimonialSection;
    }
  
    return SectionsComponent ? <SectionsComponent key={`index-${__component}-${id}`} {...rest} /> : null;
  };

export default function Shop({sections}: Props) {
    return (
        <>
            {sections.map(getSectionsComponent)}
        </>
    );
}

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
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
    
    if (result.data.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            sections: result.data[0].attributes.sections
        }
    }
}