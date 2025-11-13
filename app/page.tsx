import Image from "next/image";
import Header from "./_components/Header";
import SearchInput from "./_components/Search-Input";
import banner from '../public/banner.png'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="px-5 space-y-16">
         <SearchInput/>
         <Image
            src={banner}
            alt="Agende agora"
            sizes="100vw"
            className="h-auto w-full"
         />
        </div>
    </div>
  );
}