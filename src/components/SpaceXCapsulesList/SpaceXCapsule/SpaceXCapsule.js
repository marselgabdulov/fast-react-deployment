import React from "react";
import "./SpaceXCapsule.css";

const SpaceXCapsule = props => (
  <tr>
    <td>{props.capsule_serial}</td>
    <td>{props.capsule_id}</td>
    <td>{props.status}</td>
    <td>{props.original_launch ? props.original_launch : "---"}</td>
    <td>{props.original_launch_unix ? props.original_launch_unix : "---"}</td>
    <td>
      {props.missions.length > 0
        ? props.missions.map(mission => (
            <>
              <p>
                <b>name: </b>
                {mission.name}
              </p>
              <p>
                <b>flight: </b>
                {mission.flight}
              </p>
            </>
          ))
        : 0}
    </td>
    <td>{props.landings}</td>
    <td>{props.type}</td>
    <td>{props.details ? props.details : "---"}</td>
    <td>{props.reuseCount}</td>
  </tr>
);

export default SpaceXCapsule;
