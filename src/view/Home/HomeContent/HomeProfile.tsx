import React, { lazy, Suspense } from "react";
const HomeProfileTexts = lazy(() => import("./HomeProfileTexts"));
const HomeProfileImage = lazy(() => import("./HomeProfileImage"));

interface Props {}

const HomeProfile = (props: Props) => {
  return (
    <div className="content-wrapper">
      <div className="myImage ill">
        <Suspense fallback="loading image...">
          <HomeProfileImage />
        </Suspense>
      </div>
      <Suspense fallback="loading home contene...">
        <HomeProfileTexts />
      </Suspense>
    </div>
  );
};

export default HomeProfile;
