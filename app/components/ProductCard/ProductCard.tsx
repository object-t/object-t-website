import { useTranslation } from "react-i18next";
import { Devicon } from "../Devicon/Devicon"
import "./product-card.css"

export interface ProductCardProps {
  headerImage: string;
  title: string;
  stacks: string[];
  description: string;
  stars: number;
  forks: number;
  pullRequests: number;
}

export const ProductCard = ({
  headerImage,
  title,
  stacks,
  description,
  stars,
  forks,
  pullRequests,
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
          <div className="repo-info-icon"><i className="fa-solid fa-coffee"></i></div>
          <div className="repo-info-number">{stars}</div>
        </div>
        <div className="repo-info-item">
          <div className="repo-info-icon">⭐️</div>
          <div className="repo-info-number">{forks}</div>
        </div>
        <div className="repo-info-item">
          <div className="repo-info-icon">⭐️</div>
          <div className="repo-info-number">{pullRequests}</div>
        </div>
      </div>
    </div>
  )
}

