/* eslint-disable-next-line */
import MyButton from "../../components/my-button/my-button";

export interface LandingProps {}

export function Landing() {
  return (
    <div>
      <style jsx>{`
        div {
          color: red;
          font-size: 24pt;
        }
      `}</style>
      <h1>Welcome to Landing!</h1>
      <MyButton></MyButton>
    </div>
  );
}

export default Landing;
