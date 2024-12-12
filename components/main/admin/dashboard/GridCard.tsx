import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface GridCardProps {
  title: string;
  url: string;
  create: string;
}

const GridCard = ({ title, url, create }: GridCardProps) => {
  return (
    <div className="border border-2 rounded-xl opacity-75 hover:opacity-100 bg-gray-200 dark:bg-black-200 min-w-[300px] min-h-[175px] flex-center flex-col justify-evenly">
      <Link
        href={url}
        className="font-circular-web text-2xl h-[50px] w-full text-center"
      >
        {title}
      </Link>
      <Link href={create} className="flex-center w-full h-auto">
        <PlusCircleIcon size={40} />
      </Link>
    </div>
  );
};

export default GridCard;
