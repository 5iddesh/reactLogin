import "./loginBox.css";
import Form from "./inputs";
import Links from "./Links";

export default function LoginBox() {
  return (
    <div className="parent">
      <div className="image" style={{ paddingBottom: "50px" }}></div>
      <div>
        <Form />

        <Links />
      </div>
    </div>
  );
}
