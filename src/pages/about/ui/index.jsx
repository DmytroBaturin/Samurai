import "./index.scss";
import { Card } from "../../../shared/ui/Card/index.jsx";
import { ContentLayout } from "../../../shared/layout/content/index.jsx";
import clock from "../../../shared/assets/clock.svg";
import { Box } from "../../../shared/ui/Box/index.jsx";

export const AboutPage = () => {
  return (
    <ContentLayout classname="aboutpage__main">
      <h1>Чому ми рекомендуємо займатись Рефаундом?</h1>
      <Box as="section" classname="aboutpage__cards">
        <Card classname="aboutpage__card">
          <div className="aboutpage__card__content">
            <div className="aboutpage__card__title">
              <img src={clock} />
            </div>
            <div className="aboutpage__card__description">
              <h2>Вільний графік</h2>
              <p>
                Досягайте значних результатів, працюючи тільки тоді, коли вам
                зручно
              </p>
            </div>
          </div>
        </Card>
        <Card classname="aboutpage__card">
          <div className="aboutpage__card__content">
            <div className="aboutpage__card__title">
              <h1>
                Хлопче, я підняв товару на{" "}
                <span className="green semibold paragraph-bigger">1500$</span>
              </h1>
            </div>
            <div className="aboutpage__card__description">
              <h2>Великий дохід</h2>
              <p>Ви можете потенційно отримувати дохід від 1500$ на місяць.</p>
            </div>
          </div>
        </Card>
        <Card classname="aboutpage__card">
          <div className="aboutpage__card__content">
            <div className="aboutpage__card__title">
              <img src={clock} />
            </div>
            <div className="aboutpage__card__description">
              <h2>Нові знання</h2>
              <p>
                Це чудова можливість отримати нові навички щоб розширити свою
                базу знань
              </p>
            </div>
          </div>
        </Card>
      </Box>
    </ContentLayout>
  );
};
