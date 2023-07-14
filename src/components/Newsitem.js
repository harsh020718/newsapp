import React from "react";

const Newsitem = (props) => {
  let { title, description, urlToImage, newsUrl, author, date, source } = props;
  //isi ko destructuring kehta hai, hume props me title aur description dono ko bheja
  //aur phir dono ki hi value ko nikal diya
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "85%", transform: "translateX(-50%)", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://www.accutarbio.com/wp-content/themes/accutar/images/image_banner4.png"
          }
          // agar urlToImage null nhi hai tab urlToImage laga do aur null hai tab https://www.accutarbio.com/wp-content/themes/accutar/images/image_banner4.png
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
