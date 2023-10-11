import { Signal, useSignal } from "@preact/signals";
import Button from "../Button";
import Typography from "../Typography";
import FileUploadPopup from "../Popup/FileUploadPopup";
import { useRef } from "preact/hooks";
import { ChangeEvent } from "preact/compat";
import { customerUploadFile } from "@/api/user/upload";

type TProfileImageEdit = {
  isProfileImageEdit: Signal<boolean>;
};

const ProfileImageEdit = ({ isProfileImageEdit }: TProfileImageEdit) => {
  const selectedFile = useSignal<File | null>(null);
  const uploadPopup = useSignal<boolean>(false);
  const uploadFormRef = useRef<HTMLFormElement>(null);
  const errorMessage = useSignal<string | null>(null);

  const handleUpload = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Content-Type", "fileType");
    formData.append("file", selectedFile.value);
    try {
      const respose = await customerUploadFile();
      const res = await fetch(`${respose.url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
    } catch (error) {}
  };

  return (
    <div>
      <div
        className={`fixed left-0 bottom-16 z-10  w-full bg-secondray border transition-all shadow-lg ${
          isProfileImageEdit.value ? "translate-y-0" : "translate-y-full"
        } `}
      >
        <div className="flex flex-col relative p-4 gap-2 ">
          <Button
            type="button"
            variant="icon"
            className="absolute top-0 right-0 gap-2 !items-center"
            onClick={() => (isProfileImageEdit.value = false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Button>
          <Typography size="h6/semi-bold">Profile Photo</Typography>
          <div className=" w-full flex justify-around items-center gap-4">
            <Button
              type="button"
              variant="icon"
              className=" flex-col gap-2 !items-center"
              onClick={() => {
                (uploadPopup.value = true), (isProfileImageEdit.value = false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Upload
            </Button>
            <Button
              type="button"
              variant="icon"
              className="!text-danger-600 flex-col  gap-2 !items-center"
              // onClick={() => (thumbnail.value = null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <FileUploadPopup
        isPopup={uploadPopup}
        selectedFile={selectedFile}
        formRef={uploadFormRef}
        actionText="Upload"
        acceptFileType="image/png, image/jpeg"
        errorMessage={errorMessage}
        handlePopupAction={handleUpload}
      />
    </div>
  );
};

export default ProfileImageEdit;