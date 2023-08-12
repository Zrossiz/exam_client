'use client'

import { useSelector } from 'react-redux';
import { RootState } from "./redux/store";

import Breadcrumbs from "./elements/Breadcrumbs/Breadcrumbs";
import ContentContainer from "./elements/ContentContainer/ContentContainer";
import Htag from "./elements/Htag/Htag";
import Span from './elements/Span/Span';

import BorderedItem from "./elements/BorderedItem/BorderedItem";
import styles from './page.module.css';
import Item from './elements/Item/Item';

export default function Home() {
    const { currentQuestionLink, currentQuestionTitle } = useSelector((state: RootState) => state.question)
  return (
    <>
      <Breadcrumbs>
        <Span color="white">
          Главная
        </Span>
      </Breadcrumbs>
      <ContentContainer>
        <div className={styles.titleContainer}>
          <Htag tag='h1'>
            Экзаменационные билеты ДОПОГ 2023
          </Htag>
          <Span>Последнее обновление 21.03.2023</Span>
        </div>
        <div className={styles.testing}>
          <Htag tag="h2" color="grey">
            Тестирование по билетам
          </Htag>
          <div className='section'>
            <Span>
              Полный официальный перечень экзаменационных вопросов с подробными разъяснениями
              для подготовки водителей автотранспортных средств, перевозящих опасные грузы,
              и кандидатов в консультанты по вопросам безопасности перевозки опасных грузов автомобильным транспортом.
            </Span>
          </div>
        </div>
        {currentQuestionTitle && 
          <div className='section'>
            <Htag tag="h2">
              Вы остановились на:
            </Htag>
            <div className={styles.currentQuestionLink}>
              <BorderedItem href={currentQuestionLink} weight="normal" color="green">
                {currentQuestionTitle}
              </BorderedItem>
            </div>
          </div>
        }
        <div className="section">
          <Htag tag="h2">
            Быстрые ссылки:
          </Htag>
          <Item href='1'>
            Перечень вопросов по темам
          </Item>
          <Item href='2'>
            Скачать билеты PDF
          </Item>
          <Item href='3'>
            Открыть библиотеку
          </Item>
        </div>
        <div className="section">
          <Htag tag='h2'>
            Попробуйте себя в режиме Экзамена:
          </Htag>
          <BorderedItem href='/exam' color='grey' weight='bold'>
            Симулятор экзамена
          </BorderedItem>
        </div>
      </ContentContainer>
    </>
  );
}
