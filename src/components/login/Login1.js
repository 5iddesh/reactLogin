import "../signup/loginBox.css";
import Form from "./Form";
import Links from "./Links";

export default function Login1() {
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
