import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links" style={{ textAlign: "center" }}>
      <p>
        already have an account?
        <Link to="/login" className="login-link">
          login
        </Link>
      </p>
      <b>OR</b>
      <div className="link-btns">
        <Button
          className="google-sign-in"
          variant="outlined"
          startIcon={<FcGoogle />}
        >
          Sign up with Google
        </Button>
        <Button variant="outlined" startIcon={<GitHubIcon />}>
          Sign up with Github
        </Button>
      </div>
    </div>
  );
}
