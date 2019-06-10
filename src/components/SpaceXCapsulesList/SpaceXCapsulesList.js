import React from "react";
import { spaceXCapsules } from "../../data/data";
import "./SpaceXCapsulesList.css";
import SpaceXCapsule from "./SpaceXCapsule/SpaceXCapsule";

const SpaceXCapsulesList = () => (
  <div className="capsules-list">
    {spaceXCapsules.map(capsule => (
      <SpaceXCapsule
        key={capsule.capsule_serial}
        capsule_serial={capsule.capsule_serial}
        capsule_id={capsule.capsule_id}
        status={capsule.status}
        originalLaunch={capsule.original_launch}
        originalLaunchUnix={capsule.original_launch_unix}
        missions={capsule.missions}
        landings={capsule.landings}
        type={capsule.type}
        details={capsule.details}
        reuseCount={capsule.reuse_count}
      />
    ))}
  </div>
);

export default SpaceXCapsulesList;
