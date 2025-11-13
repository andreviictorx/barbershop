import Image from "next/image"

const header = () => {
    return (
        <header className="flex items-center justify-between px-5 py-6"> 
            <Image src='/logo.svg' alt="Aparatus" width={100} height={100}/>
        </header>
    )
}

export default header