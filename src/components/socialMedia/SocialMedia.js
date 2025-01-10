import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const ImageWrapper = styled.span`
  img {
    background-color: ${(props) => props.backgroundColor};
    padding: 8px;
    border-radius: 50%;
  }
  &:hover img {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {media.fontAwesomeIcon ? (
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          ) : media.imageSrc ? (
            <ImageWrapper {...media} {...props}>
              <img
                className="skill-image"
                src={require(`../../assets/images/${media.imageSrc}`)}
                alt={media.name || "social media icon"}
              />
            </ImageWrapper>
          ) : null}
        </a>
      ))}
    </div>
  );
}
