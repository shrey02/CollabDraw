import classNames from "./index.module.css";
import { COLORS } from "@/constants";

const Toolbox = () => {
  const updateBrushSize = (e) => {};

  return (
    <div className={classNames.toolboxContainer}>
      <div className={classNames.toolItem}>
        <h4 className={classNames.toolText}>Stroke Color</h4>
        <div className={classNames.itemContainer}>
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.BLACK }}
          />
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.BLUE }}
          />
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.ORANGE }}
          />
          <div
            className={classNames.colorBox}
            style={{ backgroundColor: COLORS.YELLOW }}
          />
        </div>
      </div>

      <div className={classNames.toolBrush}>
        <h4 className={classNames.toolText}>Brush Size</h4>
        <div className={classNames.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;