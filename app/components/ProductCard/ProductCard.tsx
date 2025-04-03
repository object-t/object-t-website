import { Devicon } from "../Devicon/Devicon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeBranch, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { LinkedButton } from "../LinkedButton/LinkedButton";
import type { LinkedButtonProps } from "../LinkedButton/LinkedButton";

import "./product-card.css"



export interface ProductCardProps {
  headerImage: string;
  title: string;
  stacks: string[];
  description: string;
  stars: number;
  commits: number;
  pullRequests: number;
  linkedButtons?: LinkedButtonProps[];
}

export const ProductCard = ({
  headerImage,
  title,
  stacks,
  description,
  stars,
  commits,
  pullRequests,
  linkedButtons,
  ...props
}: ProductCardProps) => {
  return (
    <div
      className="product-card-container"
      {...props}
    >
      <div className="product-header-container"
        style={{ backgroundImage: `url(${headerImage})` }}>
      </div>

      <div className="product-title-container">
        <h1>
          {title}
        </h1>
      </div>
      <div className="product-stack-container">
        {stacks.map((stack, i) => (
          <Devicon
            key={i}
            icon={stack}
            size='40px'
          />
        ))}
      </div>
      <div className="product-description-container">
        <p>{description}</p>
      </div>
      <div className="repo-info-container">
        <div className="repo-info-item">
          <i className="fa-regular fa-star"></i>
          <div className="repo-info-icon"><FontAwesomeIcon icon={faStar} style={{ color: "#9D9F9F", fontSize: 22 }} /></div>
          <div className="repo-info-number">{stars}</div>
        </div>
        <div className="repo-info-item">
          <div className="repo-info-icon"><FontAwesomeIcon icon={faCodeBranch} style={{ color: "#9D9F9F", fontSize: 22 }} /></div>
          <div className="repo-info-number">{commits}</div>
        </div>
        <div className="repo-info-item">
          <div className="repo-info-icon"><FontAwesomeIcon icon={faCodePullRequest} style={{ color: "#9D9F9F", fontSize: 22 }} /></div>
          <div className="repo-info-number">{pullRequests}</div>
        </div>
      </div>
      <div className="product-button-container">
        {linkedButtons?.map((prop, index) => (
          <div className="product-button" key={prop.url || index}>
            <LinkedButton url={prop.url} label={prop.label} style={prop.style} backgroundColor={prop.backgroundColor} color={prop.color} />
          </div>
        ))}
      </div>
    </div>
  )
}

