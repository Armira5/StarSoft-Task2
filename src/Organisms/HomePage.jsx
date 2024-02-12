import React from "react";
import Box from "../Molecules/Box";

const HomePageContent = () => {
  return (
    <div className="homepage-content text-center justify-center items-center bg-blue-900 p-12 relative">
      <p className="text-white ">PRICING</p>
      <h4 className="text-white text-3xl font-bold">
        The right price for you, whoever you are
      </h4>
      <p className="text-white w-2/5 mx-auto text-sm pt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        minus mollitia at delectus totam. Aliquam temporibus.
      </p>
      <div className="flex items-center justify-center p-10 relative">
        <Box
          title="Pro"
          price="20"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <Box
          title="Hobby"
          price="79"
          features={[
            "jKSCHJKnclkNCKLNCKLSNCJSKchjNCKLNckNCJkn",
            "Feature 2",
            "Feature 3",
            "Feature 4",
            "Feature 5"
          ]}
        />
        <Box
          title="Premium"
          price="30"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
      </div>
    </div>
  );
};

export default HomePageContent;
