import { connect } from "react-redux";
import ScaleIndicatorComponent from "../../../../components/app/map/controls/ScaleIndicatorComponent";

const mapStateToProps = state => {
  return {
    scale: state.map.scale
  };
};

const ScaleIndicatorContainer = connect(mapStateToProps)(
  ScaleIndicatorComponent
);

export default ScaleIndicatorContainer;
