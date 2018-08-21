import React from 'react';
import Container from '../components/container';

import styles from './css-module-demo.module.css';

// <User avatar="..." username="..." excerpt="..."/>
const User = (props) => (
  <div className={ styles.user }>
    <img src={props.avatar} className={ styles.avatar } alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>
)


export default () => (
  <Container>
    <User
      avatar="http://placekitten.com/150/150"
      username="Groucho"
      excerpt="I'm a grouchy cat"
    />
    <User
      avatar="http://placekitten.com/151/149"
      username="Kittypoo"
      excerpt="Kitty splat wants food"
    />
    <User
      avatar="http://placekitten.com/149/151"
      username="Mroaw"
      excerpt="Not sure if I want to go out or not"
    />
    <User
      avatar="http://placekitten.com/151/152"
      username="Helo"
      excerpt="Black shity thing, don't believe the picture"
    />
  </Container>
)