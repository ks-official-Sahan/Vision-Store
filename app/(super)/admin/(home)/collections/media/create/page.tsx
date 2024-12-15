"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import MediaSelector from "@/components/main/MediaSelector";
import SelectField from "@/components/main/SelectField";
import WrapperBody from "@/components/wrapper/WrapperBody";
import { adminRoutes } from "@/data";
import {
  validateAvailability,
  validateFiles,
} from "@/lib/actions/validations/validate";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MediaCreate = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState<any | object>({
    media: "",
    alt: "",
    caption: "",
    errors: {
      media: null,
      alt: null,
      caption: null,
    },
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    setForm({
      ...form,
      media: files,
      alt: form.alt ? form.alt : files[0].name.substring(0, 20),
    });
    console.log(files);
  };

  const validateInputData = () => {
    // Validation of required data
    const errors = {
      alt: validateAvailability(form.alt),
      media: validateFiles(form.media),
    };

    // Update validation results
    if (errors.alt || errors.media) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleCreateMedia = async () => {
    const isValid = validateInputData();
    if (!isValid) return;

    try {
      setIsLoading(true);
      console.log(form);
      // const result = await adminCreateMedia(form);
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.success) {
      router.back();
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh w-full">
      <Loading isLoading={isLoading} />

      <PathNav
        data={[
          {
            path: adminRoutes.MEDIA.path,
            name: adminRoutes.MEDIA.title,
          },
          {
            path: adminRoutes.CREATE_MEDIA.path,
            name: adminRoutes.CREATE_MEDIA.title,
          },
        ]}
      />

      <header className="mb-7">
        <h1 className="text-4xl font-bold mt-5 mb-5 font-robert-medium dark:text-white">
          {form.alt ? form.alt : "[Untitled]"}
        </h1>
        <hr className="mb-5" />
        <div className="flex justify-between items-center">
          <p className="text-md fontbold text-gray-600 dark:text-gray-300">
            Creating new Media
          </p>
          <CustomButton
            title="Create"
            variant="solid"
            className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
            textStyle=" text-white dark:text-black"
            handlePress={() => {
              handleCreateMedia();
              // router.push(adminRoutes.MEDIA.path);
            }}
          />
        </div>
        <hr className="mt-5" />
      </header>

      {/* Form */}
      <div className="w-full min-h-[300px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 border-b-2">
        <section className="col-span-3 md:col-span-2 sm:col-span-1 flex flex-col min-w-[300px] flex-1 w-full gap-5 lg:pe-3 py-3">
          <InputField
            title="Alt"
            value={form.alt}
            handleTextChange={(t) =>
              setForm({
                ...form,
                alt: t,
                errors: { ...form.errors, alt: null },
              })
            }
            required
            error={form.errors.alt}
          />

          <MediaSelector
            title="Media"
            handleFileUpload={handleFileUpload}
            files={files}
            newFile
            required
            error={form.errors.media}
          />

          <InputField
            title="Caption"
            value={form.caption}
            handleTextChange={(t) =>
              setForm({
                ...form,
                caption: t,
                errors: { ...form.errors, caption: null },
              })
            }
            error={form.errors.caption}
          />
        </section>
      </div>
    </div>
  );
};

export default MediaCreate;
