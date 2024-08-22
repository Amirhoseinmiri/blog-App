
import Image from "next/image";
import {assets} from "@/assets/assets";

const Footer = () => {
    return <div className={"flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center"}>
        <Image src={assets.logo_light} alt={"logo"} width={120}/>
        <p className="text-sm text-gray-200">All right reserved. Copyright @blogger</p>
        <div className={"flex"}>
            <Image alt={""} src={assets.facebook_icon}/>
            <Image alt={""} src={assets.twitter_icon }/>
            <Image alt={""} src={assets.googleplus_icon}/>
        </div>

    </div>
}
export default Footer