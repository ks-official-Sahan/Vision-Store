"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminRoutes } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MediaPage = () => {
  const router = useRouter();

  const [fetchedMedia, setFetchedMedia] = useState<any>([]);
  const [media, setMedia] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMedia(fetchedMedia);
  }, [fetchedMedia]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setIsLoading(true);
      // const result = await adminFetchMedia();
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      setFetchedMedia([
        {
          id: "MED001",
          fileName: "Laptop",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9zTsUw9GLhneuaoFGKsx3WAzZc9qE1SK_w&s",
          alt: "<No Alt>",
          caption: "<No Caption>",
        },
        {
          id: "MED002",
          fileName: "PC",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9zTsUw9GLhneuaoFGKsx3WAzZc9qE1SK_w&s",
          alt: "<No Alt>",
          caption: "<No Caption>",
        },
      ]);
      //   } else if (result.status === RESULT.success) {
      //     router.replace(adminRoutes.MEDIA.path);
      //   }
    } catch (error: Error | any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    if (text === "") return setMedia([...fetchedMedia]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredMedia = fetchedMedia.filter(
      (category: any) =>
        category.id.toLowerCase().includes(normalizedSearchValue) ||
        category.title.toLowerCase().includes(normalizedSearchValue) ||
        category.parent.includes(normalizedSearchValue)
    );

    setMedia([...filteredMedia]);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <PathNav
        data={[
          {
            path: adminRoutes.MEDIA.path,
            title: adminRoutes.MEDIA.title,
          },
        ]}
      />

      <header className="mb-6 flex items-center justify-between pb-2 border-b-1">
        <h1 className="text-xl font-robert-medium">
          {adminRoutes.MEDIA.title}
        </h1>
        <CustomButton
          title="Create New"
          variant="solid"
          className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
          textStyle=" text-white dark:text-black"
          handlePress={() => {
            router.push(`${adminRoutes.CREATE_MEDIA.path}`);
          }}
        />
      </header>

      <section className="px-2">
        <article className="flex mb-5">
          <input
            type="text"
            placeholder={`Search ${adminRoutes.MEDIA.title}`}
            className="flex-1 rounded-xl border-2 h-12 px-4 mb-3 outline-none focus:border-blue-400 text-gray-700 dark:text-gray-300"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </article>

        <Table>
          <TableCaption>
            A list of current {adminRoutes.MEDIA.title}.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Alt</TableHead>
              <TableHead className="text-right">Caption</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {media.map((media: any) => (
              <TableRow key={media.id} className="h-12">
                <TableCell className="font-medium">{media.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-6 p-2">
                    <Image
                      alt={media.alt}
                      src={media.src}
                      width={100}
                      height={100}
                    />
                    {media.fileName}
                  </div>
                </TableCell>
                <TableCell>{media.alt}</TableCell>
                <TableCell className="text-right">{media.caption}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{media.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default MediaPage;
