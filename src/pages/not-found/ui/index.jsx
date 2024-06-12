import "./index.scss";
import { Box } from "../../../shared/ui/Box/index.jsx";
import { ContentLayout } from "../../../shared/layout/content/index.jsx";
import { Button } from "../../../shared/ui/Button/index.jsx";
import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <>
      <Box as="main">
        <ContentLayout as="section" classname="notfound__section">
          <span>
            <h1>Сторінки не знайдено</h1>
            <Link to={"/"}>
              <Button classname="notfound__button green-background">
                Перейти на головну
              </Button>
            </Link>
          </span>
        </ContentLayout>
      </Box>
    </>
  );
};
