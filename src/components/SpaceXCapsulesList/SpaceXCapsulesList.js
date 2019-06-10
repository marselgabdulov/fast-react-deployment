import React from "react";
import "./SpaceXCapsulesList.css";
import SpaceXCapsule from "./SpaceXCapsule/SpaceXCapsule";

import { useFetch } from "../../hooks/hooks";

function SpaceXCapsulesList() {
  const [data, loading] = useFetch("https://api.spacexdata.com/v3/capsules");
  return (
    <>
      <h2>SpaceX Capsules</h2>
      {loading ? (
        "Loading..."
      ) : (
        <div className="capsules-list">
          {data.map(capsule => (
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
      )}
    </>
  );
}

export default SpaceXCapsulesList;
