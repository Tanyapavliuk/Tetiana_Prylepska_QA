import { red_rose } from "@/app/fonts";

export const SectionTitle = ({main=false ,children, className, isLine=true}) => {
    return <h2 className={`text-white-light inline-flex uppercase text-3xl lg:text-5xl font-light ${isLine && 'border-b border-green'}  ${main? 'pb-8 lg:pb-12' :' pb-5 lg:pb-8'} ${red_rose.className} ${className}`}>{children}</h2>;
}