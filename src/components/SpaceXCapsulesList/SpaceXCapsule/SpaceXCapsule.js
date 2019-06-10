import React from "react";
import "./SpaceXCapsule.css";

const SpaceXCapsule = props => (
  <div className="capsule">
    <div className="capsule__serial">
      <b>capsule serial</b>: {props.capsule_serial}
    </div>
    <div className="capsule__id">
      <b>capsule id</b>: {props.capsule_id}
    </div>
    <div className="capsule__status">
      <b>status</b>: {props.status}
    </div>
    {props.originalLaunch ? (
      <div className="capsule__original-launch">
        <b>original launch</b>: {props.originalLaunch}
      </div>
    ) : null}
    {props.originalLaunchUnix ? (
      <div className="capsule__original-launch-unix">
        <b>original launch unix</b>: {props.originalLaunchUnix}
      </div>
    ) : null}
    {props.missions.length > 0 ? (
      <div className="capsule__missions">
        <b>missions</b>:
        <ol>
          {props.missions.map(mission => (
            <li key={mission.name}>
              <b>name</b>: {mission.name} <br /> <b>flight</b>: {mission.flight}
            </li>
          ))}
        </ol>
      </div>
    ) : (
      <div className="capsule__missions">
        <b>missions</b>: 0
      </div>
    )}
    <div className="capsule__landings">
      <b>landings</b>: {props.landings}
    </div>
    <div className="capsule__type">
      <b>type</b>: {props.type}
    </div>
    <div className="capsule__status">
      <b>status</b>: {props.status}
    </div>
    {props.details ? (
      <div className="capsule__details">
        <b>details</b>: {props.details}
      </div>
    ) : null}
    <div className="capsule__reuse-count">
      <b>reuse count</b>: {props.reuseCount}
    </div>
  </div>
);

export default SpaceXCapsule;
