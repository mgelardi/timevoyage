import { WelcomeBack } from "@/utils/constant";
import Image from "next/image";
import { Media } from "reactstrap";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import welcomeImage from "../../../../public/assets/images/login/whitenobg.png";

const LoginWelcome = () => {
  return (
    <div className="login-welcome">
      <div>
        <Image
          height={350}
          width={350}
          src={welcomeImage}
          className="img-fluid blur-up lazyloaded"
          alt="time voyage logo"
        />
      </div>
      <div className="how-work">
        <Media>
          <DynamicFeatherIcon iconName="PlayCircle" />
          <Media body>
            <h2>how it works?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          </Media>
        </Media>
      </div>
    </div>
  );
};

export default LoginWelcome;
