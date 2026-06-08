import React, { useState, useRef } from "react";
import { uploadPhoto } from "../firebase";

export default function ProfilePhotos({ user }) {
  const [photoSlots, setPhotoSlots] = useState(new Array(6).fill(null));
  const fileInputRef = useRef(null);
  const uploadIndexRef = useRef(null);

  const handleAddPhotoClick = (index) => {
    uploadIndexRef.current = index;
    fileInputRef.current.click();
  };

  const handleRemovePhoto = (index) => {
    const newSlots = [...photoSlots];
    newSlots[index] = null;
    setPhotoSlots(newSlots);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file || !user?.uid) return;

    const index = uploadIndexRef.current;

    // Temporary preview while uploading
    const previewUrl = URL.createObjectURL(file);
    const newSlots = [...photoSlots];
    newSlots[index] = { previewUrl, isUploading: true, storageUrl: null };
    setPhotoSlots(newSlots);

    try {
      // ✅ Get actual Firebase URL
      const downloadURL = await uploadPhoto(user.uid, file);

      const finalSlots = [...newSlots];
      finalSlots[index] = { previewUrl: downloadURL, isUploading: false, storageUrl: downloadURL };
      setPhotoSlots(finalSlots);

    } catch (error) {
      console.error("Error uploading file:", error);
      const revertedSlots = [...photoSlots];
      revertedSlots[index] = null;
      setPhotoSlots(revertedSlots);
    } finally {
      event.target.value = "";
    }
  };

  const uploadedCount = photoSlots.filter((p) => p?.storageUrl).length;

  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen font-['Inter']">
      <main className="flex-grow flex flex-col p-6 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Upload your photos</h1>
        <p className="text-gray-600 mb-8">
          Add at least 4 photos to continue.
        </p>

        <div id="photo-grid" className="grid grid-cols-3 gap-3 mb-4">
          {photoSlots.map((photo, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative"
            >
              {photo ? (
                <>
                  <img
                    src={photo.previewUrl}
                    className="w-full h-full object-cover rounded-lg"
                    alt={`upload-preview-${index}`}
                  />
                  <button
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                  >
                    &times;
                  </button>
                  {photo.isUploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleAddPhotoClick(index)}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-gray-400"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button
            disabled={uploadedCount < 4}
            className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white transform hover:scale-105 transition-transform disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          accept="image/*"
        />
      </main>
    </div>
  );
}
