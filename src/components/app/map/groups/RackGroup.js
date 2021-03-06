import React from "react";
import { Group } from "react-konva";
import RackEnergyFillContainer from "../../../../containers/app/map/RackEnergyFillContainer";
import RackSpaceFillContainer from "../../../../containers/app/map/RackSpaceFillContainer";
import Shapes from "../../../../shapes/index";
import { RACK_BACKGROUND_COLOR } from "../../../../util/colors";
import { convertLoadToSimulationColor } from "../../../../util/simulation-load";
import TileObject from "../elements/TileObject";

const RackGroup = ({ tile, inSimulation, rackLoad }) => {
  let color = RACK_BACKGROUND_COLOR;
  if (inSimulation && rackLoad >= 0) {
    color = convertLoadToSimulationColor(rackLoad);
  }

  return (
    <Group>
      <TileObject
        positionX={tile.positionX}
        positionY={tile.positionY}
        color={color}
      />
      <Group opacity={inSimulation ? 0.3 : 1}>
        <RackSpaceFillContainer
          tileId={tile.id}
          positionX={tile.positionX}
          positionY={tile.positionY}
        />
        <RackEnergyFillContainer
          tileId={tile.id}
          positionX={tile.positionX}
          positionY={tile.positionY}
        />
      </Group>
    </Group>
  );
};

RackGroup.propTypes = {
  tile: Shapes.Tile
};

export default RackGroup;
