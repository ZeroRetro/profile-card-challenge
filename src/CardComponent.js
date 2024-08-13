import _ from 'lodash';
import { Button, Card } from 'react-bootstrap';
import './CardComponent.css';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaGithub,
  FaLink,
} from 'react-icons/fa';

const getSocialIcon = (social) => {
  switch (social) {
    case 'youtube':
      return <FaYoutube />;
    case 'twitter':
      return <FaTwitter />;
    case 'instagram':
      return <FaInstagram />;
    case 'twitch':
      return <FaTwitch />;
    case 'github':
      return <FaGithub />;
    default:
      return <FaLink />;
  }
};

const CardComponent = ({ card }) => {
  const { name, description, image, socials } = card;

  return (
    <Card className="card-container">
      <div className="card-image-container">
        <Card.Img
          variant="top"
          src={require(`${image}`)}
          alt={name}
          className="card-image"
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="card-socials-container">
          {_.map(socials, (social, key) => (
            <Button
              key={key}
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="card-socials-button"
            >
              {getSocialIcon(key)}
            </Button>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
