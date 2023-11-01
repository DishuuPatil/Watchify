import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
        <Image className="h-26" src="Spinner.svg" alt="loading..." />
    </div>
  )
}
