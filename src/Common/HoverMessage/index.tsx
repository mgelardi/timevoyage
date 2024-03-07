import { UncontrolledPopover, PopoverBody, Media } from "reactstrap";
import ButtonPopover from "./ButtonPopover";
import { ImagePath, SvgPath } from "../../utils/constant";
import Image from "next/image";
import { HoverMessageProps } from "@/layout/LayoutTypes";

const HoverMessage = ({ name,target, placement, imagePath}:HoverMessageProps ) => {
  return (
    <UncontrolledPopover trigger="hover" placement={placement} target={target}>
      <PopoverBody>
        <Media className="popover-media">
          <Image height={60} width={60} className="img-fluid user-img" src={`${ImagePath}/${imagePath}`} alt="user"/>
          <Media body>
            <h4>{name}</h4>
            <h6>
              <Image height={15} width={15} src={`${SvgPath}/users.svg`} className="img-fluid" alt="users"/>
              3 mutual connections
            </h6>
            <h6>
              <Image height={15} width={15} src={`${SvgPath}/map-pin.svg`} className="img-fluid" alt="users"/>
              lives in dublin
            </h6>
          </Media>
        </Media>
        <ButtonPopover />
      </PopoverBody>
    </UncontrolledPopover>
  );
};

export default HoverMessage;
