import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightBox.module.scss';

const RightBox = ({ title, description, imgSrc, subtitle }) => {
  const titleParts = title.split(' ');
  const officeIndex = titleParts.findIndex(part => part.toLowerCase() === 'office');
  const specialIndex = titleParts.findIndex(part => part.toLowerCase() === 'special');

  return (
    <div className={`col-md-12 ${styles.rightBox}`}>
      <img className={styles.rightBackground} src={imgSrc} alt={title} />
      <div className={styles.overlay}>
        <div className={styles.rightContent}>
          <div className={styles.titleContainer}>
            <h2>
              {titleParts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: getFontWeight(index, officeIndex, specialIndex),
                  }}
                >
                  {part}
                  {index < titleParts.length - 1 && ' '}
                </span>
              ))}
            </h2>
          </div>
          <h3>{subtitle}</h3>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );

  function getFontWeight(index, officeIndex, specialIndex) {
    if (index === officeIndex || index === specialIndex) {
      return 'bold';
    } else {
      return 'normal';
    }
  }
};

RightBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default RightBox;
