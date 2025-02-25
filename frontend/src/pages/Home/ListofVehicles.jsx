import React, { useState } from "react";

const ImageAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Auto-display the first drop-down
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);

  const items = [
    {
      title: "Haulage",
      subItems: [
        {
          subTitle: "28 to 49",
          images: [
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-2821T.jpg?VersionId=m4W678YGrqA_jDVetNzxtdrGBV9rOp16",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-3125T.jpg?VersionId=5bk5yns6DELsGjF65NXO.sjTORadvoMo",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-3525T.jpg?VersionId=4f9rz3FA89NPDqyIood7Ej7QRb5aCkIM",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-4225T.jpg?VersionId=B71ouVfnpjQ_kxNfPaAidcySDQY3UbEW",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-4830T.jpg?VersionId=1YjVodvnW3CP_mhVIWJsso0JiBRReEBx",
          ],
        },
      ],
    },
    {
      title: "ILMCV Trucks",
      subItems: [
        {
          subTitle: "LCV",
          images: [
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/ultra-t6.png?VersionId=9mmbFoXFbfaKW6CppE0BMszLu7VExdp9",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/LPT-709-G.jpg?VersionId=A2525FfwdgyLXavl7BMqo0Cdm96AlO4U",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/LPT-710.jpg?VersionId=Y73ch1YvpPEZ9e19jha7WOa8VJ4nfaCR",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/LPT-712.jpg?VersionId=Vx9mmQMu_jNN87dfcMrrxM14Wr8sIbFf",
            "https://trucks.tatamotors.com/assets/trucks/files/Products/2023-10/Ultra%20T.7.png",
          ],
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedSubIndex(null); // Reset the selected sub-item when switching titles
  };

  const handleSubItemClick = (index) => {
    setSelectedSubIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center py-4">Types of Vehicles</h1>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 mb-4 rounded-lg overflow-hidden"
        >
          {/* Title Button */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-all rounded-t-lg"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </button>

          {/* Dropdown for Sub-items */}
          {openIndex === index && (
            <div className="p-4 space-y-2">
              {item.subItems.map((subItem, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => handleSubItemClick(subIndex)}
                  className={`w-full text-left p-2 rounded-md transition-all ${
                    selectedSubIndex === subIndex
                      ? "bg-blue-100 font-bold"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {subItem.subTitle}
                </button>
              ))}

              {/* Image Grid for Selected Sub-item */}
              {selectedSubIndex !== null && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {item.subItems[selectedSubIndex].images.map(
                    (imageUrl, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imageUrl}
                        alt={`${item.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                      />
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageAccordion;
