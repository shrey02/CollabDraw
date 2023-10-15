import classNames from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { COLORS, MENU_ITEMS } from "@/constants";
import cx from "classnames";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";
import { socket } from "@/socket";

const Toolbox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

    const updateBrushSize = (e) => {
      dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
      socket.emit("changeConfig", { color, size: e.target.value });
    };
  
    const updateColor = (newColor) => {
      dispatch(changeColor({ item: activeMenuItem, color: newColor }));
      socket.emit("changeConfig", { color: newColor, size });
    };
  return (
    <div className={classNames.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={classNames.toolItem}>
          <h4 className={classNames.toolText}>Stroke Color</h4>
          <div className={classNames.itemContainer}>
            <div
               className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
             
            />
            <div
              className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
               className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
               className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
               className={cx(classNames.colorBox, {
                [classNames.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}
       {showBrushToolOption && (
        <div className={classNames.toolBrush}>
          <h4 className={classNames.toolText}>Brush Size</h4>
          <div className={classNames.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={size}
              onChange={updateBrushSize}
            />
          </div>
    </div>
    )}
    </div>
  );
};

export default Toolbox;