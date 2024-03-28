import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styles from "./PricingCard.module.scss";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const PricingCard = ({ planName, price, period, features, buttonText, buttonAction }) => {
  return (
    <div className={styles.cardPricingContainer}>
      <Card className={styles.pricingCard}>
        <Card.Body className={styles.pricingBody}>
          <Card.Title className={styles.title}>{planName}</Card.Title>
          <div className={styles.separator}></div>
          <Card.Text className={styles.price}>
            {price} <small>/ {period}</small>
          </Card.Text>

          <div className={styles.separator}></div>
          <ListGroup className={styles.listGroup} variant="flush">
            {features.map((feature, index) => (
              <ListGroup.Item className={styles.itemList} key={index}>
                {feature}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className={styles.separator}></div>
          <ButtonSection
            text="¡Accede ahora!"
            toSectionId="Contacto"
            buttonClassName={styles.pricingButton}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingCard;
