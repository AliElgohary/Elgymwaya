import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";
import { longText } from "../../../utils/cutLongText";

// eslint-disable-next-line react/prop-types
const Tooltip = ({ content, placement, className }) => {
  return (
    <OverlayTrigger
      delay={{ hide: 450, show: 300 }}
      overlay={(props) => (
        <BootstrapTooltip {...props}>{content}</BootstrapTooltip>
      )}
      placement={placement}
    >
      <span className={className}>{longText(content)}</span>
    </OverlayTrigger>
  );
};

export default Tooltip;
