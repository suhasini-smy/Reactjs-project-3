import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map(({ name, image }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh-210px);
`;

const FoodCards = styled.div`
  /* background: white;
  width: 200px;
  height: 200px; */
`;

const FoodCard = styled.div`
  /* background: red;
  width: 200px;
  height: 200px; */
`;
