import { useState } from "react";
import uploadIcon from "../../../../assets/uploadIcon.svg";
import uploadPic from "../../../../assets/uploadPic.svg";
import trash from "../../../../assets/trash.svg";
import upLoadProduct from "../../../../assets/upLoadProduct.svg";

function FileUpload() {
  const [upLoadedFiles, setUploadedFiles] = useState([]);

  const simulateUploadProgress = (fileIndex) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        if (updatedFiles[fileIndex]) {
          updatedFiles[fileIndex].progress = progress;
        }
        return updatedFiles;
      });
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 300); // Simulate upload progress every 300ms
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files
      .map((file) => {
        if (file.type.startsWith("image/")) {
          return {
            name: file.name,
            size: (file.size / 1024).toFixed(2), // size in KB
            src: URL.createObjectURL(file), // Create object URL for image preview
            progress: 0,
          };
        } else {
          alert("Only image files are allowed");
          return null;
        }
      })
      .filter((file) => file !== null); // Filter out null values

    setUploadedFiles((prevFiles) => {
      const updateFiles = prevFiles ? [...prevFiles, ...newFiles] : newFiles;
      return updateFiles;
    });

    newFiles.forEach((_, index) =>
      simulateUploadProgress(upLoadedFiles.length + index)
    );
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => {
      // Revoke object URL to release memory
      URL.revokeObjectURL(prevFiles[index].src);
      return prevFiles.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <div className="relative border-[#12362A] border-2 border-dashed max-w-[492px] h-[326px] rounded-lg">
        <label
          htmlFor="file-upload"
          className="absolute inset-0 cursor-pointer"
        >
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
            multiple
          />
        </label>
        <div className="flex flex-col items-center justify-center gap-[58px] mt-16">
          <label htmlFor="file-upload" className="cursor-pointer">
            <img
              src={uploadPic}
              alt="Upload Picture"
              className="h-[91.83px] w-[135.38px] mr-2"
            />
          </label>
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-row gap-2 px-8 sm:gap-3">
              <img
                src={uploadIcon}
                alt="Upload Icon"
                className="h-[30px] w-[29px] -mt-1"
              />
              <p className="text-center md:text-nowrap">
                Drop your files here or Browse
              </p>
            </div>
          </label>
        </div>
      </div>

      {upLoadedFiles.length > 0 && (
        <div className="mt-[33px] flex flex-col items-center gap-[14px]">
          {upLoadedFiles.map((file, index) => (
            <div
              key={index}
              className="shadow-custom w-full h-[94px] rounded-[10px] flex items-center justify-between px-3"
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`${
                    file.progress < 100
                      ? "w-[81px] h-[66px] flex items-center justify-center bg-[#D9D9D980] rounded-lg opacity-50"
                      : ""
                  }`}
                >
                  <img
                    src={file.progress < 100 ? upLoadProduct : file.src}
                    alt={file.name}
                    style={{ maxWidth: "81px", maxHeight: "66px" }}
                  />
                </div>
                <div className="text-[#555555] font-semibold text-[14px] leading-[17.07px] flex flex-col gap-3 w-full md:w-[250px]">
                  <p>{file.name}</p>
                  {file.progress < 100 && (
                    <>
                      <div className="w-full h-[6px] rounded-lg bg-[#D9D9D980] relative overflow-hidden">
                        <div
                          className="h-full bg-[#009A49] absolute top-0 left-0 rounded-lg"
                          style={{ width: `${file.progress}%` }}
                        ></div>
                      </div>
                      <p>{file.progress} % done</p>
                    </>
                  )}
                  {file.progress === 100 && <p>{file.size} KB</p>}
                </div>
              </div>
              <img
                className="pr-2 cursor-pointer sm:pr-5"
                src={trash}
                alt="Remove"
                onClick={() => handleRemoveFile(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
