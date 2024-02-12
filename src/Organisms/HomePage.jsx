import React from "react";
import Box from "../Molecules/Box";

const HomePageContent = () => {
  return (
    <div className="homepage-content text-center">
      <p>PRICING</p>
      <h4>The right price for you, whoever you are</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        minus mollitia at delectus totam. Aliquam temporibus exercitationem
        beatae? Quam rerum dignissimos tenetur nam debitis amet eum unde aut
        quod veniam.
      </p>
      <div className="flex items-center justify-center">
        <Box
          title="Hobby"
          price="79"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <Box
          title="Pro"
          price="20"
          features={["Feature 1", "Feature 2", "Feature 3"]}
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
