import "./index.scss";
import { useEffect, useRef } from "react";
import { Box } from "../../../shared/ui/Box/index.jsx";
import { ContentLayout } from "../../../shared/layout/content/index.jsx";
import { Button } from "../../../shared/ui/Button/index.jsx";
import star from "../../../shared/assets/star.svg";
import bigstar from "../../../shared/assets/bigstar.svg";
import paypal from "../../../shared/assets/paypal.svg";
import line from "../../../shared/assets/line.svg";
import { AboutPage } from "../../about/index.js";

export const HomePage = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.querySelectorAll(
        ".homepage__section__card",
      );
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        cardsRef.current.getBoundingClientRect();
      const centerX = clientX - left - width / 2;
      const centerY = clientY - top - height / 2;

      cards.forEach((card, index) => {
        const depth = (index + 1) * 5;
        const moveX = (centerX / width) * depth;
        const moveY = (centerY / height) * depth;
        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    const cardsContainer = cardsRef.current;
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box classname="homepage__main" as="main">
        <ContentLayout as="section" classname="homepage__section__main">
          <div className="homepage__section__title">
            <div>
              <p className="paragraph">
                <span>
                  <img src={star} />
                </span>{" "}
                Ознайомтеся з нішею <span className="green">«Refund»</span>
              </p>
              <h1 className="title semibold">
                Пройдіть власний шлях до успіху з {}
                <span className="green">
                  Samurai <img src={bigstar} />
                </span>
              </h1>
              <p className="paragraph title__description">
                Повертайте гроші за будь-який товар, незалежно від його ціни та
                категорії.
              </p>
            </div>
            <Button classname="homepage__section__button green-background">
              <p className="paragraph-small semibold">Записатися</p>
            </Button>
          </div>
          <div ref={cardsRef} className="homepage__section__cards">
            <div className="homepage__section__cards-relative homepage__section__cards">
              <div className="homepage__section__card">
                <div className="homepage__section__card-content">
                  <div className="paragraph card__title">
                    <label>
                      <img src={paypal} />
                      <h3 className="paragraph"> PAYPALL </h3>
                    </label>
                    <p className="card__time">6m ago</p>
                  </div>
                  <p className="paragraph">You received $599 USD from Adidas</p>
                </div>
              </div>
              <div className="homepage__section__card">
                <div className="homepage__section__card-content">
                  <div className="paragraph card__title">
                    <label>
                      <img src={paypal} />
                      <h3 className="paragraph"> PAYPALL </h3>
                    </label>
                    <p className="card__time">6m ago</p>
                  </div>
                  <p className="paragraph">You received $599 USD from Adidas</p>
                </div>
              </div>
              <div className="homepage__section__cards-shadow homepage__section__cards">
                <div className="homepage__section__card">
                  <div className="homepage__section__card-content">
                    <div className="paragraph card__title">
                      <label>
                        <img src={paypal} />
                        <h3 className="paragraph"> PAYPALL </h3>
                      </label>
                      <p className="card__time">6m ago</p>
                    </div>
                    <p className="paragraph">
                      You received $599 USD from Adidas
                    </p>
                  </div>
                </div>
                <div className="homepage__section__card">
                  <div className="homepage__section__card-content">
                    <div className="paragraph card__title">
                      <label>
                        <img src={paypal} />
                        <h3 className="paragraph"> PAYPALL </h3>
                      </label>
                      <p className="card__time">6m ago</p>
                    </div>
                    <p className="paragraph">
                      You received $599 USD from Adidas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentLayout>
      </Box>
      <Box as="div">
        <ContentLayout as="section" classname="homepage__section__second">
          <div className="homepage__section__second_title-div">
            <h1 className="title-large homepage__section__second_title">
              Що таке Refund?
            </h1>
            <div className="homepage__section__second_title-line">
              <img
                className="homepage__section__second_title-line"
                src={line}
              />
            </div>
          </div>
          <ol className="homepage__section__second_list">
            <li>
              <label className="paragraph-bigger semibold">Refund</label>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur papa adipiscing elit Ut
                et massa mi. Aliquam in aha hendrerit urna. dabet ulta mori anta
                marat yumi ol kuranma olki johim
              </p>
            </li>
            <li>
              <label className="paragraph-bigger semibold">Refund</label>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur papa adipiscing elit Ut
                et massa mi. Aliquam in aha hendrerit urna. dabet ulta mori anta
                marat yumi ol kuranma olki johim
              </p>
            </li>
            <li>
              <label className="paragraph-bigger semibold">Refund</label>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur papa adipiscing elit Ut
                et massa mi. Aliquam in aha hendrerit urna. dabet ulta mori anta
                marat yumi ol kuranma olki johim
              </p>
            </li>
          </ol>
        </ContentLayout>
        <AboutPage />
      </Box>
    </>
  );
};
