import React from "react";
import styles from "./BasicInfo.module.css";
//Medium Section Part 1
const BasicInfo = ({ person }) => {
  return (
    <div className={styles.information}>
      <p className={styles.h1}> Name: {person.name}</p>
      <p>Phone Number: {person.number}</p>
      <p>Date of Birth: {person.dateOfBirth}</p>
    </div>
  );
};

export default BasicInfo;
