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
        <table>
          <thead>
            <tr>
              <th>serial</th>
              <th>id</th>
              <th>status</th>
              <th>Original launch</th>
              <th>Original launch unix</th>
              <th>missions</th>
              <th>landings</th>
              <th>type</th>
              <th>details</th>
              <th>reuse count</th>
            </tr>
          </thead>
          <tbody>
            {data.map(capsule => (
              <SpaceXCapsule
                key={capsule.capsule_serial}
                capsule_serial={capsule.capsule_serial}
                capsule_id={capsule.capsule_id}
                status={capsule.status}
                original_launch={capsule.original_launch}
                original_launch_unix={capsule.original_launch_unix}
                missions={capsule.missions}
                landings={capsule.landings}
                type={capsule.type}
                details={capsule.details}
                reuseCount={capsule.reuse_count}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default SpaceXCapsulesList;
