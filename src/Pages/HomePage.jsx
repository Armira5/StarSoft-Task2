import React from "react";
import Box from "../Molecules/Box";

const HomePageContent = () => {
  return (
    <div className="homepage-content text-center bg-blue-900 p-6 md:p-12">
      <p className="text-white text-lg">PRICING</p>
      <h4 className="text-white text-2xl md:text-3xl font-bold mt-4 mb-6">
        The right price for you, whoever you are
      </h4>
      <p className="text-white text-sm mx-auto max-w-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        minus mollitia at delectus totam. Aliquam temporibus.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-10 space-y-8 md:space-y-0">
        <Box
          title="Pro"
          price="20"
          features={[
            "Pariatur quod similique",
            "Sapiente libero doloribus",
            "Ve ipsa esse repudianae",
          ]}
          index={0}
        />
        <Box
          title="Hobby"
          price="79"
          features={[
            "Quia rem est sed impedit magnam",
            "Dolorem vero ratione voluplates",
            "Qui sed ab doloribus voluptates dolore",
            "Laborum commodi molestiae id et fuglat",
            "Nam ut ipsa nescuint culpa modi dolor",
          ]}
          index={1}
        />
        <Box
          title="Premium"
          price="30"
          features={[
            "Pariatur quod similique",
            "Sapiente libero doloribus",
            "Ve ipsa esse repudianae",
          ]}
          index={2}
        />
      </div>
    </div>
  );
};

export default HomePageContent;
