import profilePhoto from "../images/Ankit.jpg";
import githubBtn from "../images/GitHub-Mark-Light-120px-plus.png";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePhoto} alt="" width="300px" className="photo" />
      <h1>Ankit Sharma</h1>
      <div>Frontend Developer</div>
      <a href="https://ankit-sharma.netlify.app">ankit-sharma.website</a>
      <div className="buttons">
        <a href="mailto:ankit.95sharma@gmail.com">
          <button className="secondary">
            <i class="fa-solid fa-envelope"></i>
            Email
          </button>
        </a>
        <button className="primary">
          <i class="fa-brands fa-github"></i>
          GitHub
        </button>
      </div>
    </div>
  );
}