import { StanleyCupModel } from "../components/stanleyCupModel";

import { Navbar } from "../components/first/Navbar/Navbar";

import { ViewPage } from "../components/first/ViewPage/ViewPage";

export const View3D = () => {
  return (
    <div>
      <Navbar />
      <ViewPage />
      <StanleyCupModel />
    </div>
  );
};
