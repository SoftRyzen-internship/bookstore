import { ICONS } from 'assets/icons';
import { ContactInfo } from 'components/ContactInfo';
import { Logo } from 'components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'components/Containers/Container';
import s from './Footer.module.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations/operations-user';

export const Footer = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <footer className={s.footer}>
      <Container>
        {/* <div className={s.container}> */}
        <button onClick={logout}>Logout</button>
        <div className={s.blockBox}>
          <div className={s.blockBoxItem}>
            <div className={s.footerLogo}>
              <Logo />
            </div>
            <ContactInfo />
          </div>
          {/* footerInfo */}
          <div className={s.blockBoxItem}>
            <h3 className={s.title}>Інформація</h3>
            <ul>
              <li>
                <Link className={s.footerLink} to="#">
                  Доставка та оплата
                </Link>
              </li>
              <li>
                <Link className={s.footerLink} to="#">
                  Подарункові сертифікати
                </Link>
              </li>
              <li>
                <Link className={s.footerLink} to="#">
                  Повернення товара
                </Link>
              </li>
            </ul>
          </div>
          {/* footerAbout */}
          <div className={s.blockBoxItem}>
            <div>
              <h3 className={s.title}>Про магазин</h3>
              <ul>
                <li>
                  <Link className={s.footerLink} to="#">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link className={s.footerLink} to="#">
                    Умови користування
                  </Link>
                </li>
                <li>
                  <Link className={s.footerLink} to="#">
                    Політика конфіденційності
                  </Link>
                </li>
                <li>
                  <Link className={s.footerLink} to="#">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* footerSocial */}
          <div className={s.blockBoxItem}>
            <h3 className={s.title}>Ми в соціальних мережах</h3>
            <ul className={s.footerSocialList}>
              <li>
                <a
                  className={s.footerBoxSocialLink}
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer nofollow"
                  aria-label="Посилання на фейсбук"
                  target="_blank"
                >
                  <ICONS.FACEBOOK />
                </a>
              </li>
              <li>
                <a
                  className={s.footerBoxSocialLink}
                  href="https://www.twitter.com/"
                  rel="noopener noreferrer nofollow"
                  aria-label="Посилання на Твітер"
                  target="_blank"
                >
                  <ICONS.TWITTER />
                </a>
              </li>
              <li>
                <a
                  className={s.footerBoxSocialLink}
                  href="https://www.youtube.com/"
                  rel="noopener noreferrer nofollow"
                  aria-label="Посилання на ютуб"
                  target="_blank"
                >
                  <ICONS.YOUTUBE />
                </a>
              </li>
              <li>
                <a
                  className={s.footerBoxSocialLink}
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer nofollow"
                  aria-label="Посилання на лiнкедин"
                  target="_blank"
                >
                  <ICONS.LINKEDIN />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerCopy}>
          <span id="copyright">&copy; 2004-2023. Усі права захищено</span>
        </div>
        {/* </div> */}
      </Container>
    </footer>
  );
};
